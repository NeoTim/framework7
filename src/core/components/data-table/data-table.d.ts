import Dom7 from 'dom7';
import Framework7, { CSSSelector, Framework7EventsClass } from '../app/app-class';

namespace DataTable {
  interface DataTable extends Framework7EventsClass<Events>{
    /** Data table HTML element */
    el: HTMLElement
    /** Dom7 instance with Data table HTML element */
    $el: Dom7
  }

  interface Parameters {
    /** Data Table element. Can be useful if you already have Data Table element in your HTML and want to create new instance using this element */
    el: HTMLElement
  }

  interface Events {
    /** Event will be triggered data table sort changed. As an argument event handler receives data table instance and new sort order (asc or desc) */
    sort : (dataTable : DataTable, sort : string) => void
    /** Event will be triggered right before Data Table instance will be destroyed. As an argument event handler receives Data table instance */
    beforeDestroy : (dataTable : DataTable) => void
  }
}

declare module '../app/app-class' {
  interface Framework7Class {
    dataTable: {
      /** create DataTable instance */
      create(parameters : DataTable.Parameters ) : DataTable.DataTable;
      /** destroy DataTable instance */
      destroy(el : HTMLElement | CSSSelector | DataTable.DataTable) : void;
      /** get DataTable instance by HTML element */
      get(el : HTMLElement | CSSSelector) : DataTable.DataTable;
    }
  }
  interface Framework7Params {
  }
  interface Framework7AppEvents {
    /** Event will be triggered data table sort changed. As an argument event handler receives data table instance and new sort order (asc or desc) */
    dataTableSort : (dataTable : DataTable, sort : string) => void
    /** Event will be triggered right before Data Table instance will be destroyed. As an argument event handler receives Data table instance */
    dataTableBeforeDestroy : (dataTable : DataTable) => void
  }
}

export default DataTable;