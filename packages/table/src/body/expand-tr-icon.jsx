import { clsName } from '../util';
import { COMPS_NAME, COLUMN_TYPES } from '../util/constant';
import { ICON_NAMES } from '../utils/constant';
import TableIcon from '../table-icon';

export default {
  name: COMPS_NAME.VE_TABLE_EXPAND_TR_ICON,
  props: {
    column: {
      type: Object,
      required: true,
    },
    // expand row option
    expandOption: {
      type: Object,
      default: function () {
        return null;
      },
    },
    rowData: {
      type: Object,
      required: true,
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
    // row expand click event
    cellClick: {
      type: Function,
      default: null,
    },
  },
  computed: {
    // is row expanded
    isExpanded() {
      let result = false;

      const { column, rowData, expandedRowkeys, rowKeyFieldName } = this;

      if (column.type === COLUMN_TYPES.EXPAND) {
        const rowKey = rowData[rowKeyFieldName];
        result = expandedRowkeys.includes(rowKey);
      }

      return result;
    },
    // expand row icon class
    expandRowIconContainerClass() {
      return {
        [clsName('row-expand-icon')]: true,
        [clsName('expand-icon-collapsed')]: this.isExpanded,
      };
    },
    expandIconName() {
      return this.isExpanded ? ICON_NAMES.BOTTOM_ARROW : ICON_NAMES.RIGHT_ARROW;
    },
  },
  render() {
    let content = null;

    const { cellClick, column, expandRowIconContainerClass } = this;

    if (column.type === COLUMN_TYPES.EXPAND) {
      content = (
        <span
          onClick={e => cellClick(e)}
          class={expandRowIconContainerClass}
        >
          <TableIcon name={this.expandIconName}></TableIcon>
        </span>
      );
    }
    return content;
  },
};
