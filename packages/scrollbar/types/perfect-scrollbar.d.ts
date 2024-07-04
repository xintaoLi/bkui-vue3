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
declare namespace PerfectScrollbar {
  export interface Options {
    handlers?: string[];
    maxScrollbarLength?: number;
    minScrollbarLength?: number;
    scrollingThreshold?: number;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    swipeEasing?: boolean;
    useBothWheelAxes?: boolean;
    wheelPropagation?: boolean;
    wheelSpeed?: number;
  }
}

declare class PerfectScrollbar {
  containerHeight: number;
  containerWidth: number;
  contentHeight: number;
  contentWidth: number;
  element: HTMLElement;
  isAlive: boolean;
  isNegativeScroll: boolean;
  isRtl: boolean;
  isScrollbarXUsingBottom: boolean;
  isScrollbarYUsingBottom: boolean;
  lastScrollLeft: boolean;
  lastScrollTop: boolean;
  negativeScrollAdjustment: number;
  railBorderXWidth: number;
  railBorderYWidth: number;
  railXMarginWidth: number;
  railXRatio: number;
  railXWidth: number;
  railYHeight: number;
  railYMarginHeight: number;
  railYRatio: number;
  scrollbarX: HTMLElement;
  scrollbarXActive: boolean;
  scrollbarXBottom: number;
  scrollbarXLeft: number;
  scrollbarXRail: HTMLElement;
  scrollbarXWidth: number;
  scrollbarY: HTMLElement;
  scrollbarYActive: boolean;
  scrollbarYHeight: number;
  scrollbarYOuterWidth?: number;
  scrollbarYRail: HTMLElement;
  scrollbarYRight: number;
  scrollbarYTop: number;
  settings: PerfectScrollbar.Options;
  reach: { x: 'end' | 'start' | null; y: 'end' | 'start' | null };
  constructor(element: Element | string, options?: PerfectScrollbar.Options);

  update(): void;
  destroy(): void;
}

export default PerfectScrollbar;
