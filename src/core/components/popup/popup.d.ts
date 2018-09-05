import Dom7 from 'dom7';
import Framework7, { CSSSelector, Framework7EventsClass } from '../app/app-class';

namespace Popup {
  interface Events {
    /** Event will be triggered when Popup starts its opening animation. As an argument event handler receives popup instance */
    open: (popup : Popup) => void
    /** Event will be triggered when Popup completes its opening animation. As an argument event handler receives popup instance */
    opened: (popup : Popup) => void
    /** Event will be triggered when Popup starts its closing animation. As an argument event handler receives popup instance */
    close: (popup : Popup) => void
    /** Event will be triggered after Popup completes its closing animation. As an argument event handler receives popup instance */
    closed: (popup : Popup) => void
    /** Event will be triggered right before Popup instance will be destroyed */
    beforeDestroy: (popup : Popup) => void
  }
  interface Parameters {
    /** Popup element. Can be useful if you already have Popup element in your HTML and want to create new instance using this element. */
    el: HTMLElement | CSSSelector
    /** Full Popup HTML layout string. Can be useful if you want to create Popup element dynamically. */
    content: string
    /** Enables Popup backdrop (dark semi transparent layer behind). (default true) */
    backdrop?: boolean
    /** When enabled, popup will be closed on backdrop click. (default true) */
    closeByBackdropClick?: boolean
    /** Whether the Popup should be opened/closed with animation or not. Can be overwritten in .open() and .close() methods. (default true) */
    animate?: boolean

    /** Object with events handlers.. */
    on: {
      [event in keyof Events] : Function
    }
  }
  interface Popup extends Framework7EventsClass<Events> {
    /** Link to global app instance */
    app : Framework7
    /** Popup HTML element */
    el : HTMLElement
    /** Dom7 instance with popup HTML element */
    $el : Dom7
    /** Backdrop HTML element */
    backdropEl : HTMLElement
    /** Dom7 instance with backdrop HTML element */
    $backdropEl: Dom7
    /** Popup parameters */
    params : Parameters
    /** Boolean prop indicating whether popup is opened or not */
    opened : boolean

    /** Open popup. */
    open(animate: boolean) : void
    /** Close popup. */
    close(animate: boolean) : void
    /** Destroy popup */
    destroy() : void
  }
  interface DomEvents {
    /** Event will be triggered when Popup starts its opening animation */
    'popup:open' : () => void
    /** Event will be triggered after Popup completes its opening animation */
    'popup:opened' : () => void
    /** Event will be triggered when Popup starts its closing animation */
    'popup:close' : () => void
    /** Event will be triggered after Popup completes its closing animation */
    'popup:closed' : () => void
  }
}

declare module '../app/app-class' {
  interface Framework7Class {
    popup: {
      /** create Popup instance */
      create(parameters : Popup.Parameters) : Popup.Popup
      /** destroy Popup instance */
      destroy(el : HTMLElement | CSSSelector | Popup.Popup) : void
      /** get Popup instance by HTML element */
      get(el : HTMLElement | CSSSelector) : Popup.Popup
      /** open Popup */
      open(el : HTMLElement | CSSSelector) : Popup.Popup
      /** closes Popup */
      close(el : HTMLElement | CSSSelector) : Popup.Popup
    }
  }
  interface Framework7Params {
    popup: Popup.Parameters
  }
  interface Framework7AppEvents {
    /** Event will be triggered when Popup starts its opening animation. As an argument event handler receives popup instance */
    popupOpen: (popup : Popup.Popup) => void
    /** Event will be triggered when Popup completes its opening animation. As an argument event handler receives popup instance */
    popupOpened: (popup : Popup.Popup) => void
    /** Event will be triggered when Popup starts its closing animation. As an argument event handler receives popup instance */
    popupClose: (popup : Popup.Popup) => void
    /** Event will be triggered after Popup completes its closing animation. As an argument event handler receives popup instance */
    popupClosed: (popup : Popup.Popup) => void
    /** Event will be triggered right before Popup instance will be destroyed */
    popupBeforeDestroy: (popup : Popup.Popup) => void
  }
}

export default Popup;