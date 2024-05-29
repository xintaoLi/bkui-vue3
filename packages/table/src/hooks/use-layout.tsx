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
import { computed, Ref, ref } from 'vue';

import { usePrefix } from '@bkui-vue/config-provider';
import { classes } from '@bkui-vue/shared';
import VirtualRender from '@bkui-vue/virtual-render';

import { DEF_COLOR, IHeadColor } from '../const';
import { TablePropTypes } from '../props';
import { resolveHeadConfig, resolveNumberOrStringToPix, resolvePropBorderToClassStr, resolvePropVal } from '../utils';

export default (props: TablePropTypes, ctx) => {
  const refRoot = ref(null);
  const refHead = ref(null);
  const refBody = ref(null);
  const refFooter = ref(null);

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

  const config = resolveHeadConfig(props);
  const headStyle = computed(() => ({
    '--row-height': `${resolvePropVal(config, 'height', ['thead'])}px`,
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

  const renderContainer = childrend => {
    return (
      <div
        ref={refRoot}
        class={tableClass.value}
        style={tableStyle.value}
      >
        {childrend}
        <div style={columnGhostStyle}>{ctx.slots.default?.()}</div>
      </div>
    );
  };
  const renderHeader = (childrend?) => {
    return (
      <div
        ref={refHead}
        class={headClass.value}
        style={headStyle.value}
      >
        {childrend}
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

  const bodyHeight: Ref<string | number> = ref('auto');
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

  const renderBody = (list, childrend?) => {
    return (
      <VirtualRender
        ref={refBody}
        class={bodyClass}
        enabled={props.virtualEnabled}
        throttleDelay={120}
        scrollEvent={true}
        rowKey={props.rowKey}
        height={bodyHeight.value}
        list={list}
        scrollbar={{ enabled: true }}
      >
        {{
          beforeContent: () => renderPrepend(),
          default: (scope: any) => childrend?.(scope.data),
          afterSection: () => [
            // <div
            //   class={resizeColumnClass}
            //   style={resizeColumnStyle.value}
            // ></div>,
          ],
        }}
      </VirtualRender>
    );
  };
  const renderFooter = (childrend?) => {
    return (
      <div
        ref={refFooter}
        class={footerClass.value}
        style={footerStyle.value}
      >
        {childrend}
      </div>
    );
  };

  return {
    renderContainer,
    renderHeader,
    renderBody,
    renderFooter,
    setBodyHeight,
    setFootHeight,
    refRoot,
    refHead,
    refBody,
    refFooter,
  };
};
