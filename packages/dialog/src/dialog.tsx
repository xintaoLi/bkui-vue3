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

import { computed, defineComponent, reactive, ref } from 'vue';

import Button from '@bkui-vue/button';
import { useLocale, usePrefix } from '@bkui-vue/config-provider';
import { Error } from '@bkui-vue/icon';
import Modal from '@bkui-vue/modal';

import props from './props';

export default defineComponent({
  name: 'Dialog',
  props,
  emits: {
    closed: () => true,
    shown: () => true,
    hidden: () => true,
    'update:isShow': (value: boolean) => value !== undefined,
    confirm: () => true,
    prev: () => true,
    next: () => true,
  },
  setup(props, { emit }) {
    const t = useLocale('dialog');

    const { resolveClassName } = usePrefix();

    const isMoveing = ref(false);

    const data = reactive({
      positionX: 0,
      positionY: 0,
      moveStyle: {
        top: '50%',
        left: '50%',
      },
    });

    const localConfirmText = computed(() => {
      if (props.confirmText === undefined) {
        return t.value.ok;
      }
      return props.confirmText;
    });
    const localCancelText = computed(() => {
      if (props.cancelText === undefined) {
        return t.value.cancel;
      }
      return props.cancelText;
    });
    const localPrevText = computed(() => {
      if (props.prevText === undefined) {
        return t.value.prev;
      }
      return props.prevText;
    });
    const localNextText = computed(() => {
      if (props.nextText === undefined) {
        return t.value.next;
      }
      return props.nextText;
    });

    // 关闭弹框
    const handleClose = async () => {
      let shouldClose = true;
      if (typeof props.beforeClose === 'function') {
        shouldClose = await props.beforeClose();
      }

      if (shouldClose) {
        emit('update:isShow', false);
        emit('closed');
      }
    };

    const handleConfirm = () => {
      emit('update:isShow', false);
      emit('confirm');
    };

    const handleShown = () => {
      emit('shown');
    };

    const handleHidden = () => {
      emit('hidden');
    };

    // 上一步
    const handlePrevStep = () => {
      emit('prev');
    };
    // 下一步
    const handleNextStep = () => {
      emit('next');
    };

    // 拖拽事件
    const handleMousedown = e => {
      if (props.fullscreen) {
        return false;
      }
      if (!props.draggable) {
        return false;
      }
      const odiv = e.target;
      const parentHeight = e.currentTarget.parentNode.parentNode.offsetHeight;
      const parentWidth = e.currentTarget.parentNode.parentNode.offsetWidth;
      let disX;
      let disY;
      if (data.positionX !== 0 && data.positionY !== 0) {
        disX = e.clientX - data.positionX;
        disY = e.clientY - data.positionY;
      } else {
        disX = e.clientX - odiv.offsetLeft;
        disY = e.clientY - odiv.offsetTop;
      }
      isMoveing.value = true;

      document.onmousemove = e => {
        const boxLeft = window.innerWidth - parentWidth;
        const boxTop = window.innerHeight - parentHeight;
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        if (boxLeft / 2 - left <= 0) {
          left = boxLeft / 2;
        } else if (boxLeft / 2 + left <= 0) {
          left = -boxLeft / 2;
        }
        if (boxTop / 2 - top <= 0) {
          top = boxTop / 2;
        } else if (boxTop / 2 + top <= 0) {
          top = -boxTop / 2;
        }
        data.positionX = left;
        data.positionY = top;
        data.moveStyle.left = `calc(50% + ${left}px)`;
        data.moveStyle.top = `calc(50% + ${top}px)`;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        isMoveing.value = false;
      };
    };

    return {
      data,
      localConfirmText,
      localCancelText,
      localPrevText,
      localNextText,
      resolveClassName,
      handleHidden,
      handleShown,
      handleClose,
      handleConfirm,
      handleMousedown,
      handlePrevStep,
      handleNextStep,
    };
  },

  render() {
    const dialogSlot = {
      header: () => [
        <div
          class={{
            [this.resolveClassName('dialog-tool')]: true,
            'is-draggable': !this.fullscreen && this.draggable,
            'is-dragging': this.draggable,
          }}
          onMousedown={this.handleMousedown}
        >
          {this.$slots.tools?.()}
        </div>,
        <div class={this.resolveClassName('dialog-header')}>
          <span
            class={this.resolveClassName('dialog-title')}
            style={`text-align: ${this.headerAlign}`}
          >
            {this.$slots.header?.() ?? this.title}
          </span>
        </div>,
      ],
      default: () => <div class={this.resolveClassName('dialog-content')}>{this.$slots.default()}</div>,
      footer: () => {
        if (this.$slots.footer) {
          return (
            <div
              class={this.resolveClassName('dialog-footer')}
              style={`text-align: ${this.footerAlign}`}
            >
              {this.$slots.footer()}
            </div>
          );
        }

        if (!['process', 'operation', 'confirm'].includes(this.dialogType)) {
          return null;
        }
        const renderFooterAction = () => {
          if (this.dialogType === 'operation') {
            return (
              <>
                <Button
                  onClick={this.handleConfirm}
                  theme={this.confirmButtonTheme}
                  loading={this.isLoading}
                >
                  {this.localConfirmText}
                </Button>
                <Button
                  class={this.resolveClassName('dialog-cancel')}
                  onClick={this.handleClose}
                  disabled={this.isLoading}
                >
                  {this.localCancelText}
                </Button>
              </>
            );
          }
          if (this.dialogType === 'confirm') {
            return (
              <Button
                onClick={this.handleConfirm}
                theme={this.confirmButtonTheme}
                loading={this.isLoading}
              >
                {this.localConfirmText}
              </Button>
            );
          }
          if (this.dialogType === 'process') {
            const renderFirstStepBtn = () => {
              if (this.current === 1) {
                return (
                  <Button
                    class={this.resolveClassName('dialog-perv')}
                    onClick={this.handlePrevStep}
                  >
                    {this.localPrevText}
                  </Button>
                );
              }
            };
            const renderStepBtn = () => {
              if (this.current === this.totalStep) {
                return (
                  <>
                    <Button
                      class={this.resolveClassName('dialog-next')}
                      onClick={this.handleNextStep}
                    >
                      {this.localNextText}
                    </Button>
                    <Button
                      onClick={this.handleConfirm}
                      theme={this.confirmButtonTheme}
                      loading={this.isLoading}
                    >
                      {this.localConfirmText}
                    </Button>
                  </>
                );
              }
            };

            return (
              <>
                {renderFirstStepBtn()}
                {renderStepBtn()}
                <Button
                  class={this.resolveClassName('dialog-cancel')}
                  onClick={this.handleClose}
                  disabled={this.isLoading}
                >
                  {this.localCancelText}
                </Button>
              </>
            );
          }
        };
        return (
          <div
            class={this.resolveClassName('dialog-footer')}
            style={`text-align: ${this.footerAlign}`}
          >
            {renderFooterAction()}
          </div>
        );
      },
      close: () => <Error />,
    };

    return (
      <Modal
        class={{
          [this.resolveClassName('dialog')]: true,
          [this.resolveClassName('dialog-wrapper')]: true,
          'is-fullscreen': this.fullscreen,
        }}
        isShow={this.isShow}
        fullscreen={this.fullscreen}
        width={this.fullscreen ? 'auto' : this.width}
        animateType='fadein'
        beforeClose={this.beforeClose}
        closeIcon={this.closeIcon}
        escClose={this.escClose}
        quickClose={this.quickClose}
        showMask={this.showMask}
        transfer={this.transfer}
        left={this.fullscreen ? '0px' : this.data.moveStyle.left}
        top={this.fullscreen ? '0px' : this.data.moveStyle.top}
        zIndex={this.zIndex}
        onClose={this.handleClose}
        onHidden={this.handleHidden}
        onShown={this.handleShown}
      >
        {dialogSlot}
      </Modal>
    );
  },
});
