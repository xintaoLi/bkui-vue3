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
import { VNode, isVNode, unref, toRaw, isRef, RendererNode } from 'vue';

import { v4 as uuidv4 } from 'uuid';

import { ITableColumn } from '../components/table-column';

export default () => {
  const columns = [];
  let columnIndex = 0;
  const columnCache = new WeakMap();

  const getPropRawData = prop => {
    if (isRef(prop)) {
      return unref(prop);
    }

    return toRaw(prop);
  };

  const copyProps = (props: { [key: string]: Record<string, object> } | ITableColumn) => {
    return Object.keys(props ?? {}).reduce((result, key) => {
      const target = key.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
      return Object.assign(result, { [target]: getPropRawData(props[key]) });
    }, {});
  };

  const getNodeCtxUid = ctx => {
    if (!columnCache.has(ctx)) {
      columnCache.set(ctx, uuidv4());
    }

    return columnCache.get(ctx);
  };

  const resolveChildNode = (node: RendererNode) => {
    if (!node || node.type?.name === 'Table') {
      return;
    }

    if (node.type?.name === 'TableColumn') {
      const resolveProp = Object.assign({ index: columnIndex }, copyProps(node.props), {
        field: node.props.prop || node.props.field,
        render: node.props.render ?? node.children?.default,
        uniqueId: getNodeCtxUid(node),
      });

      if (!columns.some(col => col.uniqueId === resolveProp.uniqueId)) {
        columns.push(unref(resolveProp));
        columnIndex = columnIndex + 1;
      }

      return;
    }

    if (Array.isArray(node)) {
      node.forEach(resolveChildNode);
    }

    if (Array.isArray(node?.children)) {
      node.children.forEach(resolveChildNode);
    }

    if (isVNode(node) && node?.children && typeof node?.children === 'object') {
      Object.keys(node.children).forEach(key => resolveChildNode(node.children[key]));
    }

    if (typeof node === 'function') {
      return node();
    }

    if (node.type.functional) {
      [node?.ctx.subTree].forEach(resolveChildNode);
    }

    return;
  };

  const resolveColumns = (children: VNode[]) => {
    columns.length = 0;
    columnIndex = 0;

    const ghostBody = children.find(node => (node.type as RendererNode)?.name === 'GhostBody');
    if (ghostBody) {
      ((ghostBody.children as { [key: string]: () => VNode[] })?.default?.() ?? []).forEach(resolveChildNode);
    }

    columns.sort((col1, col2) => col1.index - col2.index);
    return columns;
  };

  return {
    resolveColumns,
  };
};
