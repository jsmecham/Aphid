/**
 * class Aphid.UI.ListViewItem < Aphid.UI.View
 *
 * List view items belonging to instances of [[Aphid.UI.ListView]] are
 * required to be instances of this class, [[Aphid.UI.ListViewItem]].
 *
 * # Callback Methods
 *
 *  * `didSelectItem()` - Called when the item has been selected.
 *
 *  * `didDeselectItem()` - Called when the item has been deselected.
 *
**/

Aphid.UI.ListViewItem = Aphid.Class.create("Aphid.UI.ListViewItem", Aphid.UI.View, {

  tagName: "li",

  /**
   * Aphid.UI.ListViewItem#isSelected -> Boolean
   *
   * Denotes the selected state of the list view item.
  **/
  isSelected: false,

  /**
   * Aphid.UI.ListViewItem#listView -> Aphid.UI.ListView
   *
   * The [[Aphid.UI.ListView]] instance that this item belongs to.
  **/
  listView: false,

  /**
   * Aphid.UI.ListViewItem#sortIndex -> Number | false
   *
   * When sorting is enabled on the list view that the item belongs to, this
   * property will be set to the index of this item in the sorted list. If
   * sorting is not enabled, the value of this property will be false.
  **/
  sortIndex: false,

  // Initialization ----------------------------------------------------------

  /**
   * new Aphid.UI.ListViewItem([options])
   *
   * - options (Hash): Initial property values to be set on the ListViewItem
   *   instance
   *
   * Initializes a new ListViewItem instance.
  **/
  initialize: function($super, options)
  {
    $super(options);
  },

  // -------------------------------------------------------------------------

  /**
   * Aphid.UI.ListViewItem#select() -> Aphid.UI.ListViewItem
   *
   * Selects the list view item by adding the `selected` CSS class to the
   * element and setting [[Aphid.UI.ListViewItem#isSelected]] to `true`. This
   * method returns the list view item instance.
  **/
  select: function()
  {
    this.get("element").addClassName("selected");
    this.set("isSelected", true);
    this._didSelectItem();
    return this;
  },

  /**
   * Aphid.UI.ListViewItem#deselect() -> Aphid.UI.ListViewItem
   *
   * Deselects the list view item by removing the `selected` CSS class from
   * the element and setting [[Aphid.UI.ListViewItem#isSelected]] to `false`.
   * This method returns the list view item instance.
  **/
  deselect: function()
  {
    this.get("element").removeClassName('selected');
    this.set("isSelected", false);
    this._didDeselectItem();
    return this;
  },

  // Event Handlers ----------------------------------------------------------

  handleMouseDownEvent: function(event)
  {
    var listView = this.get("listView");
    if (listView.get("multipleSelectionEnabled") && this.get("isSelected"))
      listView.deselectItem(this);
    else
      listView.selectItem(this);
  },

  handleDoubleClickEvent: function(event)
  {
    var listView = this.get("listView");
    listView.openItem(this);
  },

  // Callback Methods --------------------------------------------------------

  _didSelectItem: function()
  {
    if (this.didSelectItem) this.didSelectItem();
  },

  _didDeselectItem: function()
  {
    if (this.didDeselectItem) this.didDeselectItem();
  }

});
