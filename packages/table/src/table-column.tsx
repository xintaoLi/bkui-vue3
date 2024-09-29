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
import { isString } from 'lodash';
import { computed, defineComponent, Fragment, getCurrentInstance, h, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'TableColumn',
  setup(_props, { expose }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const colOwner = computed(() => {
      let parent = instance.parent;
      while (parent && !parent.tableId) {
        parent = parent.parent;
      }
      return parent;
    });

    onMounted(() => {
      // console.log('--on mounted', instance)
    })

    expose({
      columnConfig,
      colOwner,
    });

    return;
  },
  render() {
    try {
      const renderDefault = this.$slots.default?.({
        row: {},
        column: {},
        $index: -1,
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if ((childNode.type as { name?: string })?.name === 'TableColumn' || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach(vnode => {
              // No rendering when vnode is dynamic slot or text
              if (
                (vnode as { patchFlag: number })?.patchFlag !== 1024 &&
                !isString((vnode as { children: unknown })?.children)
              ) {
                children.push(vnode);
              }
            });
          }
        }
      }
      const vnode = h('div', children);
      return vnode;
    } catch {
      return h('div', []);
    }
  },
});
