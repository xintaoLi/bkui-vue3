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
import { isReactive, isReadonly, isRef, toRaw, unref, toValue } from 'vue';

import { Column } from './props';

export const getRawData = data => {
  if (typeof toValue === 'function') {
    return toValue(data);
  }

  if (isReactive(data) || isReadonly(data)) {
    return toRaw(data);
  }

  if (isRef(data)) {
    return unref(data);
  }
};

export const resolveColumnSpan = (
  column: Column,
  colIndex: number,
  row: Record<string, unknown>,
  key: string,
): number => {
  if (typeof column[key] === 'function') {
    return Reflect.apply(column[key], this, [{ column, colIndex, row }]);
  }

  if (typeof column[key] === 'number') {
    return column[key];
  }

  return 1;
};

export const resolveCellSpan = (column: Column, colIndex: number, row: Record<string, unknown>) => {
  const colspan = resolveColumnSpan(column, colIndex, row, 'colspan');
  const rowspan = resolveColumnSpan(column, colIndex, row, 'rowspan');
  return { colspan, rowspan };
};
