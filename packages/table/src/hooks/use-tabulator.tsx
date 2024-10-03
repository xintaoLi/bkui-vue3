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
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { computed, watch } from 'vue';
import { TablePropTypes } from '../props';

export default (props: TablePropTypes) => {
  let instance: Tabulator = null;

  let isTableBuilt = false;
  const createIntance = (target, options) => {
    instance = new Tabulator(target, options);
    instance.on('tableBuilt', function () {
      isTableBuilt = true;
      instance.setData(props.data);
    });

    return instance;
  };

  const setData = data => {
    // if (instance.options.renderHorizontal === 'virtual' || instance.options.renderVertical === 'virtual') {
    //   instance.clearData();
    //   instance.setData(data ?? []).then(() => {
    //     setTimeout(() => instance.redraw(), 0);
    //   });

    //   return;
    // }

    instance.clearData();
    instance.setData(data ?? []).then(() => {
      setTimeout(() => instance.redraw(), 0);
    });

    // instance?.replaceData(data ?? []);
  };

  const getInstance = () => instance;
  const dataTree = computed(() => props.columns.some(col => col.type === 'expand'));
  const updateTreeData = () => {
    (props.data ?? []).forEach(row => {
      if (dataTree.value && !row.children) {
        Object.assign(row, { children: [{ _is_tree_node: true }] });
      }
    });
  };

  updateTreeData();

  watch(
    () => props.data,
    () => {
      updateTreeData();
      if (!instance?.options.reactiveData && isTableBuilt) {
        console.log('setData ---')
        setData(props.data);
      }
    },
    { deep: true },
  );

  return { createIntance, setData, getInstance };
};
