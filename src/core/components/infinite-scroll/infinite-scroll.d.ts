import Dom7 from 'dom7';
import Framework7, { CSSSelector, Framework7EventsClass } from '../app/app-class';

namespace InfiniteScroll {
  interface DomEvents {
    /** Event will be triggered when page scroll reaches specified (in data-distance attribute) distance to the bottom. */
    'infinite': () => void
  }
}

declare module '../app/app-class' {
  interface Framework7Class {
    infiniteScroll: {
      /** Add infinite scroll event listener to the specified HTML element */
      create(el : HTMLElement | CSSSelector) : void;
      /** Remove infinite scroll event listener from the specified HTML container */
      destroy(el : HTMLElement | CSSSelector) : void;
    }
  }
  interface Framework7Params {
  }
  interface Framework7AppEvents {
    infinite: (el : HTMLElement, event : Event) => void
  }
}

export default InfiniteScroll;