/**
 * mixin Aphid.Support.Properties
 *
 * This mixin adds support for a common pattern of using accessors and
 * setters.
 *
 * Because Internet Explorer does not support custom properties on
 * any objects but DOM objects (and only then on Internet Explorer 8),
 * we must implement our own getter/setter methods in order to support
 * IE.
**/

Aphid.Support.Properties = {

  UndefinedPropertyError: {
    name: "UndefinedPropertyError",
    message: "The specified property does not exist"
  },

  /**
   * Aphid.Support.Properties#get(property) -> Object
   *
   * - property (String): name of the property that should be retrieved
    *
    * Gets the value of the specified +property+. This method will check for a
    * get_PropertyName_ method definition and will call it, if present.
   **/
  get: function(property)
  {
    if (!this.hasProperty)
      throw this.UndefinedPropertyError

    // Check for a Custom Accessor
    var customAccessor = "get" + property.upperCaseFirst();
    if (this[customAccessor])
      return this[customAccessor]();

    // Otherwise, return the property directly...
    return this["_" + property];
  },

  /**
   * Aphid.Support.Properties#set(property, value) -> Object
   *
   * - property (String): the name of the property whose value should be set
   * - value (Object): the object to set as the value of the property
   *
   * Sets the specified +property+ to the provided +value+, returning the
   * +value+ upon success. This method will check for a set_PropertyName_
   * method definition and will call it, if present.
  **/
  set: function(property, value)
  {
    if (!this.hasProperty)
      throw this.UndefinedPropertyError

    // Check for a Custom Setter
    var customSetterName = "set" + property.upperCaseFirst();
    if (this[customSetterName])
      return this[customSetterName](value)

    return this["_" + property] = value;
  },

  /**
   * Aphid.Support.Properties#hasProperty(property) -> Boolean
   *
   * Returns true or false depending on whether or not the object has the
   * specified +property+ defined.
  **/
  hasProperty: function(property)
  {
    return !Object.isUndefined(this["_" + property]);
  }

};
