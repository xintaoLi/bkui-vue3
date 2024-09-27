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
import { isVNode, render } from 'vue';

import { type Options } from 'tabulator-tables';

import { ROW_HEIGHT } from '../const';
import { Column, HeadRenderArgs, TablePropTypes } from '../props';
import { getRawData } from '../utils';

const defaultOptions: Options = {
  layout: 'fitColumns',
  resizableColumnFit: true,
  autoColumns: false,
  rowHeight: ROW_HEIGHT,
};

export default (props: TablePropTypes) => {
  const resolvedOptions = { ...defaultOptions };

  const resolveLayout = () => {
    Object.assign(resolvedOptions, { headerVisible: props.showHead });
  };

  const resolveData = () => {
    Object.assign(resolvedOptions, { data: getRawData(props.data ?? []) });
  };

  const getCellRender = (column: Column, fn: (args: HeadRenderArgs) => unknown) => {
    return (cell, formatterParams, onRendered) => {
      const vnode = fn({
        cell: cell.getValue(),
        column,
        row: cell.getData?.(),
        formatterParams,
        instance: cell,
      });
      if (isVNode(vnode)) {
        onRendered(() => {
          render(vnode, cell.getElement());
        });
        return undefined;
      }

      return vnode;
    };
  };

  const getCellFormatter = (column: Column) => {
    if (typeof column.render === 'function') {
      return getCellRender(column, column.render);
    }

    return undefined;
  };

  const getFn = (args: unknown[]) => {
    return args.find(arg => typeof arg === 'function') as (args: HeadRenderArgs) => unknown;
  };

  const getTitleFormatter = (column: Column) => {
    const renderFn = getFn([column.label, column.renderHead, props.thead.cellFn]);
    if (typeof renderFn === 'function') {
      return getCellRender(column, renderFn);
    }

    return undefined;
  };

  const resolveColumns = () => {
    Object.assign(resolvedOptions, {
      columns: getRawData(props.columns ?? []).map((column: Column) => {
        const formatter = getCellFormatter(column);
        const titleFormatter = getTitleFormatter(column);

        return { title: column.label, ...column, formatter, titleFormatter };
      }),
    });
  };

  const getTableOption = () => {
    resolveLayout();
    resolveData();
    resolveColumns();
    return resolvedOptions;
  };

  return { getTableOption };
};
