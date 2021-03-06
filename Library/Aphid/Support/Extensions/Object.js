/**
 * mixin Aphid.Support.Extensions.Object
 *
 * Extensions to the core JavaScript Object implementation.
**/
Aphid.Support.Extensions.Object = {

  /**
   * Aphid.Support.Extensions.Object.isEvent() -> Boolean
   *
   * Returns true if the object is an Event (i.e. MouseEvent, KeyEvent, etc).
  **/
  isEvent: function(object)
  {
    return Object.isArray(object.toString().match('Event'));
  },

  /**
   * Aphid.Support.Extensions.Object.applyOptionsToInstance(instance, options) -> null
   *
   * - instance (Object): The instance that the options should be applied to
   * - options (Hash): Instance property values that should be applied
   *
   * Iterates the options and sets any matching property values on the
   * provided instance. Only pre-defined properties on the instance will be
   * set with matching values from the options hash.
  **/
  applyOptionsToInstance: function(instance, options)
  {
    options = $H(options);
    options.each(function(pair)
    {
      var property = pair.key,
          value    = pair.value;

      if (instance.has && instance.has(property))
        instance.set(property, value);
      else if (!Object.isUndefined(instance[property]))
        instance[property] = value;
      else return;

      $L.debug("Setting " + pair.key + " = " + pair.value, "Object#applyOptionsToInstance");
    });
  }

};

Object.extend(Object, Aphid.Support.Extensions.Object);
