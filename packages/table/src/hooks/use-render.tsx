/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { v4 as uuidv4 } from 'uuid';
import { computed, CSSProperties, SetupContext, unref } from 'vue';

import Checkbox from '@bkui-vue/checkbox';
import { useLocale } from '@bkui-vue/config-provider';
import { DownShape, GragFill, RightShape } from '@bkui-vue/icon';
import Pagination from '@bkui-vue/pagination';

import BodyEmpty from '../components/body-empty';
import TableCell from '../components/table-cell';
import TableRow from '../components/table-row';
import { COLUMN_ATTRIBUTE, TABLE_ROW_ATTRIBUTE } from '../const';
import { EMIT_EVENTS } from '../events';
import { Column, TablePropTypes } from '../props';
import {
  formatPropAsArray,
  getRowText,
  isRowSelectEnable,
  resolveCellSpan,
  resolveColumnSpan,
  resolveHeadConfig,
  resolveNumberOrStringToPix,
  resolvePropVal,
  resolveWidth,
} from '../utils';

import { UseColumns } from './use-columns';
import useHead from './use-head';
import { UsePagination } from './use-pagination';
import { UseRows } from './use-rows';
import { UseSettings } from './use-settings';
import useShiftKey from './use-shift-key';
type RenderType = {
  props: TablePropTypes;
  ctx: SetupContext;
  columns: UseColumns;
  rows: UseRows;
  pagination: UsePagination;
  settings: UseSettings;
};
export default ({ props, ctx, columns, rows, pagination, settings }: RenderType) => {
  const t = useLocale('table');

  const uuid = uuidv4();

  let dragEvents = {};

  /**
   * 渲染table colgroup
   * @returns
   */
  const renderColgroup = () => {
    return (
      <colgroup>
        {(columns.visibleColumns || []).map((column: Column, _index: number) => {
          const width: string | number = `${resolveWidth(columns.getColumnOrderWidth(column))}`.replace(/px$/i, '');

          const minWidth = columns.getColumnAttribute(column, COLUMN_ATTRIBUTE.COL_MIN_WIDTH);
          return (
            <col
              width={width}
              style={{ minWidth: resolveNumberOrStringToPix(minWidth as string, 'auto') }}
            ></col>
          );
        })}
      </colgroup>
    );
  };

  /**
   * 渲染Table Header
   * @returns
   */
  const renderHeader = () => {
    const config = resolveHeadConfig(props);
    const rowStyle: CSSProperties = {
      // @ts-ignore:next-line
      '--row-height': `${resolvePropVal(config, 'height', ['thead'])}px`,
      backgroundColor: props.thead.color,
    };

    return (
      <>
        <thead style={rowStyle}>
          <TableRow>
            <tr>
              {columns.visibleColumns.map((column, index: number) => {
                const { getTH } = useHead({ props, ctx, columns, column, index, rows });
                return getTH();
              })}
            </tr>
          </TableRow>
        </thead>
      </>
    );
  };

  const renderColumns = () => {
    if (!props.showHead) {
      return null;
    }
    return (
      <table
        cellpadding={0}
        cellspacing={0}
      >
        {renderColgroup()}
        {renderHeader()}
      </table>
    );
  };

  /** **************************************** Rows Render ******************************* **/

  /**
   * 渲染Table Body
   * @returns
   */
  const renderRows = (dataList: any[]) => {
    let preRow = {};
    const rowSpanMap = new WeakMap();
    const needRowSpan = columns.needRowSpan.value;

    return (
      <tbody>
        {dataList.map((row: any, rowIndex: number) => {
          const result = getRowRender(row, rowIndex, preRow, dataList, rowSpanMap, needRowSpan);
          preRow = row;
          return result;
        })}
      </tbody>
    );
  };

  const getRowHeight = (row?: any, rowIndex?: number) => {
    const { size, height } = settings.options;
    if (height !== null && height !== undefined) {
      return resolvePropVal(settings.options, 'height', ['tbody', row, rowIndex, size]);
    }

    return resolvePropVal(props, 'rowHeight', ['tbody', row, rowIndex]);
  };

  const setDragEvents = (events: Record<string, Function>) => {
    dragEvents = events;
  };

  /**
   * 渲染Table主体
   * @param rows 表格数据
   * @returns
   */
  const renderTBody = (list?) => {
    const dataList = list ?? rows.pageRowList;
    const localEmptyText = computed(() => {
      if (props.emptyText === undefined) {
        return t.value.emptyText;
      }
      return props.emptyText;
    });

    if (!dataList.length) {
      return (
        ctx.slots.empty?.() ?? (
          <BodyEmpty
            filterList={dataList}
            list={props.data}
          />
        )
      );
    }

    return (
      <table
        cellpadding={0}
        cellspacing={0}
        data-table-uuid={uuid}
      >
        {renderColgroup()}
        {renderRows(dataList)}
      </table>
    );
  };

  /**
   * table row click handle
   * @param e
   * @param row
   * @param index
   * @param rows
   */
  const handleRowClick = (e: MouseEvent, row: any, index: number, rows: any) => {
    ctx.emit(EMIT_EVENTS.ROW_CLICK, e, row, index, rows);
  };

  /**
   * table row click handle
   * @param e
   * @param row
   * @param index
   * @param rows
   */
  const handleRowDblClick = (e: MouseEvent, row: any, index: number, rows: any) => {
    ctx.emit(EMIT_EVENTS.ROW_DBL_CLICK, e, row, index, rows);
  };

  const handleRowEnter = (e: MouseEvent, row: any, index: number, rows: any) => {
    ctx.emit(EMIT_EVENTS.ROW_MOUSE_ENTER, e, row, index, rows);
  };

  const handleRowLeave = (e: MouseEvent, row: any, index: number, rows: any) => {
    ctx.emit(EMIT_EVENTS.ROW_MOUSE_LEAVE, e, row, index, rows);
  };

  const renderCellCallbackFn = (row: any, column: Column, index: number, rows: any[]) => {
    const cell = getRowText(row, resolvePropVal(column, 'field', [column, row]));
    const data = row;
    return (column.render as Function)({ cell, data, row, column, index, rows });
  };

  const getExpandCell = (row: any) => {
    const isExpand = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_EXPAND);
    const icon = isExpand ? <DownShape></DownShape> : <RightShape></RightShape>;

    return <span>{[icon, ctx.slots.expandContent?.(row) ?? '']}</span>;
  };

  const handleRowExpandClick = (row: any, column: Column, index: number, rowList: any[], e: MouseEvent) => {
    rows.setRowExpand(row, !rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_EXPAND));
    ctx.emit(EMIT_EVENTS.ROW_EXPAND_CLICK, { row, column, index, rows: rowList, e });
  };

  const renderExpandColumn = (row: any, column: Column, index: number, rows: any[]) => {
    const renderExpandSlot = () => {
      if (typeof column.render === 'function') {
        return renderCellCallbackFn(row, column, index, rows);
      }

      return ctx.slots.expandCell?.({ row, column, index, rows }) ?? getExpandCell(row);
    };

    return (
      <span
        class='expand-btn-action'
        onClick={(e: MouseEvent) => handleRowExpandClick(row, column, index, rows, e)}
      >
        {renderExpandSlot()}
      </span>
    );
  };

  const renderDraggableCell = (row, column, index, rows) => {
    const renderFn = props.rowDraggable?.render ?? props.rowDraggable;
    if (typeof renderFn === 'function') {
      return renderFn(row, column, index, rows);
    }

    const fontSize = props.rowDraggable?.fontSize ?? '14px';
    const fontIcon = props.rowDraggable?.icon ?? (
      <GragFill
        class='drag-cell'
        style={`'--font-size: ${fontSize};'`}
      ></GragFill>
    );

    return fontIcon;
  };

  const { isShiftKeyDown, getStore, setStore, setStoreStart, clearStoreStart } = useShiftKey(props);
  const renderCheckboxColumn = (row: any, index: number | null, column: Column) => {
    const handleChecked = (value: boolean, event: Event) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      event.stopPropagation();

      if (!isShiftKeyDown.value) {
        if (value) {
          setStoreStart(row, index);
        } else {
          clearStoreStart();
        }
      }

      rows.setRowSelection(row, value);

      columns.setColumnAttribute(column, COLUMN_ATTRIBUTE.SELECTION_INDETERMINATE, rows.getRowIndeterminate());
      columns.setColumnAttribute(column, COLUMN_ATTRIBUTE.SELECTION_VAL, rows.getRowCheckedAllValue());

      ctx.emit(EMIT_EVENTS.ROW_SELECT, { row, index, checked: value, data: props.data });
      ctx.emit(EMIT_EVENTS.ROW_SELECT_CHANGE, { row, index, checked: value, data: props.data });
    };

    const beforeRowChange = () => {
      if (isShiftKeyDown.value) {
        const result = setStore(row, index);
        if (result) {
          const { start, end } = getStore();
          const startIndex = start.index < end.index ? start.index : end.index;
          const endIndex = start.index < end.index ? end.index : start.index;

          (rows.pageRowList.slice(startIndex, endIndex + 1) ?? []).forEach(item => {
            const isRowEnabled = isRowSelectEnable(props, { row, index, isCheckAll: false });
            isRowEnabled && rows.setRowSelection(item, true);
          });
        }

        ctx.emit(EMIT_EVENTS.ROW_SELECT, { row, index, checked: true, data: props.data, isShiftKeyDown: true });
        ctx.emit(EMIT_EVENTS.ROW_SELECT_CHANGE, {
          row,
          index,
          checked: true,
          data: props.data,
          isShiftKeyDown: true,
        });

        return Promise.resolve(!result);
      }

      return Promise.resolve(true);
    };

    const indeterminate = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_SELECTION_INDETERMINATE);
    const isChecked = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_SELECTION);
    const isEnable = isRowSelectEnable(props, { row, index, isCheckAll: false });

    return (
      <Checkbox
        onChange={handleChecked}
        disabled={!isEnable}
        modelValue={isChecked}
        indeterminate={indeterminate as boolean}
        beforeChange={beforeRowChange}
      />
    );
  };

  /**
   * 渲染表格Cell内容
   * @param row 当前行
   * @param column 当前列
   * @param index 当前列
   * @param rows 当前列
   * @returns
   */
  const renderCell = (row: any, column: Column, index: number, rowList: any[], isChild = false) => {
    const defaultFn = () => {
      const type = resolvePropVal(column, 'type', [column, row]);
      if (type === 'index') {
        return rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_INDEX);
      }

      const key = resolvePropVal(column, 'field', [column, row]);
      const cell = getRowText(row, key);
      if (typeof column.render === 'function') {
        return renderCellCallbackFn(row, column, index, rowList);
      }
      if (typeof cell === 'boolean') {
        return String(cell);
      }
      if (!cell && typeof cell !== 'number') {
        const { emptyCellText } = props;
        if (emptyCellText) {
          if (typeof emptyCellText === 'function') {
            return emptyCellText(row, column, index, rowList);
          }
          return emptyCellText;
        }
      }
      if (typeof cell === 'object') {
        return JSON.stringify(unref(cell));
      }
      return cell;
    };

    const renderFn = {
      expand: (row, column, index, rowList) => (isChild ? '' : renderExpandColumn(row, column, index, rowList)),
      selection: (row, column, index, _rows) => renderCheckboxColumn(row, index, column),
      drag: renderDraggableCell,
    };

    return renderFn[column.type]?.(row, column, index, rows) ?? defaultFn();
  };

  const getRowSpanConfig = (row: any, rowIndex, preRow: any, col: Column, store: WeakMap<Object, any>) => {
    if (!store.has(row)) {
      store.set(row, new WeakMap());
    }

    if (!store.get(row).has(col)) {
      store.get(row).set(col, { skipRowLen: 0, skipRow: false });
    }

    let { skipRowLen = 0 } = store.get(preRow)?.get(col) ?? {};
    let skipRow = false;
    const rowspan = resolveColumnSpan(col, null, row, rowIndex, 'rowspan');

    if (skipRowLen > 1) {
      skipRowLen = skipRowLen - 1;
      skipRow = true;
    } else {
      if (rowspan > 1) {
        skipRowLen = rowspan;
        skipRow = false;
      }
    }

    Object.assign(store.get(row).get(col), { skipRowLen, skipRow });
    return { skipRowLen, skipRow };
  };

  const getRowRender = (row: any, rowIndex: number, preRow: any, rowList, rowSpanMap, needRowSpan, isChild = false) => {
    const rowLength = rowList.length;
    const rowStyle = [
      ...formatPropAsArray(props.rowStyle, [row, rowIndex]),
      {
        '--row-height': `${getRowHeight(row, rowIndex)}px`,
      },
    ];

    const rowClass = [
      ...formatPropAsArray(props.rowClass, [row, rowIndex]),
      `hover-${props.rowHover}`,
      rowIndex % 2 === 1 && props.stripe ? 'stripe-row' : '',
    ];
    const rowId = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_UID);

    return [
      <TableRow key={rowId}>
        <tr
          key={rowId}
          // @ts-ignore
          style={rowStyle}
          class={rowClass}
          data-row-index={rowIndex}
          onClick={e => handleRowClick(e, row, rowIndex, rowList)}
          onDblclick={e => handleRowDblClick(e, row, rowIndex, rowList)}
          onMouseenter={e => handleRowEnter(e, row, rowIndex, rowList)}
          onMouseleave={e => handleRowLeave(e, row, rowIndex, rowList)}
          draggable={!!props.rowDraggable}
          {...dragEvents}
        >
          {columns.visibleColumns.map((column: Column, index: number) => {
            const cellStyle = [
              columns.getFixedStlye(column),
              ...formatPropAsArray(props.cellStyle, [column, index, row, rowIndex]),
            ];

            const { colspan, rowspan } = resolveCellSpan(column, index, row, rowIndex);
            const { skipCol } = columns.getColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SPAN) as {
              skipCol: boolean;
            };

            const { skipRow } =
              needRowSpan && !isChild
                ? getRowSpanConfig(row, rowIndex, preRow, column, rowSpanMap)
                : { skipRow: false };

            const tdCtxClass = {
              'expand-cell': column.type === 'expand',
            };

            if (!skipRow && !skipCol) {
              const cellClass = [
                columns.getColumnClass(column, index),
                columns.getColumnCustomClass(column, row),
                column.align || props.align,
                ...formatPropAsArray(props.cellClass, [column, index, row, rowIndex]),
                {
                  'expand-row': rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_EXPAND),
                  'is-last': rowIndex + rowspan >= rowLength,
                },
              ];

              const handleEmit = (event, type: string) => {
                const args = {
                  event,
                  row,
                  column,
                  cell: {
                    getValue: () => renderCell(row, column, rowIndex, rowList, isChild),
                  },
                  rowIndex,
                  columnIndex: index,
                };
                ctx.emit(type, args);
              };

              const columnKey = `${rowId}_${index}`;
              const cellKey = `${rowId}_${index}_cell`;
              return (
                <td
                  key={columnKey}
                  style={cellStyle}
                  class={cellClass}
                  colspan={colspan}
                  rowspan={rowspan}
                  onClick={event => handleEmit(event, EMIT_EVENTS.CELL_CLICK)}
                  onDblclick={event => handleEmit(event, EMIT_EVENTS.CELL_DBL_CLICK)}
                >
                  <TableCell
                    key={cellKey}
                    class={tdCtxClass}
                    column={column}
                    observerResize={props.observerResize}
                    parentSetting={props.showOverflowTooltip}
                    row={row}
                  >
                    {renderCell(row, column, rowIndex, rowList, isChild)}
                  </TableCell>
                </td>
              );
            }

            return null;
          })}
        </tr>
      </TableRow>,
      renderExpandRow(row, rowClass, rowIndex),
    ];
  };

  const renderExpandRow = (row: any, rowClass: any[], _rowIndex?) => {
    const isExpand = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_EXPAND);
    if (isExpand) {
      const resovledClass = [...rowClass, { row_expend: true }];

      const rowId = rows.getRowAttribute(row, TABLE_ROW_ATTRIBUTE.ROW_UID);
      const rowKey = `${rowId}_expand`;
      if (Array.isArray(row.children)) {
        return row.children.map((child, childIndex) => getRowRender(child, childIndex, {}, row, {}, false, true));
      }

      return (
        <TableRow key={rowKey}>
          <tr class={resovledClass}>
            <td
              colspan={columns.visibleColumns.length}
              rowspan={1}
            >
              {ctx.slots.expandRow?.(row) ?? <div class='expand-cell-ctx'>Expand Row</div>}
            </td>
          </tr>
        </TableRow>
      );
    }
  };

  const handlePageLimitChange = (limit: number) => {
    pagination.setPagination({ limit });
    ctx.emit(EMIT_EVENTS.PAGE_LIMIT_CHANGE, limit);
  };

  const handlePageChange = (current: number) => {
    if (typeof props.pagination === 'object' && current !== props.pagination.current) {
      pagination.setPagination({ current, value: current });
      ctx.emit(EMIT_EVENTS.PAGE_VALUE_CHANGE, current);
      return;
    }

    if (typeof props.pagination === 'boolean' && props.pagination !== false) {
      ctx.emit(EMIT_EVENTS.PAGE_VALUE_CHANGE, current);
    }
  };

  const renderTFoot = () => {
    if (pagination.isShowPagination.value) {
      return (
        <Pagination
          style='width: 100%;'
          {...pagination.options}
          modelValue={pagination.options.current}
          onLimitChange={limit => handlePageLimitChange(limit)}
          onChange={current => handlePageChange(current)}
        />
      );
    }
  };

  return {
    renderColumns,
    renderTBody,
    renderTFoot,
    setDragEvents,
  };
};
