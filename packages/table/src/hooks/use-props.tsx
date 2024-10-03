/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台 (BlueKing PaaS):
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
import { createApp, getCurrentInstance, onMounted, defineComponent, computed, isVNode, reactive } from 'vue';

import { CellComponent, SortDirection, type Options } from 'tabulator-tables';

import { ROW_HEIGHT, SORT_OPTION } from '../const';
import { Column, HeadRenderArgs, TablePropTypes } from '../props';
import { getRawData, resolveCellSpan } from '../utils';
import { rightShape, downShape } from '../svg-icon/svg-string';

const defaultOptions: Options = {
  layout: 'fitColumns',
  resizableColumnFit: true,
  resizableColumnGuide: true,
  reactiveData: true,
  columnHeaderSortMulti: false,
  autoColumns: false,
  dataTree: false,
  dataTreeStartExpanded: false,
  dataTreeChildField: 'children',
  dataTreeExpandElement: rightShape,
  dataTreeCollapseElement: downShape,
  rowHeight: ROW_HEIGHT,
  movableRows: false,
  pagination: false,
  initialSort: [],
  rowHeader: null,
  paginationMode: 'local',
  renderVerticalBuffer: undefined
};

export type RowFormatterFn = Map<string, (row: Record<string, unknown>) => void>;

export default (props: TablePropTypes) => {
  const resolvedOptions = { ...defaultOptions };
  const rowFormatterFnList: RowFormatterFn = new Map();
  let instance = null;

  const dataTree = computed(() => props.columns.some(col => col.type === 'expand'));

  const resolveData = () => {
    Object.assign(resolvedOptions, {
      dataTree: dataTree.value,
      data: getRawData(props.data),
    });
  };

  const renderApp = defineComponent({
    props: {
      slotFn: {
        type: Function,
        default: null,
      },
      params: {
        type: Array,
        default: () => [],
      },
    },

    unmounted() {
      console.log('unmounted');
    },
    render() {
      return this.slotFn?.(...this.params);
    },
  });

  const createCellApp = (params, slotFn) => {
    if (typeof slotFn === 'function' || isVNode(slotFn)) {
      const globalAppInstance = createApp(renderApp, {
        slotFn,
        params,
      });

      Object.keys(instance.appContext.components).forEach(key => {
        const component = instance.appContext.components[key];
        if (!globalAppInstance._context.components[key]) {
          // Check if component is already registered
          if ('install' in component) {
            globalAppInstance.use(component, {});
          } else {
            globalAppInstance.component(key, component);
          }
        }
      });

      let temp = document.createElement('div');
      globalAppInstance.mount(temp);
      return globalAppInstance?._instance.proxy.$el;
    }

    return slotFn;
  };

  // 自定义 formatter
  const customCellSpanFormatter = (cell: CellComponent, column: Column, colIndex: number) => {
    if (!cell) {
      return;
    }

    const cellElement = cell?.getElement();
    const { colspan, rowspan } = resolveCellSpan(column, colIndex, cell.getData?.());

    if (colspan > 1) {
      cellElement.setAttribute('colspan', `${colspan}`);
      // cellElement.style.display = 'block';
      // cellElement.style.width = `calc(${colspan * 100}% - 10px)`; // 调整宽度
    }

    if (rowspan > 1) {
      cellElement.setAttribute('rowspan', `${rowspan}`);
      // cellElement.style.display = 'block';
      // cellElement.style.height = `calc(${rowspan * 100}% - 10px)`; // 调整高度
    }
  };

  const formatOptionColumns = () => {
    if (props.options.columns === undefined) {
      return {};
    }

    return {
      columns:
        props.options.columns?.map(col => {
          ['formatter', 'titleFormatter'].forEach(key => {
            if (typeof col[key] === 'function') {
              const fn = col[key];
              col[key] = (cell, formatterParams, onRendered) => {
                return createCellApp([cell, formatterParams, onRendered], fn);
              };
            }
          });

          return col;
        }) ?? [],
    };
  };

  /**
   * 格式化渲染函数，支持VNode
   */
  const vNodeFnKeyList = ['rowFormatter', 'rowFormatterPrint'];
  const formatRowRender = () => {
    return vNodeFnKeyList.reduce((out, key) => {
      if (typeof props.options[key] === 'function') {
        return Object.assign(out, {
          [key]: row => {
            return createCellApp([row], props.options[key]);
          },
        });
      }
    }, {});
  };

  /**
   * 格式化表格配置
   */
  const formatOptions = () => {
    if (props.options) {
      Object.assign(resolvedOptions, props.options, {
        ...formatOptionColumns(),
        ...formatRowRender(),
      });
    }
  };

  /** **************************** Begin 旧版本Props配置项映射配置 ******************************/
  const resolveLayout = () => {
    Object.assign(resolvedOptions, {
      headerVisible: props.showHead,
      movableRows: props.rowDraggable,
      height: props.height,
      rowHeight: props.rowHeight ?? ROW_HEIGHT,
      minHeight: props.minHeight,
      maxHeight: props.maxHeight,
      // renderHorizontal: props.virtualEnabled ? 'virtual' : 'basic',
    });

    if (props.rowDraggable) {
      Object.assign(resolvedOptions, {
        rowHeader: {
          headerSort: false,
          resizable: false,
          minWidth: 30,
          width: 30,
          rowHandle: true,
          formatter: 'handle',
        },
      });
    }
  };

  /**
   * 兼容旧版本cell-render
   * @param column
   * @param fn
   * @returns
   */
  const getCellRender = (column: Column, fn: (args: HeadRenderArgs) => unknown) => {
    return cell => {
      if (typeof column.renderSpan === 'function') {
        column.renderSpan(cell);
      }

      const params = [
        {
          cell: cell.getValue(),
          column,
          row: reactive(cell.getData?.() ?? {}),
          data: reactive(cell.getData?.() ?? {}),
          instance: cell,
        },
      ];

      return createCellApp(params, fn);
    };
  };

  const resolveColumnSpan = (column: Column, index: number) => {
    if (typeof column.rowspan !== undefined || typeof column.colspan !== undefined) {
      column.renderSpan = cell => {
        customCellSpanFormatter(cell, column, index);
      };
    }
  };

  const convertColumnTypeToFormatter = (type: string) => {
    const map = {
      index: 'rownum',
      selection: 'rowSelection',
    };

    return map[type];
  };

  /**
   * 映射旧版本设置到新的配置
   */
  const getCellFormatter = (column: Column, index: number) => {
    resolveColumnSpan(column, index);

    if (typeof column.render === 'function') {
      return getCellRender(column, column.render);
    }

    return convertColumnTypeToFormatter(column.type);
  };

  const getFn = (args: unknown[]) => {
    return args.find(arg => typeof arg === 'function') as (args: HeadRenderArgs) => unknown;
  };

  /**
   * 自定义表头
   * @param column
   * @returns
   */
  const getTitleFormatter = (column: Column) => {
    const renderFn = getFn([column.label, column.renderHead, props.thead.cellFn]);
    if (typeof renderFn === 'function') {
      return getCellRender(column, renderFn);
    }

    if (column.type === 'selection') {
      return 'rowSelection';
    }

    return undefined;
  };

  const getVisibleFormat = (column: Column) => {
    return { visible: !column.disabled };
  };

  /**
   * 表格冻结设置
   * @param column
   * @returns
   */
  const getFrozenFormat = (column: Column) => {
    if (typeof column.fixed === 'string' || (typeof column.fixed === 'boolean' && column.fixed)) {
      return { frozen: true };
    }

    return {};
  };

  const getHeaderSortFormat = (column: Column) => {
    return {
      headerSort: !!column.sort,
    };
  };

  /**
   * 排序规则解析
   * @param column
   * @returns
   */
  const getColumnSorter = (column: Column) => {
    if (typeof column.sort === 'string' && [SORT_OPTION.DESC, SORT_OPTION.ASC].includes(column.sort as SORT_OPTION)) {
      return { sorter: (a, b) => (column.sort === SORT_OPTION.DESC ? b - a : a - b) };
    }

    if (typeof column.sort === 'object') {
      if ([SORT_OPTION.DESC, SORT_OPTION.ASC].includes(column.sort.value as SORT_OPTION)) {
        const field = column.prop ?? column.field;
        if (!resolvedOptions.initialSort.some(col => col.column === field)) {
          resolvedOptions.initialSort.push({ column: field as string, dir: column.sort.value as SortDirection });
        }
      }
      return { sorter: column.sort.sortFn };
    }

    return {};
  };

  const getColumnAlign = (column: Column) => {
    let defaultVal = 'left';
    if (['index', 'selection'].includes(column.type)) {
      defaultVal = 'center';
    }

    return {
      hozAlign: column.textAlign ?? column.align ?? defaultVal,
      headerHozAlign: props.headerAlign ?? column.textAlign ?? column.align ?? defaultVal,
    };
  };

  const renderExpandChildRow = row => {
    var data = row?.getData() ?? {};
    if (data._is_tree_node) {
      const element = row.getElement() as HTMLElement;
      element.innerHTML = '';
      element.append('_is_tree_node');
    }
  };

  /**
   * 解析列配置，映射到table设置项
   */
  const resolveColumns = () => {
    const formatColumns = (cols: Column[]) =>
      cols
        .filter(col => {
          if (col.type === 'expand') {
            return col.expandCell === true;
          }

          return true;
        })
        .map((column: Column, index: number) => {
          const formatter = getCellFormatter(column, index);
          const titleFormatter = getTitleFormatter(column);
          const frozen = getFrozenFormat(column);
          const visible = getVisibleFormat(column);
          const headerSort = getHeaderSortFormat(column);
          const sorter = getColumnSorter(column);
          const align = getColumnAlign(column);

          const isRenderFn = typeof formatter === 'function';
          const field = isRenderFn ? undefined : column.field ?? column.prop;

          if (column.children?.length) {
            return {
              title: column.label,
              columns: formatColumns(column.children ?? []),
            };
          }

          return {
            title: column.label,
            width: column.width,
            minWidth: column.minWidth ?? '100%',
            resizable: column.resizable ?? true,
            formatter,
            field,
            titleFormatter,
            ...frozen,
            ...visible,
            ...headerSort,
            ...sorter,
            ...align,
          };
        });

    if ((props.columns ?? []).some(col => col.type === 'expand')) {
      rowFormatterFnList.set('expand', renderExpandChildRow);
    }

    Object.assign(resolvedOptions, {
      columns: formatColumns(props.columns ?? []),
    });
  };

  const resolvePagination = () => {
    if (props.pagination) {
      const config = props.pagination as Record<string, unknown>;

      Object.assign(resolvedOptions, {
        pagination: true,
        paginationMode: props.remotePagination ? 'remote' : 'local',
        paginationSize: config.limit ?? 10,
        paginationSizeSelector: config.showLimit ?? true ? config.limitList ?? [10, 20, 50, 100] : false,
        paginationCounter: 'rows',
      });

      return;
    }
  };

  const setFooterElement = (element: HTMLElement) => {
    Object.assign(resolvedOptions, {
      footerElement: element,
    });
  };

  /**
   * 执行 rowFormatter
   */
  const resolveRowFormatter = () => {
    const oldFn = resolvedOptions.rowFormatter;
    Object.assign(resolvedOptions, {
      rowFormatter: row => {
        oldFn?.(row);
        Array.from(rowFormatterFnList.values()).forEach(fn => {
          fn(row);
        });
      },
    });
  };

  /** ************************************* End 旧版本映射关系 ***************************************************/

  const getTableOption = () => {
    resolveData();
    resolvePagination();
    resolveLayout();
    resolveColumns();
    formatOptions();
    resolveRowFormatter();
    return resolvedOptions;
  };

  onMounted(() => {
    instance = getCurrentInstance();
  });

  return { getTableOption, setFooterElement };
};
