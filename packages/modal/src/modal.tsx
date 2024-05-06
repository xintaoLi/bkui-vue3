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

import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  Transition,
  watch,
} from 'vue';

import { usePrefix } from '@bkui-vue/config-provider';
import { bkZIndexManager } from '@bkui-vue/shared';

import { useContentResize } from './hooks';
import { mask } from './mask';
import { propsMixin } from './props.mixin';

export type ModalProps = Readonly<ExtractPropTypes<typeof propsMixin>>;

export default defineComponent({
  name: 'Modal',
  props: {
    ...propsMixin,
  },
  emits: ['quick-close', 'hidden', 'shown', 'close'],
  setup(props, ctx) {
    const rootRef = ref<HTMLElement>();
    const maskRef = ref<HTMLElement>();
    const resizeTargetRef = ref<HTMLElement>();

    const localShow = ref(props.isShow);
    const zIndex = ref(props.zIndex);
    const initRendered = ref(false);

    const { contentStyles, isContentScroll } = useContentResize(rootRef, resizeTargetRef, props);

    const modalWrapperStyles = computed(() => {
      return {
        zIndex: zIndex.value,
        width: /^\d+\.?\d*$/.test(`${props.width}`) ? `${props.width}px` : props.width,
        left: props.left,
        top: props.top,
      };
    });

    const { resolveClassName } = usePrefix();

    watch(
      () => props.isShow,
      () => {
        if (props.isShow) {
          initRendered.value = true;
          setTimeout(() => {
            zIndex.value = props.zIndex || bkZIndexManager.getModalNextIndex();
            props.showMask && mask.showMask(maskRef.value);
            ctx.emit('shown');
            localShow.value = true;
          });
        } else if (initRendered.value) {
          props.showMask && mask.hideMask(maskRef.value);
          ctx.emit('hidden');
          localShow.value = false;
        }
      },
      {
        immediate: true,
      },
    );

    const handleClose = () => {
      ctx.emit('close');
    };

    const handleClickOutSide = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();

      if (props.quickClose) {
        ctx.emit('quick-close');
        ctx.emit('close');
      }
    };

    // 按 esc 关闭弹框
    const handleEscClose = e => {
      if (props.isShow && props.escClose) {
        if (e.keyCode === 27) {
          handleClose();
        }
      }
    };

    onMounted(() => {
      addEventListener('keydown', handleEscClose);
    });

    onBeforeUnmount(() => {
      removeEventListener('keydown', handleEscClose);
      mask.destroyMask(maskRef.value);
      ctx.emit('hidden');
    });

    return {
      rootRef,
      maskRef,
      localShow,
      initRendered,
      zIndex,
      contentStyles,
      isContentScroll,
      modalWrapperStyles,
      resolveClassName,
      resizeTargetRef,
      handleClose,
      handleClickOutSide,
    };
  },
  render() {
    if (!this.initRendered) {
      return null;
    }
    const renderContent = () => {
      // v-if 模式渲染，如果 isShow 为 false 销毁 DOM
      if (this.renderDirective === 'if' && !this.localShow) {
        return null;
      }
      return (
        <div class={this.resolveClassName('modal-body')}>
          <div class={this.resolveClassName('modal-header')}>{this.$slots.header?.()}</div>
          <div
            class={this.resolveClassName('modal-content')}
            style={this.contentStyles}
          >
            <div style='position: relative; display: inline-block; width: 100%;'>
              {this.$slots.default?.()}
              <div
                ref='resizeTargetRef'
                style='position: absolute; top: 0; bottom: 0;'
              />
            </div>
          </div>
          <div
            class={{
              [this.resolveClassName('modal-footer')]: true,
              'is-fixed': this.isContentScroll,
            }}
          >
            {this.$slots.footer?.()}
          </div>
          {this.closeIcon && (
            <div
              class={this.resolveClassName('modal-close')}
              onClick={this.handleClose}
            >
              {this.$slots.close?.()}
            </div>
          )}
        </div>
      );
    };

    return (
      <Teleport
        to='body'
        disabled={!this.transfer}
      >
        <div
          ref='rootRef'
          {...this.$attrs}
          class={this.resolveClassName('modal')}
        >
          {this.showMask && (
            <Transition name={mask.getMaskCount() > 0 ? 'fadein' : ''}>
              <div
                v-show={this.localShow}
                ref='maskRef'
                class={{
                  [this.resolveClassName('modal-ctx-mask')]: true,
                }}
                style={{
                  zIndex: this.zIndex,
                }}
                onClick={this.handleClickOutSide}
              />
            </Transition>
          )}
          <Transition name={`modal-${this.animateType}`}>
            <div
              v-show={this.localShow}
              class={this.resolveClassName('modal-wrapper')}
              style={this.modalWrapperStyles}
            >
              {renderContent()}
            </div>
          </Transition>
        </div>
      </Teleport>
    );
  },
});
