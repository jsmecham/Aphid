# encoding: UTF-8

module Aphid
  module Rake
    module Support

      # Sprocketize ------------------------------------------------------------

      def sprocketize(output, options = {})

        sprockets = Sprockets::Environment.new(ROOT_PATH) # do |env|
        #   env.logger = Logger.new(STDOUT)
        # end
        sprockets.append_path(ROOT_PATH)
        sprockets.append_path("Library")
        sprockets.append_path("Application")
        sprockets.append_path("Vendor/JavaScripts")
        sprockets.append_path("Vendor/Prototype/src")
        sprockets.append_path("Vendor/script.aculo.us/src")

        build_dir = Pathname(ROOT_PATH).join("Build")

        options[:source_files].each do |bundle|
          assets = sprockets.find_asset(bundle)
          prefix, basename = assets.pathname.to_s.split('/')[-2..-1]
          FileUtils.mkpath build_dir.join(prefix)

          puts "Sprocketizing #{bundle} to #{build_dir.join(prefix, basename)} ..."

          assets.write_to(build_dir.join(prefix, basename))
          assets.to_a.each do |asset|
            # strip filename.css.foo.bar.css multiple extensions
            realname = asset.pathname.basename.to_s.split(".")[0..1].join(".")
            asset.write_to(build_dir.join(prefix, realname))
          end
        end
      end

      # Lessify ----------------------------------------------------------------

      def lessify(input, output, options = {})
        puts "Lessifying #{input} to #{output} ..."
        template = File.read(input)
        $LESS_LOAD_PATH = [ "Resources/Stylesheets" ]
        @parser ||= Less::Parser.new :paths => $LESS_LOAD_PATH
        File.open(output, 'w') do |file|
          file.write @parser.parse(template).to_css
        end
      rescue => e
        $FAILED = true
        if $WATCHING and $GROWL
          prefix = "An "
          if e.instance_of? Less::ParseError
            prefix = "A syntax"
          end
          begin
            $GROWL.notify "Build Failed", "#{PROJECT_NAME} Build Failed — Lessify",
              "#{prefix} error occurred while compiling CSS with Less.\n\nReference the console for more information…"
          rescue Errno::ECONNREFUSED
            puts "ERROR: Connection to Growl was refused. You must enable the options \"Listen for incoming notifications\" and \"Allow remote application registration\" in your Growl settings.\n\n"
          end
        end
        puts e
        @parser = nil
        exit unless $WATCHING
        false
      end

      # Watch ------------------------------------------------------------------

      def watch_with(tasks)

        $WATCHING = true

        watched_paths = [ "Application", "Library", "Resources", "Public" ]

        watched_files = Dir["Application/**/*.js"] \
                      + Dir["Library/**/*.js"] \
                      + Dir["Resources/Stylesheets/**/*.less"] \
                      + Dir["Resources/Templates/**/*.html"] \
                      + Dir["Resources/Images/**/*"] \
                      + Dir["Public/**/*"] \
                      + [ "Vendor/Aphid/Build/.buildstamp" ]

        begin
          require "filewatcher"
        rescue LoadError
          puts "\nYou'll need FileWatcher to watch for changes. Simply run:\n\n"
          puts "  $ gem install filewatcher"
          puts "\nand you should be all set!\n\n"
          exit
        end

        if RUBY_PLATFORM.downcase.include? "darwin"
          begin
            require "rb-fsevent"
          rescue LoadError
            puts "\nYou'll need rb-fsevent to watch for changes. Simply run:\n\n"
            puts "  $ gem install rb-fsevent"
            puts "\nand you should be all set!\n\n"
            exit
          end

          begin
            require "ruby-growl"
            $GROWL = Growl.new("localhost", PROJECT_NAME, ["Build Succeeded", "Build Failed"])
          rescue LoadError
            header "Growl Support Notice"
            puts "To enable Growl notifications during automated builds, you will need to install ruby-growl by running:\n\n"
            puts "  $ gem install ruby-growl"
            puts "\nOnce installed, you must also enable the options \"Listen for incoming notifications\" and \"Allow remote application registration\" in your Growl settings.\n\n"
          end

          header "Waiting for Change(s)"

          # Watch for Aphid Rebuilds
          if File.exist? "Vendor/Aphid"
            FileWatcher.new([ "Vendor/Aphid/Build/.buildstamp" ]).watch do |filename|
              puts "Aphid was changed. Rebuilding project...\n"
              tasks.each { |task| Rake::Task[task].reenable }
              tasks.each do |task|
                if $FAILED
                  puts
                  header "Build Failed!"
                  break
                end
                Rake::Task[task].invoke
              end
              if $GROWL and $WATCHING and not $FAILED
                begin
                  $GROWL.notify "Build Succeeded", "#{PROJECT_NAME} Build Succeeded",
                    "Automated build of #{PROJECT_NAME} has completed successfully."
                rescue Errno::ECONNREFUSED
                  puts "ERROR: Connection to Growl was refused. You must enable the options \"Listen for incoming notifications\" and \"Allow remote application registration\" in your Growl settings.\n\n"
                end
              end
              $FAILED = false
              header "Waiting for Change(s)"
            end
          end

          # Watch for Project Changes
          options = { :latency => 5, :no_defer => false }
          fsevent = FSEvent.new
          fsevent.watch watched_paths, options do |directories|
            fsevent.stop
            tasks.each { |task| Rake::Task[task].reenable }
            tasks.each do |task|
              if $FAILED
                puts
                header "Build Failed!"
                break
              end
              Rake::Task[task].invoke
            end
            if $GROWL and $WATCHING and not $FAILED
              begin
                $GROWL.notify "Build Succeeded", "#{PROJECT_NAME} Build Succeeded",
                  "Automated build of #{PROJECT_NAME} has completed successfully."
              rescue Errno::ECONNREFUSED
                puts "ERROR: Connection to Growl was refused. You must enable the options \"Listen for incoming notifications\" and \"Allow remote application registration\" in your Growl settings.\n\n"
              end
            end
            $FAILED = false
            header "Waiting for Change(s)"
            fsevent.run
          end
          fsevent.run
        else
          FileWatcher.new(watched_files).watch do |filename|
            puts filename + " was changed. Rebuilding project...\n"
            tasks.each { |task| Rake::Task[task].reenable }
            tasks.each do |task|
              if $FAILED
                puts
                header "Build Failed!"
                break
              end
              Rake::Task[task].invoke
            end
            $FAILED = false
            header "Waiting for Change(s)"
          end
        end

      end

      # ------------------------------------------------------------------------

      def copy_aphid_to_build_folder
        mkdir "#{ROOT_PATH}/Build/Vendor" unless File.exist? "#{ROOT_PATH}/Build/Vendor"
        mkdir "#{ROOT_PATH}/Build/Vendor/Aphid" unless File.exist? "#{ROOT_PATH}/Build/Vendor/Aphid"
        Dir.clone! "#{Aphid.path}/Build", "Build/Vendor/Aphid", [ "\.git" ]
      end

      # ------------------------------------------------------------------------

      def add_asset_timestamps(filename)
        File.open filename, "r+" do |template|
          puts "Adding asset timestamps to #{filename} ..."
          markup = template.read
          markup.scan(/((link.*href=|script.*src=|img.*src=|url\()"?'?([^"')]+))/).each do |match|
            asset = match[2]
            path = asset =~ /^\.\.\// ? "#{ROOT_PATH}/#{File.dirname(filename)}/#{asset}" : "#{ROOT_PATH}/Build/#{asset}"
            next if asset =~ /^http/
            next if asset =~ /\?[0-9]+$/
            begin
              File.open(path, "r") do |file|
                timestamp = file.mtime.to_i
                markup.sub! asset, "#{asset}?#{timestamp}"
              end
            rescue Errno::ENOENT
              puts "ERROR: Unable to add asset timestamp for missing file '#{path}' (referenced in #{filename})"
              next
            end
          end
          template.rewind and template.write markup
        end
      end

      def optimize(filename)
        output_filename = filename.gsub(/\.([a-z]+)$/, '.Optimized.\1')
        puts "Optimizing #{filename} as #{output_filename} ..."
        `java -jar "#{Aphid.path}/Vendor/YUI Compressor/yuicompressor-2.4.6.jar" --line-break 80 -o "#{output_filename}" "#{filename}"`
      end

      # ------------------------------------------------------------------------

      def header(message, &block)
        message = " #{message} "
        puts "\n#{message.center(`stty size`.split(' ')[1].to_i, '-')}\n\n"
        if block_given?
          yield
          puts
        end
      end

      def current_head
        `git show-ref --head --hash HEAD`.chop
      end

      def dirty?
        `git diff --shortstat`.chop.length > 0
      end

      def read_environment_variable(name, default = nil)
        name  = name.to_s
        value = if ENV.include? name.upcase
          ENV[name.upcase]
        elsif ENV.include? name.downcase
          ENV[name.downcase]
        else
          default
        end
        if value =~ /,/
          value.split(/,/)
        else
          value
        end
      end

    end
  end
end

include Aphid::Rake::Support
