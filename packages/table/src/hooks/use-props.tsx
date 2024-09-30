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
import { createApp, isVNode } from 'vue';

import { SortDirection, type Options } from 'tabulator-tables';

import { ROW_HEIGHT, SORT_OPTION } from '../const';
import { Column, HeadRenderArgs, TablePropTypes } from '../props';
import { getRawData } from '../utils';

const defaultOptions: Options = {
  layout: 'fitColumns',
  resizableColumnFit: true,
  resizableColumnGuide: true,
  columnHeaderSortMulti: false,
  autoColumns: false,
  rowHeight: ROW_HEIGHT,
  movableRows: false,
  pagination: false,
  initialSort: [],
  rowHeader: null,
};

export default (props: TablePropTypes) => {
  const resolvedOptions = { ...defaultOptions };

  const resolveData = () => {
    Object.assign(resolvedOptions, { data: getRawData(props.data ?? []) });
  };

  // 延迟加载的 Vue 实例
  let app = null;

  function renderCell(vnode, targetElement) {
    if (!app) {
      // 创建 Vue 实例
      app = createApp({
        render() {
          return vnode;
        },
      });

      // 挂载 Vue 实例
      app.mount(targetElement);
    } else {
      // 更新 Vue 实例的 vnode
      app._instance.proxy.$forceUpdate();
    }
  }

  const renderVnodeToCell = (vnode, cell, onRendered) => {
    if (isVNode(vnode)) {
      onRendered(() => {
        renderCell(vnode, cell.getElement());
      });
      return undefined;
    }

    return vnode;
  };

  const formatOptionColumns = () => {
    return (
      props.options.columns?.map(col => {
        ['formatter', 'titleFormatter'].forEach(key => {
          if (typeof col[key] === 'function') {
            const fn = col[key];
            col[key] = (cell, formatterParams, onRendered) => {
              return renderVnodeToCell(fn(cell, formatterParams, onRendered), cell, onRendered);
            };
          }
        });

        return col;
      }) ?? []
    );
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
            return renderVnodeToCell(props.options[key](row), row, fn => fn());
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
        columns: formatOptionColumns(),
        ...formatRowRender(),
      });
    }
  };

  /****************************** Begin 旧版本Props配置项映射配置 ******************************/
  const resolveLayout = () => {
    Object.assign(resolvedOptions, {
      headerVisible: props.showHead,
      movableRows: props.rowDraggable,
      height: props.height,
      rowHeight: props.rowHeight,
      minHeight: props.minHeight,
      maxHeight: props.maxHeight,
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
    return (cell, formatterParams, onRendered) => {
      const vnode = fn({
        cell: cell.getValue(),
        column,
        row: cell.getData?.(),
        data: cell.getData?.(),
        formatterParams,
        instance: cell,
      });

      return renderVnodeToCell(vnode, cell, onRendered);
    };
  };

  /**
   * 映射旧版本设置到新的配置
   */
  const getCellFormatter = (column: Column) => {
    if (typeof column.render === 'function') {
      return getCellRender(column, column.render);
    }

    if (column.type === 'index') {
      return 'rownum';
    }

    if (column.type === 'selection') {
      return 'rowSelection';
    }

    return undefined;
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

  /**
   * 解析列配置，映射到table设置项
   */
  const resolveColumns = () => {
    const formatColumns = (cols: Column[]) =>
      cols.map((column: Column) => {
        const formatter = getCellFormatter(column);
        const titleFormatter = getTitleFormatter(column);
        const frozen = getFrozenFormat(column);
        const visible = getVisibleFormat(column);
        const headerSort = getHeaderSortFormat(column);
        const sorter = getColumnSorter(column);
        const align = getColumnAlign(column);
        const field = column.field ?? column.prop;

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

    Object.assign(resolvedOptions, {
      columns: formatColumns(getRawData(props.columns ?? [])),
    });
  };

  const resolvePagination = () => {
    if (props.pagination) {
      const config = props.pagination as Record<string, unknown>;

      Object.assign(resolvedOptions, {
        pagination: 'local',
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

  /*************************************** End 旧版本映射关系 ***************************************************/

  const getTableOption = () => {
    resolveData();
    resolvePagination();
    resolveLayout();
    resolveColumns();
    formatOptions();
    return resolvedOptions;
  };

  return { getTableOption, setFooterElement };
};
