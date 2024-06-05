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
import { computed, onMounted, reactive, Ref, ref } from 'vue';

import { usePrefix } from '@bkui-vue/config-provider';
import { classes } from '@bkui-vue/shared';
import VirtualRender from '@bkui-vue/virtual-render';
import { debounce } from 'lodash';

import { DEF_COLOR, IHeadColor, LINE_HEIGHT } from '../const';
import { EMIT_EVENTS } from '../events';
import { TablePropTypes } from '../props';
import { resolveHeadConfig, resolveNumberOrStringToPix, resolvePropBorderToClassStr, resolvePropVal } from '../utils';

export default (props: TablePropTypes, ctx) => {
  const refRoot = ref(null);
  const refHead = ref(null);
  const refBody = ref(null);
  const refFooter = ref(null);
  const translateX = ref(0);
  const translateY = ref(0);
  const preBottom = ref(0);
  const dragOffsetX = ref(-1000);
  const offsetRight = ref(0);
  const layout: { bottom?: number } = reactive({});
  const fixedColumns = reactive([]);
  const lineHeight = ref(props.rowHeight ?? LINE_HEIGHT);

  const { resolveClassName } = usePrefix();

  const tableClass = computed(() =>
    classes(
      {
        [resolveClassName('table')]: true,
      },
      resolvePropBorderToClassStr(props.border),
    ),
  );

  const tableStyle = computed(() => ({
    height: resolveNumberOrStringToPix(props.height, '100%'),
  }));

  const headClass = computed(() =>
    classes({
      [resolveClassName('table-head')]: true,
      'has-settings': !!props.settings,
    }),
  );

  const setTranslateX = (val: number) => {
    translateX.value = val;
  };

  const setTranslateY = (val: number) => {
    translateY.value = val;
  };

  const setDragOffsetX = (val: number) => {
    dragOffsetX.value = val;
  };

  const config = resolveHeadConfig(props);

  const headStyle = computed(() => ({
    '--row-height': `${resolvePropVal(config, 'height', ['thead'])}px`,
    '--scroll-head-left': `-${translateX.value}px`,
    '--scroll-left': `${translateX.value}px`,
    '--background-color': DEF_COLOR[props.thead?.color ?? IHeadColor.DEF1],
  }));

  const bodyClass = {
    [resolveClassName('table-body')]: true,
  };

  const footerClass = computed(() =>
    classes({
      [resolveClassName('table-footer')]: true,
      ['is-hidden']: !props.pagination || !props.data.length,
    }),
  );

  const columnGhostStyle = {
    zIndex: -1,
    width: 0,
    height: 0,
    display: 'none' as const,
  };

  const dragOffsetXStyle = {
    position: 'absolute' as const,
    top: 0,
    bottom: 0,
    left: 0,
    width: '1px',
    backgroundColor: '#3785FF',
    transform: 'translateX(-50%)',
  };

  const resizeColumnStyle = computed(() => ({
    ...dragOffsetXStyle,
    transform: `translate3d(${dragOffsetX.value + 3}px, ${translateY.value}px, 0)`,
  }));

  const resizeHeadColStyle = computed(() => ({
    ...dragOffsetXStyle,
    width: '6px',
    transform: `translateX(${dragOffsetX.value}px)`,
  }));

  const renderContainer = childrend => {
    return (
      <div
        ref={refRoot}
        style={tableStyle.value}
        class={tableClass.value}
      >
        {childrend}
        <div style={columnGhostStyle}>{ctx.slots.default?.()}</div>
      </div>
    );
  };
  const renderHeader = (childrend?, settings?) => {
    return (
      <div
        ref={refHead}
        style={headStyle.value}
        class={headClass.value}
      >
        {childrend?.()}
        <div
          style={resizeHeadColStyle.value}
          class='col-resize-drag'
        ></div>
        {settings?.()}
      </div>
    );
  };

  const prependStyle = computed(() => ({
    position: 'sticky' as const,
    top: 0,
    zIndex: 2,
    ...(props.prependStyle || {}),
  }));

  const renderPrepend = () => {
    if (ctx.slots.prepend) {
      return (
        <div
          style={prependStyle.value}
          class='prepend-row'
        >
          {ctx.slots.prepend()}
        </div>
      );
    }

    return null;
  };

  const bodyHeight: Ref<number | string> = ref('auto');
  const setBodyHeight = (height: number | string) => {
    bodyHeight.value = height;
  };

  const footHeight = ref(0);
  const footerStyle = computed(() => ({
    '--footer-height': `${footHeight.value}px`,
  }));
  const setFootHeight = (height: number) => {
    footHeight.value = height;
  };

  const emitScrollBottom = debounce((...args) => {
    ctx.emit(EMIT_EVENTS.SCROLL_BOTTOM, { ...args });
  });

  const setOffsetRight = () => {
    const scrollWidth = refBody.value?.refRoot?.scrollWidth ?? 0;
    const offsetWidth = refBody.value?.refRoot?.offsetWidth ?? 0;
    offsetRight.value = scrollWidth - offsetWidth - translateX?.value ?? 0;
  };

  const setLineHeight = (val: number) => {
    lineHeight.value = val;
  };

  const handleScrollChanged = (args: any[]) => {
    preBottom.value = layout.bottom ?? 0;
    const pagination = args[1];
    const { translateX, translateY, pos = {} } = pagination;
    setTranslateX(translateX);
    setTranslateY(translateY);
    setOffsetRight();
    Object.assign(layout, pos || {});
    const { bottom } = pos;
    if (bottom <= 2 && preBottom.value > bottom) {
      emitScrollBottom({ ...pos, translateX, translateY });
    }
  };

  const resizeColumnClass = {
    column_drag_line: true,
    'offset-x': true,
  };

  const fixedWrapperClass = computed(() => [
    resolveClassName('table-fixed'),
    {
      'shadow-right': offsetRight.value > 0,
      'shadow-left': translateX.value > 0,
    },
  ]);

  const fixedBottomRow = resolveClassName('table-fixed-bottom');

  const fixedWrapperStyle = computed(() => ({
    transform: `translate3d(${translateX.value}px, ${translateY.value}px, 0)`,
  }));

  onMounted(() => {
    setOffsetRight();
  });

  const renderBody = (list, childrend?, fixedRows?, loadingRow?) => {
    return (
      <VirtualRender
        ref={refBody}
        height={bodyHeight.value}
        class={bodyClass}
        enabled={props.virtualEnabled}
        lineHeight={lineHeight.value}
        list={list}
        rowKey={props.rowKey}
        scrollEvent={true}
        scrollbar={{ enabled: props.scrollbar }}
        throttleDelay={120}
        onContentScroll={handleScrollChanged}
      >
        {{
          beforeContent: () => renderPrepend(),
          default: (scope: any) => childrend?.(scope.data),
          afterSection: () => [
            <div
              style={resizeColumnStyle.value}
              class={resizeColumnClass}
            ></div>,
            <div
              style={fixedWrapperStyle.value}
              class={fixedWrapperClass.value}
            >
              {fixedRows?.()}
            </div>,
            <div>{ctx.slots.appendBottom?.()}</div>,
            <div
              style={fixedWrapperStyle.value}
              class={fixedBottomRow}
            >
              {loadingRow?.()}
            </div>,
          ],
        }}
      </VirtualRender>
    );
  };
  const renderFooter = (childrend?) => {
    return (
      <div
        ref={refFooter}
        style={footerStyle.value}
        class={footerClass.value}
      >
        {childrend}
      </div>
    );
  };

  const setFixedColumns = (values: any[]) => {
    fixedColumns.length = 0;
    fixedColumns.push(...values);
  };

  return {
    renderContainer,
    renderHeader,
    renderBody,
    renderFooter,
    setBodyHeight,
    setFootHeight,
    setTranslateX,
    setDragOffsetX,
    setFixedColumns,
    setOffsetRight,
    setLineHeight,
    refRoot,
    refHead,
    refBody,
    refFooter,
  };
};
