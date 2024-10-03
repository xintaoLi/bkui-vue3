// prefix
export const PREFIX_CLS = 've-table-';

// locale comp name
export const LOCALE_COMP_NAME = 'table';

// column types
export const COLUMN_TYPES = {
  // expand row
  EXPAND: 'expand',
  // checkbox
  CHECKBOX: 'checkbox',
  // radio
  RADIO: 'radio',
};

// column fixed type
export const COLUMN_FIXED_TYPE = {
  LEFT: 'left',
  RIGHT: 'right',
};

// expand row trigger types
export const EXPAND_TRIGGER_TYPES = {
  // trigger by click icon
  ICON: 'icon',
  // trigger by click cell(td)
  CELL: 'cell',
  // trigger by click row
  ROW: 'row',
};

// cell selection direction
export const CELL_SELECTION_DIRECTION = {
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
  LEFT: 'left',
};

// autofilling direction
export const AUTOFILLING_DIRECTION = {
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
  LEFT: 'left',
};

// current cell selection types
export const CURRENT_CELL_SELECTION_TYPES = {
  SINGLE: 'single',
  RANGE: 'range',
};

// emit events
export const EMIT_EVENTS = {
  // body-cell-width-change
  BODY_CELL_WIDTH_CHANGE: 'body-cell-width-change',
  // header-row-height-change
  HEADER_ROW_HEIGHT_CHANGE: 'header-row-height-change',
  // footer-row-height-change
  FOOTER_ROW_HEIGHT_CHANGE: 'footer-row-height-change',
  // body-row-height-change
  BODY_ROW_HEIGHT_CHANGE: 'body-row-height-change',
  // body row click
  BODY_ROW_CLICK: 'body-row-click',
  // body cell click
  BODY_CELL_CLICK: 'body-cell-click',
  // body cell mouseover
  BODY_CELL_MOUSEOVER: 'body-cell-mouseover',
  // body cell mousedown
  BODY_CELL_MOUSEDOWN: 'body-cell-mousedown',
  // body cell mousemove
  BODY_CELL_MOUSEMOVE: 'body-cell-mousemove',
  // body cell mouseup
  BODY_CELL_MOUSEUP: 'body-cell-mouseup',
  // body cell double click
  BODY_CELL_DOUBLE_CLICK: 'body-cell-double-click',
  // body cell contextmenu
  BODY_CELL_CONTEXTMENU: 'body-cell-contextmenu',
  // expand row change
  EXPAND_ROW_CHANGE: 'expand-row-change',
  // checkbox selected row change
  CHECKBOX_SELECTED_ROW_CHANGE: 'checkbox-selected-row-change',
  // checkbox selected all change
  CHECKBOX_SELECTED_ALL_CHANGE: 'checkbox-selected-all-change',
  // checkbox selected all ino
  CHECKBOX_SELECTED_ALL_INFO: 'checkbox-selected-all-info',
  // radio selected row change
  RADIO_SELECTED_ROW_CHANGE: 'radio-selected-row-change',
  // sort change
  SORT_CHANGE: 'sort-change',
  // cell-selection-key-change
  CELL_SELECTION_KEY_CHANGE: 'cell-selection-key-change',
  // cell-selection-range-data-change
  CELL_SELECTION_RANGE_DATA_CHANGE: 'cell-selection-range-data-change',
  // header filter confirm
  HEADER_FILTER_CONFIRM: 'filter-confirm',
  // header filter reset
  HEADER_FILTER_RESET: 'filter-reset',
  // header cell click
  HEADER_CELL_CLICK: 'header-cell-click',
  // header cell contextmenu
  HEADER_CELL_CONTEXTMENU: 'header-cell-contextmenu',
  // header cell mousedown
  HEADER_CELL_MOUSEDOWN: 'header-cell-mousedown',
  // header cell mouseover
  HEADER_CELL_MOUSEOVER: 'header-cell-mouseover',
  // header cell mousemove
  HEADER_CELL_MOUSEMOVE: 'header-cell-mousemove',
  // header cell mouseleave
  HEADER_CELL_MOUSELEAVE: 'header-cell-mouseleave',
  // highlight row change
  HIGHLIGHT_ROW_CHANGE: 'highlight-row-change',

  // edit input clicked
  EDIT_INPUT_CLICK: 'edit-input-click',
  // edit input blur
  EDIT_INPUT_BLUR: 'edit-input-blur',
  // edit input value change
  EDIT_INPUT_VALUE_CHANGE: 'edit-input-value-change',
  // edit input copy
  EDIT_INPUT_COPY: 'edit-input-copy',
  // edit input paste
  EDIT_INPUT_PASTE: 'edit-input-paste',
  // edit input cut
  EDIT_INPUT_CUT: 'edit-input-cut',

  // selection corner mousedown
  SELECTION_CORNER_MOUSEDOWN: 'selection-corner-mousedown',
  // selection corner mouseup
  SELECTION_CORNER_MOUSEUP: 'selection-corner-mouseup',
  // autofilling direction change
  AUTOFILLING_DIRECTION_CHANGE: 'autofilling-direction-change',
};

// hooks name
export const HOOKS_NAME = {
  //table container scroll
  TABLE_CONTAINER_SCROLL: 'table-container-scroll',
  // table-container-mouseup
  TABLE_CONTAINER_MOUSEUP: 'table-container-mouseup',
  // table-container-mousemove
  //TABLE_CONTAINER_MOUSEMOVE: "table-container-mousemove",
  // table size change
  TABLE_SIZE_CHANGE: 'table-size-change',
  // table td width change
  TABLE_CELL_WIDTH_CHANGE: 'table-cell-width-change',
  /*
    clipboard cell value change
    可能导致单元格高度变化，需要重新修改区域选择的定位信息
    */
  CLIPBOARD_CELL_VALUE_CHANGE: 'clipboard-cell-value-change',
  // header cell mousedown
  //HEADER_CELL_MOUSEDOWN: "header-cell-mousedown",
  // header cell mousemove
  HEADER_CELL_MOUSEMOVE: 'header-cell-mousemove',
  // body cell mousemove
  BODY_CELL_MOUSEMOVE: 'body-cell-mousemove',
};

// comps name
export const COMPS_NAME = {
  VE_TABLE: 'Table',

  VE_TABLE_THADER: 'TableHeader',
  VE_TABLE_THADER_TR: 'TableHeaderTr',
  VE_TABLE_THADER_Th: 'TableHeaderTh',
  VE_TABLE_HEADER_CHECKBOX_CONTENT: 'TableHeaderCheckboxContent',
  VE_TABLE_HEADER_FILTER_CONTENT: 'TableHeaderFilterContent',
  VE_TABLE_HEADER_FILTER_CUSTOM_CONTENT: 'TableHeaderFilterCustomContent',

  VE_TABLE_BODY: 'TableBody',
  VE_TABLE_BODY_TR: 'TableBodyTr',
  VE_TABLE_BODY_TR_SCROLLING: 'TableBodyTrScrolling',
  VE_TABLE_BODY_CHECKBOX_CONTENT: 'TableBodyCheckboxContent',
  VE_TABLE_BODY_RADIO_CONTENT: 'TableBodyRadioContent',
  VE_TABLE_BODY_TD: 'TableBodyTd',

  VE_TABLE_COLGROUP: 'TableColgroup',
  VE_TABLE_FOOTER: 'TableFooter',

  VE_TABLE_EXPAND_TR: 'TableExpandTr',
  VE_TABLE_EXPAND_TR_ICON: 'TableExpandTrIcon',

  VE_TABLE_EDIT_INPUT: 'TableEditInput',

  VE_TABLE_SELECTION: 'TableSelection',

  VE_TABLE_COLUMN_RESISZER: 'TableColumnResizer',
};

// comps custom attrs
export const COMPS_CUSTOM_ATTRS = {
  // body row key
  BODY_ROW_KEY: 'row-key',
  // body column key
  BODY_COLUMN_KEY: 'col-key',
};

// instance methods
export const INSTANCE_METHODS = {
  // scroll to pixels
  SCROLL_TO: 'scrollTo',
  // scroll to rowKey
  SCROLL_TO_ROW_KEY: 'scrollToRowKey',
  // scroll to colKey
  SCROLL_TO_COL_KEY: 'scrollToColKey',
  // start editing cell
  START_EDITING_CELL: 'startEditingCell',
  // stop editing cell
  STOP_EDITING_CELL: 'stopEditingCell',
  // set highlight row
  SET_HIGHLIGHT_ROW: 'setHighlightRow',
  // set cell selection
  SET_CELL_SELECTION: 'setCellSelection',
  // set range cell selection
  SET_RANGE_CELL_SELECTION: 'setRangeCellSelection',
  // get range cell selection
  GET_RANGE_CELL_SELECTION: 'getRangeCellSelection',
  // set all cell selection
  SET_ALL_CELL_SELECTION: 'setAllCellSelection',
  // hide columns by keys
  HIDE_COLUMNS_BY_KEYS: 'hideColumnsByKeys',
  // show columns by keys
  SHOW_COLUMNS_BY_KEYS: 'showColumnsByKeys',
};

// contextmenu types
export const CONTEXTMENU_TYPES = {
  HEADER_CONTEXTMENU: 'headerContextmenu',
  BODY_CONTEXTMENU: 'bodyContextmenu',
};

// contextmenu node types
export const CONTEXTMENU_NODE_TYPES = {
  // separator
  SEPARATOR: 'SEPARATOR',
  // cut
  CUT: 'CUT',
  // copy
  COPY: 'COPY',
  // paste todo
  //PASTE: "PASTE",
  // insert row above
  INSERT_ROW_ABOVE: 'INSERT_ROW_ABOVE',
  // insert row below
  INSERT_ROW_BELOW: 'INSERT_ROW_BELOW',
  // remove row
  REMOVE_ROW: 'REMOVE_ROW',
  // empty row
  EMPTY_ROW: 'EMPTY_ROW',
  // remove column
  //REMOVE_COLUMN: "REMOVE_COLUMN",
  // empty column
  EMPTY_COLUMN: 'EMPTY_COLUMN',
  // hide column
  //HIDE_COLUMN: "HIDE_COLUMN",
  // empty cell
  EMPTY_CELL: 'EMPTY_CELL',
  // left fixed column to
  LEFT_FIXED_COLUMN_TO: 'LEFT_FIXED_COLUMN_TO',
  // cancel left fixed column to
  CANCEL_LEFT_FIXED_COLUMN_TO: 'CANCEL_LEFT_FIXED_COLUMN_TO',
  // right fixed column to
  RIGHT_FIXED_COLUMN_TO: 'RIGHT_FIXED_COLUMN_TO',
  // cancel right fixed column to
  CANCEL_RIGHT_FIXED_COLUMN_TO: 'CANCEL_RIGHT_FIXED_COLUMN_TO',
};
