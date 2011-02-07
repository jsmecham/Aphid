/**
 * class Aphid.Model.Base < Aphid.Support.Object
**/

Aphid.Model.Base = Aphid.Class.create("Aphid.Model.Base", Aphid.Support.Object, {

  /**
   * Aphid.Model.Base#adapter -> Aphid.Model.Adapter | false
  **/
  adapter: false,

  /**
   * Aphid.Model.Base#identifierProperty -> String | "id"
  **/
  identifierProperty: "id",

  /**
   * Aphid.Model.Base#siteUrl -> String | false
  **/
  siteUrl: window.location.protocol + "//" + window.location.host,

  /**
   * Aphid.Model.Base#collectionPath -> String | false
   *
   * The URL fragment template to be used when loading a collection of records
   * for the model. The string may include other properties to construct the
   * final path by enclosing the property name in #{} (i.e. #{propertyName}).
   *
   * #### Example
   *
   *     "/account/#{accountId}/contacts/#{id}.json?option=foo"
   *
  **/
  collectionPath: false,

  /**
   * Aphid.Model.Base#instancePath -> String | false
   *
   * The URL fragment template to be used when loading a collection of records
   * for the model. The string might my include other properties to construct
   * the final path by enclosing the property name in #{} (i.e.
   * #{propertyName}). Unless the instance is a singleton, with no ID required
   * to load it, you should include #{id} at the point where the ID should be
   * inserted.
   *
   * #### Example
   *
   *     "/contacts/#{id}.json?option=foo"
   *
  **/
  instancePath: false,

  /**
   * Aphid.Model.Base#hasMany -> Hash
  **/
  hasMany: {},

  /**
   * Aphid.Model.Base#belongsTo -> Hash
  **/
  belongsTo: {},

  /**
   * Aphid.Model.Base#isLoaded -> Boolean
   *
   * Denotes whether the model has been fully loaded and innitialized. Since
   * the loading of model data can happen asynchronously, this attribute may
   * be referenced and monitored to know when the model has finished loading.
  **/
  isLoaded: false,

  // -------------------------------------------------------------------------

  /**
   * new Aphid.Model.Base([options])
   *
   * - options (Hash): Initial property values to be set on the Model instance
  **/
  initialize: function(values)
  {
    if (values)
      this._initializeFromObject(values);
    else
      this._initializeEmptyObject();
  },

  /*
   * Aphid.Model.Base#_initializeFromObject(object) -> null
   *
   * Initializes the instance from a JavaScript object by applying any of the
   * attributes for this model that are found in the object to the instance.
   */
  _initializeFromObject: function(object)
  {
    $L.info("Initializing from Object...", this);

    var objectHash = $H(object),
        properties = objectHash.keys();

    properties.each(function(property) {
      var propertyName  = property.dasherize().camelize(),
          propertyValue = objectHash.get(property);

      $L.info("Initializing Property \"" + propertyName + "\" w/Value: " + propertyValue, this);

      // Cast Date Properties ...
      if (property.match(/(_at|_on)$/) && propertyValue)
        propertyValue = propertyValue.toDate();

      this[propertyName] = false; // TODO Allow Properties#set() to set properties that haven't been defined yet
      this["_" + propertyName] = this.set(propertyName, propertyValue);
    }, this);

    // this.properties.each(
    //   function(pair)
    //   {
    //     var property = pair.key,
    //         options  = pair.value,
    //         key      = options["key"] || property,
    //         value    = Object.isUndefined(key) ? "null" : this.object[key];
    // 
    //     $L.debug('Setting value of property "' + property + '" to "' + value + '"', this);
    // 
    //     if (value)
    //     {
    //       this[property] = value;
    //       this["_" + property] = Object.isUndefined(value.clone) ? value : value.clone();
    //     }
    //     else
    //     {
    //       this[property] = null;
    //       this["_" + property] = null;
    //     }
    //   }.bind(this)
    // );
    // if (this.identifierAttribute && !this.identifier && this[this.identifierAttribute])
    // {
    //   $L.debug('Setting identifier to ' + this[this.identifierAttribute] + '"', this);
    //   this.identifier = this[this.identifierAttribute];
    // }
    // this._instantiateProxies();
    this._afterInitialize();
  },

  /*
   * Aphid.Model#_initializeEmptyObject() -> null
   *
   * Initializes an empty instance with each attribute set to null.
   */
  _initializeEmptyObject: function()
  {
    $L.info("Initializing empty object...", this);
    // this.properties.keys().each(
    //   function(property)
    //   {
    //     this[property] = null;
    //     this["_" + property] = null;
    //   }.bind(this)
    // );

    // Initialize Empty Associations
    $H(this.get("hasMany")).keys().each(function(association) { this[association] = $A(); }, this);
    $H(this.get("belongsTo")).keys().each(function(association) { this[association] = false }, this);
  },

  // Associations ------------------------------------------------------------

  _initializeAssociations: function()
  {
    $H(this.get("hasMany")).keys().each(this._initializeHasManyAssociation, this);
    $H(this.get("belongsTo")).keys().each(this._initializeBelongsToAssociation, this);
  },

  _initializeHasManyAssociation: function(association)
  {
    $L.info("Initializing Association \"" + association + "\" Property ...", this);
    if (Object.isArray(this[association]))
    {
      this[association].each(function(object) {
        window.console.log("Associations ---")
        window.console.log(object)
        window.console.log("----------------")
      });
    }
  },

  _initializeBelongsToAssociation: function(association)
  {
    $L.info("Initializing Association \"" + association + "\" Property ...", this);

    var assn      = $H(this.get("belongsTo")).get(association),
        className = $H(assn).get("className"),
        klass     = eval(className);

    // If the associated model was included during initialization, simply
    // assign it without fetching it from the server.
    if (this[association])
    {
      $L.info("Assigning Included Object as Association", this);
      // TODO Check to see if the assigned object is an instance of the configured class before initializing
      this.set(association, new klass(this[association]));
    }

    else
    {
      // Setup up a proxy function to lazily load the association when accessed
      // TODO Formalize this into Aphid.Support.Properties.LazyProperty?
      this[association] = function() {
        if (!this["_" + association])
          this["_" + association] = this.adapter.loadAssociation(this, association);
        return this["_" + association];
      }.bind(this);
    }
  },

  /*

  var klass                = instance.constructor,
      url                  = this.site + instance[association + "BasePath"] + ".json",
      associations         = $H(instance.get("belongsTo")).merge($H(instance.get("hasMany"))),
      associationClassName = $H(associations.get(association)).get("className"),
      associationClass     = eval(associationClassName);

  if (instance[association + "BasePath"])
  {
    $L.info("Loading Association " + association + " on instance of " + instance.get("className"), this);
    // instance.set(association, this.load(associationClass, url));
    instance[association] = this.load(associationClass, url);
    return instance[association];
  }

  */

  // // Dirty State Tracking ----------------------------------------------------
  // 
  // /**
  //  * Aphid.Model#isDirty() -> Boolean
  //  *
  //  * Iterates the attributes of the model instance and checks for any changes
  //  * from the initialized state, returning true if any of the attribute values
  //  * have changed.
  //  *
  //  * This method also looks at all proxied objects that *do not* have an
  //  * identifier, that is to say, proxies that are instantiated from a parent
  //  * object that do not have their own identifier and cannot be loaded or
  //  * saved on their own.
  // **/
  // isDirty: function()
  // {
  //   var isDirty = false;
  //   var properties = this.properties.keys();
  // 
  //   properties.each(function(property)
  //   {
  //     if (this.proxies && $H(this.proxies).keys().include(property))
  //     {
  //       if (Object.isArray(this[property]))
  //       {
  //         if (!this[property].compare(this["_" + property]))
  //           isDirty = true;
  //         else
  //         {
  //           this[property].each(function(proxyProperty) {
  //             if (!proxyProperty.identifier && proxyProperty.isDirty())
  //               isDirty = true;
  //           }, this);
  //         }
  //       }
  //     }
  //     else if (Object.isArray(this[property]))
  //     {
  //       if (!this[property].compare(this["_" + property]))
  //         isDirty = true;
  //     }
  //     else if (this[property] != this["_" + property])
  //     {
  //       isDirty = true;
  //     }
  //   }, this);
  // 
  //   return isDirty;
  // },
  // -------------------------------------------------------------------------
  
  /**
   * Aphid.Model#serialize() -> Hash
   *
   * Returns a Hash containing the keys and values that make up the instance
   * attributes for the model. This Hash is suitable for initializing another
   * instance of the model or to convert to JSON for transport to a remote
   * web service.
  **/
  // serialize: function()
  // {
  //   var properties = {};
  // 
  //   this.properties.each(function(pair)
  //   {
  //     var property = pair.key,
  //         options  = pair.value,
  //         key      = options["key"] || property,
  //         value    = Object.isUndefined(key) ? "null" : this.object[key];
  // 
  //     // Undefined Properties
  //     if (Object.isUndefined(this[property]) || this[property] == null)
  //       properties[key] = "";
  // 
  //     // Arrays (Values, Model Relationships, etc)
  //     else if (Object.isArray(this[property]))
  //     {
  //       properties[key] = this[property].collect(
  //         function(tuple) {
  //           return Object.isUndefined(tuple.serialize) ? tuple : tuple.serialize()
  //         }
  //       );
  //     }
  // 
  //     // Model Relationships
  //     else if (this[property].serialize)
  //       properties[key] = this[property].serialize();
  // 
  //     // Simple Value
  //     else
  //       properties[key] = this[property];
  //   }, this);
  // 
  //   return properties;
  // },

  /**
   * Aphid.Model#reload() -> null
  **/
  // reload: function()
  // {
  //   $L.info("Reloading " + this.displayName + " with identifier " + this.identifier, this);
  // 
  //   // TODO Make the loading logic common between initialization and reloading
  // 
  //   // Assemble URL
  //   var urlTemplate = new Template(this.url);
  //   var url = urlTemplate.evaluate({ identifier: this.identifier });
  // 
  //   // Request Options
  //   var options = {
  //     method: 'get',
  //     asynchronous: false,
  //     contentType: 'application/json',
  //     onSuccess: function(transport)
  //     {
  //       this.object = transport.responseJSON;
  //       this._initializeFromObject();
  //       this._afterReload();
  //     }.bind(this),
  //     onFailure: function(transport)
  //     {
  //       var alertView = new Aphid.UI.AlertView();
  //       alertView.set("title", "Error Reloading Resource");
  //       alertView.set("message", "Failed to reload an instance of <strong>" + this.displayName + "</strong> using the identifier: <strong>" + this.identifier + "</strong>");
  //       alertView.set("status", "Error " + transport.status + " - " + transport.statusText);
  //       alertView.showAnimated();
  //     }.bind(this),
  //     onException: function(transport, exception) { throw exception }
  //   };
  // 
  //   // Make Request
  //   new Ajax.Request(url, options);
  // },

  // Callbacks ---------------------------------------------------------------

  _afterInitialize: function()
  {
    this._initializeAssociations();
    if (this.afterInitialize)
      this.afterInitialize(this);
  },

  _afterLoad: function()
  {
    if (this.afterLoad)
      this.afterLoad(this);
    if (this.delegate && this.delegate.modelDidFinishLoading)
      this.delegate.modelDidFinishLoading(this);
  },

  // _afterReload: function()
  // {
  //   if (this.afterReload)
  //     this.afterReload(this);
  //   if (this.delegate && this.delegate.modelDidFinishReloading)
  //     this.delegate.modelDidFinishReloading(this);
  // },

  // -------------------------------------------------------------------------

  // /**
  //  * Aphid.Model#toTemplateReplacements() -> Hash
  //  *
  //  * Returns a Hash suitable for use with Prototype's Template and string
  //  * interpolation functionality.
  // **/
  // toTemplateReplacements: function()
  // {
  //   var properties = {};
  //   this.properties.keys().each(
  //     function(property)
  //     {
  //       properties[property] = this.get(property);
  //     }.bind(this)
  //   );
  //   return properties;
  // }

  getInstancePath: function(data)
  {
    if (Object.isUndefined(data)) return this.instancePath;

    var template = new Template(this.get("instancePath")),
        path     = template.evaluate(data);

    return path;
  }

});

// Class Methods -------------------------------------------------------------

/**
 * mixin Aphid.Model.Base.ClassMethods
 *
 * These methods are automatically added to subclasses of Aphid.Model.Base.
**/
Aphid.Model.Base.ClassMethods = {

  // /**
  //  * Aphid.Model.Base.find(ids[, options]) -> Object | false
  //  *
  //  *  - ids (Number | Array):
  //  *  - options (Hash):
  //  *
  //  * This method proxies to the find method on the adapter defined by the
  //  * model instance.
  // **/
  // find: function(ids, options)
  // {
  //   if (Object.isUndefined(options)) options = $H();
  //   var adapter = this.prototype.adapter;
  // 
  //   if (!Object.isFunction(adapter.find))
  //   {
  //     $L.error("Adapter defined on " + this.prototype.displayName + " does not implement find support!", this);
  //     return false;
  //   }
  // 
  //   return adapter.find(this, ids, options);
  // },
  // 
  // /**
  //  * Aphid.Model.Base.all([options]) -> Array | false
  //  *
  //  *  - options (Hash):
  //  *
  //  * This method proxies to the find method on the adapter defined by the
  //  * model instance.
  // **/
  // all: function(options)
  // {
  //   if (Object.isUndefined(options)) options = $H();
  //   var adapter = this.prototype.adapter;
  // 
  //   if (!Object.isFunction(adapter.find))
  //   {
  //     $L.error("Adapter defined on " + this.prototype.displayName + " does not implement find support!", this);
  //     return false;
  //   }
  // 
  //   return adapter.loadCollection(this, options);
  // },

  /**
   * Aphid.Model.Base.load(identifier | url[, options]) -> Object | false
   *
   *  - identifier (String | Number): (Optional) If specified, the model will
   *    be loaded by the specified identifier.
   *
   *  - url (String): (Optional) If specified (in place of an identifier), the
   *    specified URL will be requested (either absolute or relative to the
   *    siteUrl defined on the model).
   *
   *  - options (Hash): Options to be passed to the URL.
   *
   * Models may be loaded by either specifying the identifier for the record
   * to be loaded or by URL. The first parameter passed to load should be one
   * or the other.
   *
  **/
  load: function()
  {
    var identifier = false,
        url        = false,
        options    = false,
        modelKlass = this;

    // Parse Arguments
    if (Object.isString(arguments[0]) || Object.isNumber(arguments[0]))
    {
      if (arguments[0].toString().match(/^http/)) url = arguments[0];
      else identifier = arguments[0];
      options = $H(arguments[1]);
    }
    else options = $H(arguments[0]);

    // Load by ID
    if (identifier)
      options.set("identifier", identifier);

    // Set URL
    if (!url)
      url = modelKlass.prototype.get("siteUrl").concat(modelKlass.prototype.get("instancePath"));

    // Check for Required URL Template Properties
    var requiredProperties = url.match(/#\{[a-zA-Z]+\}/g)
    if (requiredProperties)
    {
      var missingProperties = requiredProperties.collect(function(requiredProperty) {
        property = requiredProperty.gsub(/[^a-zA-Z]/, "");
        if (!options.get(property)) return property;
      }).compact();
      if (missingProperties.length > 0)
      {
        $L.error("Cannot assemble URL (\"" + url + "\") with missing " + "property".pluralize(missingProperties.length, "properties") + ": " + missingProperties.join(", "), this.className);
        return;
      }
    }

    // Replace Template Variables in URL
    var template = new Template(url);
    url = template.evaluate(options);

    $L.info("Loading record at URL: " + url + " ...", this.className);

    var instance = new modelKlass();

    // Request Options
    var requestOptions ={
      method: 'get',
      asynchronous: false,
      contentType: 'application/json',
      onSuccess: this.handleLoadResponse.bind(instance),
//      onFailure: this.handleFailureResponse.bind(instance),
      onException: function(transport, exception) { throw exception }
    };

    // Make Request
    new Ajax.Request(url, requestOptions);

    return instance;
  },

  // TODO Move this to a method in the prototype
  handleLoadResponse: function(transport)
  {
    var object = transport.responseJSON;
    this._initializeFromObject(object);
    this.isLoaded = true;
    this._afterLoad();
  },

  /**
   * Aphid.Model.Base.loadCollection([url[, options]]) -> Object | false
   *
   *  - url (String): (Optional) If specified (in place of an identifier), the
   *    specified URL will be requested (either absolute or relative to the
   *    siteUrl defined on the model).
   *
   *  - options (Hash): Options to be passed to the URL.
   *
   * Models may be loaded by either specifying the identifier for the record
   * to be loaded or by URL. The first parameter passed to load should be one
   * or the other.
   *
  **/
  loadCollection: function(url, options)
  {
    
  }
  
}

// "Inherited" Class Callback ------------------------------------------------

Aphid.Model.Base.inherited = function(subclass)
{
  $L.debug("Inherited by " + subclass.className, "Aphid.Model.Base");

  // Add the Model Class Methods (find, all, etc) to the Subclass
  Object.extend(subclass, Aphid.Model.Base.ClassMethods);

  // Assign the adapter to the Subclass as a class property
  subclass.adapter = subclass.prototype.adapter;
}
