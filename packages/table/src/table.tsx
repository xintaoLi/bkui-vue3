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

import { isElement } from 'lodash';
import { computed, defineComponent, getCurrentInstance, provide, ref, SetupContext, watch } from 'vue';

import { PROVIDE_KEY_INIT_COL } from './const';
import { EMIT_EVENT_TYPES } from './events';
import useColumnTemplate from './hooks/use-column-template';
import useColumns from './hooks/use-columns';
import useLayout from './hooks/use-layout';
import usePagination from './hooks/use-pagination';
import useRender from './hooks/use-render';
import useRows from './hooks/use-rows';
import useSettings from './hooks/use-settings';
import useObserverResize from './plugins/use-observer-resize';
import { tableProps } from './props';

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Table',
  props: tableProps,
  emits: EMIT_EVENT_TYPES,
  setup(props, ctx: SetupContext) {
    const columns = useColumns(props, ctx);
    const rows = useRows(props);
    const pagination = usePagination(props);
    const settings = useSettings(props);
    const { renderColumns, renderTBody, renderTFoot } = useRender({ props, ctx, columns, rows, pagination, settings }); // renderTBody

    const { resolveColumns } = useColumnTemplate();

    const instance = getCurrentInstance();
    const initTableColumns = () => {
      columns.debounceUpdateColumns(resolveColumns(instance));
    };

    provide(PROVIDE_KEY_INIT_COL, initTableColumns);

    const { renderContainer, renderBody, renderHeader, renderFooter, setBodyHeight, setFootHeight, refRoot } =
      useLayout(props, ctx);

    const isResizeBodyHeight = ref(false);

    useObserverResize(refRoot, () => {
      if ((props.height === '100%' || props.virtualEnabled) && isElement(refRoot.value)) {
        if (isResizeBodyHeight.value) {
          setTimeout(() => {
            isResizeBodyHeight.value = false;
          });
          return;
        }
        const tableHeight = refRoot.value.offsetHeight;
        const bodyHeight = tableHeight - columns.headHeight.value - footHeight.value;
        isResizeBodyHeight.value = true;
        setBodyHeight(bodyHeight);
      }
    });

    /**
     * table 渲染行
     */
    const getRenderRowList = () => {
      if (!pagination.isShowPagination.value || props.remotePagination) {
        return rows.tableRowList.value;
      }

      const startIndex = (pagination.options.current - 1) * pagination.options.limit;
      const endIndex = startIndex + pagination.options.limit;

      return rows.tableRowList.value.slice(startIndex, endIndex);
    };

    const footHeight = computed(() => {
      return pagination.isShowPagination.value ? props.paginationHeight : 0;
    });

    const setTableFootHeight = () => {
      setFootHeight(footHeight.value);
    };

    watch(
      () => [pagination.isShowPagination.value],
      () => {
        setTableFootHeight();
      },
      { immediate: true },
    );

    watch(
      () => [pagination.options.count, pagination.options.limit, pagination.options.current, props.data],
      () => {
        rows.setPageRowList(getRenderRowList());
      },
      { immediate: true },
    );

    return () =>
      renderContainer([
        renderHeader(renderColumns()),
        renderBody(rows.pageRowList, renderTBody),
        renderFooter(renderTFoot()),
      ]);
  },
});
