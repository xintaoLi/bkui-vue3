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
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { computed, reactive, unref, watch } from 'vue';

import { useLocale } from '@bkui-vue/config-provider';

import { COL_MIN_WIDTH, COLUMN_ATTRIBUTE, IEmptyObject, SORT_OPTION } from '../const';
import { EMIT_EVENTS } from '../events';
import HeadFilter from '../plugins/head-filter';
import HeadSort from '../plugins/head-sort';
import { Column, IColSortBehavior, Settings, TablePropTypes } from '../props';
import {
  getNextSortType,
  getSortFn,
  isColumnHidden,
  resolveColumnFilterProp,
  resolveColumnSortProp,
  resolveColumnSpan,
  resolveHeadConfig,
  resolvePropVal,
} from '../utils';

const useColumns = (props: TablePropTypes, context) => {
  const t = useLocale('table');
  const tableColumnSchema = reactive(new WeakMap());
  const tableColumnList = reactive([]);
  const uuid = uuidv4();

  const visibleColumns = computed(() => tableColumnList.filter(col => !isHiddenColumn(col)));
  const headHeight = computed(() => {
    if (props.showHead) {
      return props.headHeight;
    }

    return 0;
  });

  const resolveDraggableColumn = () => {
    if (props.rowDraggable) {
      tableColumnList.unshift({
        minWidth: 50,
        width: props.rowDraggable?.width ?? 60,
        label: props.rowDraggable?.label ?? t.value.sort,
        type: 'drag',
      });
    }
  };

  /**
   * 判定是否需要合并行或者列配置
   */
  const neepColspanOrRowspan = (attrs = ['rowspan', 'colspan']) =>
    tableColumnList.some(col => attrs.some(name => typeof col[name] === 'function' || /^\d$/.test(`${col[name]}`)));

  const needColSpan = computed(() => neepColspanOrRowspan(['colspan']));
  const needRowSpan = computed(() => neepColspanOrRowspan(['rowspan']));

  const getColumnSpanConfig = (col: Column, index: number, skipColNum: number) => {
    let skipColumnNum = skipColNum;
    const colspan = resolveColumnSpan(col, index, null, null, 'colspan');
    const target = {
      skipCol: false,
      skipColLen: 0,
    };

    if (skipColumnNum > 0) {
      target.skipColLen = skipColumnNum;
      target.skipCol = true;
      skipColumnNum = skipColumnNum - 1;
    }

    if (colspan > 1) {
      target.skipColLen = colspan;
      skipColumnNum = colspan - 1;
    }

    return { ...target, skipColumnNum };
  };

  const resolveMinWidth = (col: Column) => {
    if (/^\d+/.test(`${col.minWidth}`)) {
      return col.minWidth;
    }

    let minWidth = COL_MIN_WIDTH;
    if (col.sort) {
      minWidth = minWidth + 18;
    }

    if (col.filter) {
      minWidth = minWidth + 28;
    }
    return minWidth;
  };

  const resolveEventListener = (col: Column) => {
    const listeners = getColumnAttribute(col, COLUMN_ATTRIBUTE.LISTENERS) as Map<string, any>;

    if (!listeners) {
      return {};
    }

    return Array.from(listeners?.keys()).reduce((handle: any, key: string) => {
      const eventName = key.split('_').slice(-1)[0];
      return Object.assign(handle, {
        [eventName]: (e: MouseEvent) => {
          listeners.get(key).forEach((fn: Function) => Reflect.apply(fn, this, [e, col]));
        },
      });
    }, {});
  };

  /**
   * 点击排序事件
   * @param sortFn 排序函数
   * @param type 排序类型
   */
  const handleSortClick = (column, index, args?) => {
    const { isCancel, type = getColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_TYPE) } = args ?? {};
    const nextType = isCancel ? SORT_OPTION.NULL : getNextSortType(type);

    const execFn = getSortFn(column, nextType, props.sortValFormat);
    setColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_TYPE, type);
    setColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_FN, execFn);
    setColumnSortActive(column, nextType === SORT_OPTION.NULL);

    context.emit(EMIT_EVENTS.COLUMN_SORT, { column, index, type });
  };

  /**
   * 获取排序设置表头
   * @param column 当前渲染排序列
   * @param index 排序列所在index
   * @returns
   */
  const getSortCell = (column: Column, index: number) => {
    // 如果是独立的，则只高亮当前排序
    return (
      <HeadSort
        column={column as Column}
        onChange={args => handleSortClick(column, index, args)}
        sortValFormat={props.sortValFormat}
        defaultSort={getColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_TYPE)}
        active={getColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_ACTIVE)}
      />
    );
  };

  const getFilterCell = (column: Column, index: number) => {
    const handleFilterChange = (checked: any[], filterFn: Function) => {
      const filterFn0 = (row: any, index: number) => filterFn(checked, row, index);
      setColumnAttribute(column, COLUMN_ATTRIBUTE.COL_FILTER_FN, filterFn0);
      context.emit(EMIT_EVENTS.COLUMN_FILTER, { checked, column: unref(column), index });
    };

    const filterSave = (values: any[]) => {
      context.emit(EMIT_EVENTS.COLUMN_FILTER_SAVE, { column, values });
    };

    return (
      <HeadFilter
        column={column as Column}
        height={props.headHeight}
        onChange={handleFilterChange}
        onFilterSave={filterSave}
      />
    );
  };

  const config = resolveHeadConfig(props);
  const { cellFn } = config;
  const getHeadCellText = (column, index) => {
    if (typeof cellFn === 'function') {
      return cellFn(column, index);
    }

    if (typeof column.renderHead === 'function') {
      return column.renderHead(column, index);
    }

    return resolvePropVal(column, 'label', [column, index]);
  };

  const getHeadCellRender = (column: Column, index: number) => {
    const cells = [];
    if (column.sort) {
      cells.push(getSortCell(column, index));
    }

    if (column.filter) {
      cells.push(getFilterCell(column, index));
    }

    const cellText = getHeadCellText(column, index);
    cells.unshift(<span class='head-text'>{cellText}</span>);

    const showTitle = typeof cellText === 'string' ? cellText : undefined;

    const headClass = { 'has-sort': !!column.sort, 'has-filter': !!column.filter };

    return { cells, showTitle, headClass };
  };

  /**
   * Format columns
   * @param columns
   */
  const formatColumns = () => {
    resolveDraggableColumn();
    let skipColNum = 0;
    (tableColumnList || []).forEach((col, index) => {
      const { skipCol, skipColumnNum, skipColLen } = needColSpan.value
        ? getColumnSpanConfig(col, index, skipColNum)
        : { skipCol: false, skipColumnNum: 0, skipColLen: 0 };

      skipColNum = skipColumnNum;
      if (!tableColumnSchema.has(col)) {
        const { type, fn, scope, active } = resolveColumnSortProp(col, props);
        const settings = (props.settings ?? {}) as Settings;
        const filterObj = resolveColumnFilterProp(col);

        tableColumnSchema.set(col, {
          [COLUMN_ATTRIBUTE.CALC_WIDTH]: undefined,
          [COLUMN_ATTRIBUTE.RESIZE_WIDTH]: undefined,
          [COLUMN_ATTRIBUTE.COL_MIN_WIDTH]: resolveMinWidth(col),
          [COLUMN_ATTRIBUTE.LISTENERS]: new Map(),
          [COLUMN_ATTRIBUTE.WIDTH]: col.width,
          [COLUMN_ATTRIBUTE.IS_HIDDEN]: isColumnHidden(settings.fields ?? [], col, settings.checked ?? []),
          [COLUMN_ATTRIBUTE.COL_SORT_TYPE]: type,
          [COLUMN_ATTRIBUTE.COL_SORT_FN]: fn,
          [COLUMN_ATTRIBUTE.COL_FILTER_OBJ]: filterObj,
          [COLUMN_ATTRIBUTE.COL_FILTER_FN]: undefined,
          [COLUMN_ATTRIBUTE.COL_FILTER_SCOPE]: undefined,
          [COLUMN_ATTRIBUTE.COL_SORT_SCOPE]: scope,
          [COLUMN_ATTRIBUTE.COL_SORT_ACTIVE]: active,
          [COLUMN_ATTRIBUTE.COL_IS_DRAG]: false,
          [COLUMN_ATTRIBUTE.COL_SPAN]: { skipCol, skipColumnNum, skipColLen },
          [COLUMN_ATTRIBUTE.COL_UID]: uuidv4(),
          [COLUMN_ATTRIBUTE.SELECTION_DISABLED]: false,
          [COLUMN_ATTRIBUTE.SELECTION_INDETERMINATE]: false,
          [COLUMN_ATTRIBUTE.SELECTION_VAL]: false,
        });
      }

      Object.assign(tableColumnSchema.get(col), {
        [COLUMN_ATTRIBUTE.COL_SPAN]: { skipCol, skipColumnNum, skipColLen },
        [COLUMN_ATTRIBUTE.COL_MIN_WIDTH]: resolveMinWidth(col),
      });
    });
  };

  const debounceUpdateColumns = debounce(columns => {
    tableColumnList.length = 0;
    tableColumnList.push(...columns);
    formatColumns();
  });

  const setColumnIsHidden = (column: Column, value = false) => {
    setColumnAttribute(column, COLUMN_ATTRIBUTE.IS_HIDDEN, value);
  };

  const setColumnResizeWidth = (column: Column, value: number) => {
    setColumnAttribute(column, COLUMN_ATTRIBUTE.RESIZE_WIDTH, value);
  };

  const setColumnSortOption = (column: Column, option: Record<string, any>) => {
    const { type, fn, scope, active } = option;
    const target = {
      [COLUMN_ATTRIBUTE.COL_SORT_TYPE]: type,
      [COLUMN_ATTRIBUTE.COL_SORT_FN]: fn,
      [COLUMN_ATTRIBUTE.COL_SORT_ACTIVE]: active,
      [COLUMN_ATTRIBUTE.COL_SORT_SCOPE]: scope,
    };

    [
      COLUMN_ATTRIBUTE.COL_SORT_TYPE,
      COLUMN_ATTRIBUTE.COL_SORT_FN,
      COLUMN_ATTRIBUTE.COL_SORT_ACTIVE,
      COLUMN_ATTRIBUTE.COL_SORT_SCOPE,
    ].forEach(name => {
      if (target[name] !== undefined) {
        setColumnAttribute(column, name, target[name]);
      }
    });
  };

  const setColumnFilterOption = (column: Column, option: Record<string, any>) => {
    if (tableColumnSchema.has(column)) {
      Object.assign(tableColumnSchema.get(column)[COLUMN_ATTRIBUTE.COL_FILTER_OBJ], option);
    }
  };

  const ORDER_LIST = [COLUMN_ATTRIBUTE.RESIZE_WIDTH, COLUMN_ATTRIBUTE.CALC_WIDTH, COLUMN_ATTRIBUTE.WIDTH];

  /**
   * 获取当前列实际宽度
   * width props中设置的默认宽度
   * calcWidth 计算后的宽度
   * resizeWidth 拖拽重置之后的宽度
   * @param colmun 当前列配置
   * @param orders 获取宽度顺序
   * @returns
   */
  const getColumnOrderWidth = (col: Column, orders = ORDER_LIST): number => {
    const target = tableColumnSchema.get(col) ?? {};
    return target[orders[0]] ?? target[orders[1]] ?? target[orders[2]];
  };

  /**
   * 指定列是否展示状态
   * @param col
   */
  const isHiddenColumn = (col: Column) => {
    return tableColumnSchema.get(col)?.[COLUMN_ATTRIBUTE.IS_HIDDEN] ?? false;
  };

  /**
   * 获取列所在ID
   * @param col
   */
  const getColumnId = (col: Column) => {
    return tableColumnSchema.get(col)?.[COLUMN_ATTRIBUTE.COL_UID];
  };

  /**
   * 设置表格列属性
   * @param col 当前列
   * @param attrName 设置属性
   * @param attrValue 属性值
   */
  const setColumnAttribute = (
    col: Column,
    attrName: string,
    attrValue: ((...args) => boolean | number | void | string) | string | boolean | number,
  ) => {
    const target = tableColumnSchema.get(col);
    if (target && Object.prototype.hasOwnProperty.call(target, attrName)) {
      target[attrName] = attrValue;
    }
  };

  const setColumnAttributeBySettings = (settings: Settings, checkedVal?: string[]) => {
    const checked = checkedVal || settings.checked || [];
    const settingFields = settings.fields || [];

    tableColumnList.forEach(col => {
      setColumnAttribute(col, COLUMN_ATTRIBUTE.IS_HIDDEN, isColumnHidden(settingFields, col, checked));
    });
  };

  /**
   * 获取列配置属性值
   * @param col
   * @param attributeName
   */
  const getColumnAttribute = (col: Column | IEmptyObject, attributeName: string) => {
    return tableColumnSchema.get(col)?.[attributeName];
  };

  const getColumnClass = (column: Column, colIndex: number) => ({
    [`${uuid}-column-${colIndex}`]: false,
    column_fixed: !!column.fixed,
    column_fixed_left: !!column.fixed,
    column_fixed_right: column.fixed === 'right',
  });

  const getHeadColumnClass = (column: Column, colIndex: number) => ({
    ...getColumnClass(column, colIndex),
  });

  /**
   * 获取用户自定义class
   * @param column
   * @param row
   * @private
   */
  const getColumnCustomClass = (column, row?: any) => {
    const rowClass = column.className;
    if (rowClass) {
      if (typeof rowClass === 'function') {
        return rowClass(row);
      }
      if (typeof rowClass === 'string') {
        return rowClass;
      }
    }
    return '';
  };

  /**
   * 设置指定列是否激活排序
   * @param column
   * @param active
   */
  const setColumnSortActive = (column: Column, active: boolean) => {
    if (props.colSortBehavior === IColSortBehavior.independent) {
      tableColumnList.forEach(col => {
        setColumnAttribute(col, COLUMN_ATTRIBUTE.COL_SORT_ACTIVE, false);
      });
    }
    setColumnAttribute(column, COLUMN_ATTRIBUTE.COL_SORT_ACTIVE, active);
  };

  watch(
    () => [props.columns],
    () => {
      debounceUpdateColumns(props.columns);
    },
    { immediate: true },
  );

  return {
    needColSpan,
    needRowSpan,
    headHeight,
    tableColumnSchema,
    tableColumnList,
    visibleColumns,
    debounceUpdateColumns,
    formatColumns,
    isHiddenColumn,
    handleSortClick,
    getColumnId,
    getColumnOrderWidth,
    getColumnAttribute,
    getHeadColumnClass,
    getColumnClass,
    getColumnCustomClass,
    getHeadCellRender,
    resolveEventListener,
    setColumnIsHidden,
    setColumnResizeWidth,
    setColumnSortOption,
    setColumnFilterOption,
    setColumnAttributeBySettings,
    setColumnAttribute,
    setColumnSortActive,
  };
};

export type UseColumns = ReturnType<typeof useColumns>;
export default useColumns;
