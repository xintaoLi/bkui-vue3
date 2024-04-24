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
import type { SimpleBarOptions } from '.';

export function getElementWindow(element: Element) {
  return element?.ownerDocument?.defaultView ?? window;
}

export function getElementDocument(element: Element) {
  return element?.ownerDocument ?? document;
}

// Helper function to retrieve options from element attributes
export const getOptions = function (obj: any) {
  const initialObj: SimpleBarOptions = {};

  const options = Array.prototype.reduce.call(
    obj,
    (acc: any, attribute) => {
      const option = attribute.name.match(/data-simplebar-(.+)/);
      if (option) {
        const key: keyof SimpleBarOptions = option[1].replace(/\W+(.)/g, (_: any, chr: string) => chr.toUpperCase());

        switch (attribute.value) {
          case 'true':
            acc[key] = true;
            break;
          case 'false':
            acc[key] = false;
            break;
          case undefined:
            acc[key] = true;
            break;
          default:
            acc[key] = attribute.value;
        }
      }
      return acc;
    },
    initialObj,
  );
  return options as SimpleBarOptions;
};

export function addClasses(el: HTMLElement | null, classes: string) {
  if (!el) return;
  el.classList.add(...classes.split(' '));
}

export function removeClasses(el: HTMLElement | null, classes: string) {
  if (!el) return;
  classes.split(' ').forEach(className => {
    el.classList.remove(className);
  });
}

export function classNamesToQuery(classNames: string) {
  return `.${classNames.split(' ').join('.')}`;
}
