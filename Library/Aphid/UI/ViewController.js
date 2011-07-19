/**
 * class Aphid.UI.ViewController < Aphid.UI.View
 *
 * You should use view controllers for major views that are responsible for
 * many subviews (including view controller subviews). Situations where a
 * view controller may be desirable over a view would be the main interfaces
 * of a web application.
 *
 * View controllers are typically long-lived and include additional callbacks
 * and delegates that notify the class of view state changes, such as
 * notifying that the view will be displayed or hidden, etc.
 *
 * # Notifications
 *
 *  - **`ModalViewControllerPresentedNotification`** — Posted when a view
 *    controller is presented as modal.
 *
 *  - **`ModalViewControllerDismissedNotification`** — Posted when a view
 *    controller has been dismissed from a modal state.
 *
**/
Aphid.UI.ViewController = Aphid.Class.create("Aphid.UI.ViewController", Aphid.UI.View,
{

  /**
   * Aphid.UI.ViewController#modalView -> Aphid.UI.ModalView | false
   *
   * A reference to the [[Aphid.UI.ModalView]] instance that the view
   * controller is presently contained within (or false if the view controller
   * is not currently presented in a modal fashion).
   *
   * This property will be set when the view controller instance is presented
   * as a modal view controller from another view controller. You may use this
   * to access the modal view instance that the view controller is contained
   * within in order to dismiss the modal view or perform other actions as
   * documented in [[Aphid.UI.ModalView]].
  **/
  modalView: false,

  /**
   * Aphid.UI.ViewController#navigationController -> Aphid.UI.NavigationController | false
   *
   * The navigation controller instance, if applicable, that this view
   * controller instance is a member of.
  **/
  navigationController: false,

  /**
   * Aphid.UI.ViewController#parentViewController -> Aphid.UI.ViewController | false
   *
   * The view controller instance that this view controller belongs to and is
   * being managed by. This will be false if the view controller is not being
   * managed by another view controller.
  **/
  parentViewController: false,

  /**
   * Aphid.UI.ViewController#presentedModalView -> Aphid.UI.ModalView | false
   *
   * The [[Aphid.UI.ModalView]] instance that is currently presented from this
   * view controller instance, or false if no view controller is currently
   * modal.
  **/
  presentedModalView: false,

  /**
   * Aphid.UI.ViewController#presentedViewController -> Aphid.UI.ViewController | false
   *
   * The [[Aphid.UI.ViewController]] instance that is currently presented as
   * the modal view controller, or false if no view controller is currently
   * modal.
  **/
  presentedViewController: false,

  // Modal View Controllers --------------------------------------------------

  /**
   * Aphid.UI.ViewController#presentModalViewController(viewController) -> null
   *
   *  - viewController ([[Aphid.UI.ViewController]]): The view controller that
   *    should be presented
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller.
  **/
  presentModalViewController: function(viewController)
  {
    this.presentModalViewControllerAnimated(viewController, false);
  },

  /**
   * Aphid.UI.ViewController#presentModalViewControllerAnimated(viewController[, animated = true]) -> null
   *
   *  - viewController ([[Aphid.UI.ViewController]]): The view controller that
   *    should be presented.
   *
   *  - animated (Boolean): true if the view controller should be presented
   *    with animation.
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller with an animated effect, by default.
  **/
  presentModalViewControllerAnimated: function(viewController, animated)
  {
    if (Object.isUndefined(animated)) animated = true;

    // If the view is loading, we need to wait for it to finish loading before
    // we can present it.
    if (viewController.isLoading)
      this._presentModalViewController.bind(this).delay(0.1, viewController, animated);

    // Otherwise, we can present it immediately.
    else
      this._presentModalViewController(viewController, animated);
  },

  /*
   * Aphid.UI.View#_presentModalViewController(viewController[, animated = false]) -> null
   *
   *  - viewController ([[Aphid.UI.ViewController]]): The view controller that
   *    should be presented.
   *
   *  - animated (Boolean): true if the view controller should be presented
   *    with animation
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller, presenting it optionally with an animated effect.
   */
  _presentModalViewController: function(viewController, animated)
  {
    if (Object.isUndefined(animated)) animated = false;

    // If the view has still not been loaded, delay this call again...
    if (!viewController.get("isLoaded"))
    {
      // TODO We need to add a counter to this so that we don't wait longer
      // a few seconds before giving up and raising a warning...
      this._presentModalViewController.bind(this).delay(0.1, viewController, animated);
      return;
    }

    // Instantiate the Presented Modal View instance
    if (!this.get("presentedModalView"))
      this.set("presentedModalView", new Aphid.UI.ModalView({
        delegate: this,
        parentViewController: this
      }));

    $L.info('Adding "' + viewController.displayName + '" as a subview to "' + (this.displayName || "unknown") + '" (animated: ' + animated + ')', this);

    // Set the Modal View on the View Controller instance
    viewController.set("modalView", this.get("presentedModalView"));

    // Set the Parent View Controller to this instance
    viewController.set("parentViewController", this);

    // Set the View Controller aon the Presented Modal View
    this.set("presentedModalView.viewController", viewController);

    // Store the view controller that was presented in the modal view in the
    // `presentedViewController` instance property of the view controller that
    // is responsible for displaying it.
    this.set("presentedViewController", viewController);

    // Post a Notification
    this.postNotification("ModalViewControllerPresentedNotification", this.get("presentedViewController"));

    // Present the View Controller
    if (animated)
    {
      $AppDelegate.get("mainWindow").displayOverlayAnimated(animated);
      $AppDelegate.get("mainWindow").addSubviewAnimated(this.get("presentedModalView"));
    }
    else
    {
      $AppDelegate.get("mainWindow").displayOverlay();
      $AppDelegate.get("mainWindow").addSubview(this.get("presentedModalView"));
    }
  },

  /**
   * Aphid.UI.View#dismissModalViewController() -> null
   *
   * Dismisses the current modal view controller, if present.
  **/
  dismissModalViewController: function()
  {
    this.dismissModalViewControllerAnimated(false);
  },

  /**
   * Aphid.UI.View#dismissModalViewController([animated = true]) -> null
   *
   *  - animated (Boolean): true if the view controller should be dismissed
   *    with animation
   *
   * Dismisses the current modal view controller, if present, with animation
   * by default.
  **/
  dismissModalViewControllerAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    if (!this.get("presentedModalView") || !this.get("presentedViewController")) return;

    // Hide the Overlay
    $AppDelegate.get("mainWindow").dismissOverlayAnimated(animated);

    // Post a Notification
    this.postNotification("ModalViewControllerDismissedNotification", this.get("presentedViewController"));

    // Hide the Modal View Container
    if (animated)
    {
      this.get("presentedModalView").removeFromSuperviewAnimated();
      this.get("presentedViewController").removeFromSuperviewAnimated();
    }
    else
    {
      this.get("presentedModalView").removeFromSuperview();
      this.get("presentedViewController").removeFromSuperview();
    }

    // Reset the Modal State
    this.set("presentedModalView", false);
    this.set("presentedViewController.modalView", false);
    this.set("presentedViewController.parentViewController", false);
    this.set("presentedViewController", false);
  }

});
