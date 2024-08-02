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
import { FunctionalComponent } from 'vue';

import BkIcon, { IIconBaseProps } from './icon';
const data = JSON.parse(
  '{"type":"element","name":"svg","attributes":{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 1024 1024","style":"width: 1em; height: 1em; vertical-align: middle;fill: currentColor;overflow: hidden;"},"elements":[{"type":"element","name":"path","attributes":{"d":"M752 512A176 176 0 1 0 928 688 176 176 0 0 0 752 512Zm0 299.2a30.88 30.88 0 1 1 30.88-30.88A30.72 30.72 0 0 1 752 811.2Zm16.96-92.32a17.12 17.12 0 0 1-33.92 0s-13.76-118.72-13.76-123.2a30.88 30.88 0 1 1 61.6 0C782.88 600.16 768.96 718.88 768.96 718.88Z"}},{"type":"element","name":"path","attributes":{"d":"M800 176H480l-44.32 89.44-23.36 89.44-70.24 85.6 30.88-85.6-46.88-89.44L336 240h0v-0.96L359.52 176H160a96 96 0 0 0-96 96V752a96 96 0 0 0 96 96H573.44A238.88 238.88 0 0 1 512 688a243.2 243.2 0 0 1 8.16-61.44L356.8 519.84a46.72 46.72 0 0 0-70.72 2.56L128 656V272a32 32 0 0 1 32-32h118.4L272 283.36l70.08 71.52L327.36 480l108.32-107.36L530.4 240H800a32 32 0 0 1 32 32V461.92A241.92 241.92 0 0 1 896 496V272A96 96 0 0 0 800 176Z"}},{"type":"element","name":"path","attributes":{"d":"M720 400A80 80 0 0 1 640 480 80 80 0 0 1 560 400 80 80 0 0 1 720 400z"}}]}',
);
const imgError: FunctionalComponent<IIconBaseProps> = (props, context) => {
  const p = { ...props, ...context.attrs };
  return (
    <BkIcon
      {...p}
      data={data}
      name='imgError'
    ></BkIcon>
  );
};

imgError.displayName = 'imgError';
imgError.inheritAttrs = false;

export default imgError;
