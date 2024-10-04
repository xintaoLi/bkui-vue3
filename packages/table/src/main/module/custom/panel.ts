import {
  defineComponent,
  h,
  inject,
  ref,
  Ref,
  VNode,
  PropType,
  nextTick,
  TransitionGroup,
  createCommentVNode,
} from 'vue';
import { VxeUI } from '../../../ui';
import { formatText } from '../../../ui/utils';
import { addClass, removeClass } from '../../../ui/dom';
import { errLog } from '../../../ui/log';
import XEUtils from '../../../func';

import type {
  VxeTableDefines,
  VxeTablePrivateMethods,
  VxeTableConstructor,
  VxeTableMethods,
  VxeColumnPropTypes,
} from '../../../types';

const { getI18n, getIcon } = VxeUI;

export default defineComponent({
  name: 'TableCustomPanel',
  props: {
    customStore: {
      type: Object as PropType<VxeTableDefines.VxeTableCustomStoreObj>,
      default: () => ({}),
    },
  },
  setup(props) {
    const VxeUIModalComponent = VxeUI.getComponent('VxeModal');
    const VxeUIDrawerComponent = VxeUI.getComponent('VxeDrawer');
    const VxeUIButtonComponent = VxeUI.getComponent('VxeButton');
    const VxeUIInputComponent = VxeUI.getComponent('VxeInput');
    const VxeUITooltipComponent = VxeUI.getComponent('VxeTooltip');
    const VxeUIRadioGroupComponent = VxeUI.getComponent('VxeRadioGroup');

    const $xeTable = inject('$xeTable', {} as VxeTableConstructor & VxeTableMethods & VxeTablePrivateMethods);

    const { reactData } = $xeTable;
    const { computeCustomOpts, computeColumnOpts, computeIsMaxFixedColumn } = $xeTable.getComputeMaps();

    const refElem = ref() as Ref<HTMLDivElement>;
    const bodyElemRef = ref() as Ref<HTMLDivElement>;
    const dragHintElemRef = ref() as Ref<HTMLDivElement>;

    const dragColumnRef = ref<VxeTableDefines.ColumnInfo | null>();

    let prevDropTrEl: any;

    const handleWrapperMouseenterEvent = (evnt: Event) => {
      const { customStore } = props;
      customStore.activeWrapper = true;
      $xeTable.customOpenEvent(evnt);
    };

    const handleWrapperMouseleaveEvent = (evnt: Event) => {
      const { customStore } = props;
      customStore.activeWrapper = false;
      setTimeout(() => {
        if (!customStore.activeBtn && !customStore.activeWrapper) {
          $xeTable.customCloseEvent(evnt);
        }
      }, 300);
    };

    const confirmCustomEvent = ({ $event }) => {
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { allowVisible, allowSort, allowFixed, allowResizable } = customOpts;
      XEUtils.eachTree(customColumnList, (column, index, items, path, parent) => {
        if (parent) {
          // 更新子列信息
          column.fixed = parent.fixed;
        } else {
          if (allowSort) {
            const sortIndex = index + 1;
            column.renderSortNumber = sortIndex;
          }
          if (allowFixed) {
            column.fixed = column.renderFixed;
          }
        }
        if (allowResizable) {
          if (column.renderVisible && (!column.children || column.children.length)) {
            if (column.renderResizeWidth !== column.renderWidth) {
              column.resizeWidth = column.renderResizeWidth;
              column.renderWidth = column.renderResizeWidth;
            }
          }
        }
        if (allowVisible) {
          column.visible = column.renderVisible;
        }
      });
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent('confirm', $event);
      $xeTable.saveCustomStore('confirm');
    };

    const cancelCloseEvent = ({ $event }) => {
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent('close', $event);
    };

    const cancelCustomEvent = ({ $event }) => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const { oldSortMaps, oldFixedMaps, oldVisibleMaps } = customStore;
      const customOpts = computeCustomOpts.value;
      const { allowVisible, allowSort, allowFixed, allowResizable } = customOpts;
      XEUtils.eachTree(
        customColumnList,
        column => {
          const colid = column.getKey();
          const visible = !!oldVisibleMaps[colid];
          const fixed = oldFixedMaps[colid] || '';
          if (allowVisible) {
            column.renderVisible = visible;
            column.visible = visible;
          }
          if (allowFixed) {
            column.renderFixed = fixed;
            column.fixed = fixed;
          }
          if (allowSort) {
            column.renderSortNumber = oldSortMaps[colid] || 0;
          }
          if (allowResizable) {
            column.renderResizeWidth = column.renderWidth;
          }
        },
        { children: 'children' },
      );
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent('cancel', $event);
    };

    const handleResetCustomEvent = (evnt: Event) => {
      $xeTable.resetColumn(true);
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent('reset', evnt);
    };

    const resetCustomEvent = ({ $event }) => {
      if (VxeUI.modal) {
        VxeUI.modal
          .confirm({
            content: getI18n('vxe.custom.cstmConfirmRestore'),
            className: 'bk-table--ignore-clear',
            escClosable: true,
          })
          .then(type => {
            if (type === 'confirm') {
              handleResetCustomEvent($event);
            }
          });
      } else {
        handleResetCustomEvent($event);
      }
    };

    const handleOptionCheck = (column: VxeTableDefines.ColumnInfo) => {
      const { customColumnList } = reactData;
      const matchObj = XEUtils.findTree(customColumnList, item => item === column);
      if (matchObj && matchObj.parent) {
        const { parent } = matchObj;
        if (parent.children && parent.children.length) {
          parent.renderVisible = parent.children.every(column => column.renderVisible);
          parent.halfVisible =
            !parent.renderVisible && parent.children.some(column => column.renderVisible || column.halfVisible);
          handleOptionCheck(parent);
        }
      }
    };

    const changeCheckboxOption = (column: VxeTableDefines.ColumnInfo) => {
      const isChecked = !column.renderVisible;
      const customOpts = computeCustomOpts.value;
      if (customOpts.immediate) {
        XEUtils.eachTree([column], item => {
          item.visible = isChecked;
          item.renderVisible = isChecked;
          item.halfVisible = false;
        });
        $xeTable.handleCustom();
        $xeTable.saveCustomStore('update:visible');
      } else {
        XEUtils.eachTree([column], item => {
          item.renderVisible = isChecked;
          item.halfVisible = false;
        });
      }
      handleOptionCheck(column);
      $xeTable.checkCustomStatus();
    };

    const changeFixedOption = (column: VxeTableDefines.ColumnInfo, colFixed: VxeColumnPropTypes.Fixed) => {
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const customOpts = computeCustomOpts.value;
      if (customOpts.immediate) {
        if (column.renderFixed === colFixed) {
          XEUtils.eachTree([column], col => {
            col.fixed = '';
            col.renderFixed = '';
          });
        } else {
          if (!isMaxFixedColumn || column.renderFixed) {
            XEUtils.eachTree([column], col => {
              col.fixed = colFixed;
              col.renderFixed = colFixed;
            });
          }
        }
        $xeTable.handleCustom();
        $xeTable.saveCustomStore('update:fixed');
      } else {
        if (column.renderFixed === colFixed) {
          XEUtils.eachTree([column], col => {
            col.renderFixed = '';
          });
        } else {
          if (!isMaxFixedColumn || column.renderFixed) {
            XEUtils.eachTree([column], col => {
              col.renderFixed = colFixed;
            });
          }
        }
      }
    };

    const allOptionEvent = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { checkMethod } = customOpts;
      const isAll = !customStore.isAll;
      if (customOpts.immediate) {
        XEUtils.eachTree(customColumnList, column => {
          if (!checkMethod || checkMethod({ column })) {
            column.visible = isAll;
            column.renderVisible = isAll;
            column.halfVisible = false;
          }
        });
        customStore.isAll = isAll;
        $xeTable.handleCustom();
        $xeTable.saveCustomStore('update:visible');
      } else {
        XEUtils.eachTree(customColumnList, column => {
          if (!checkMethod || checkMethod({ column })) {
            column.renderVisible = isAll;
            column.halfVisible = false;
          }
        });
        customStore.isAll = isAll;
      }
      $xeTable.checkCustomStatus();
    };

    const sortMousedownEvent = (evnt: DragEvent) => {
      const btnEl = evnt.currentTarget as HTMLElement;
      const tdEl = btnEl.parentNode as HTMLElement;
      const trEl = tdEl.parentNode as HTMLElement;
      const colid = trEl.getAttribute('colid');
      const column = $xeTable.getColumnById(colid);
      trEl.draggable = true;
      dragColumnRef.value = column;
      addClass(trEl, 'active--drag-origin');
    };

    const sortMouseupEvent = (evnt: DragEvent) => {
      const btnEl = evnt.currentTarget as HTMLElement;
      const tdEl = btnEl.parentNode as HTMLElement;
      const trEl = tdEl.parentNode as HTMLElement;
      const dragHintEl = dragHintElemRef.value;
      trEl.draggable = false;
      dragColumnRef.value = null;
      removeClass(trEl, 'active--drag-origin');
      if (dragHintEl) {
        dragHintEl.style.display = '';
      }
    };

    const sortDragstartEvent = (evnt: DragEvent) => {
      const img = new Image();
      if (evnt.dataTransfer) {
        evnt.dataTransfer.setDragImage(img, 0, 0);
      }
    };

    const sortDragendEvent = (evnt: DragEvent) => {
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const trEl = evnt.currentTarget as HTMLElement;
      const dragHintEl = dragHintElemRef.value;
      if (prevDropTrEl) {
        // 判断是否有拖动
        if (prevDropTrEl !== trEl) {
          const dragOffset = prevDropTrEl.getAttribute('drag-pos');
          const colid = trEl.getAttribute('colid');
          const column = $xeTable.getColumnById(colid);
          if (!column) {
            return;
          }
          const cIndex = XEUtils.findIndexOf(customColumnList, item => item.id === column.id);
          const targetColid = prevDropTrEl.getAttribute('colid');
          const targetColumn = $xeTable.getColumnById(targetColid);
          if (!targetColumn) {
            return;
          }
          // 移出源位置
          customColumnList.splice(cIndex, 1);
          const tcIndex = XEUtils.findIndexOf(customColumnList, item => item.id === targetColumn.id);
          // 插新位置
          customColumnList.splice(tcIndex + (dragOffset === 'bottom' ? 1 : 0), 0, column);
        }
        prevDropTrEl.draggable = false;
        prevDropTrEl.removeAttribute('drag-pos');
        removeClass(prevDropTrEl, 'active--drag-target');
      }
      dragColumnRef.value = null;
      trEl.draggable = false;
      trEl.removeAttribute('drag-pos');
      if (dragHintEl) {
        dragHintEl.style.display = '';
      }
      removeClass(trEl, 'active--drag-target');
      removeClass(trEl, 'active--drag-origin');

      if (customOpts.immediate) {
        XEUtils.eachTree(customColumnList, (column, index, items, path, parent) => {
          if (!parent) {
            const sortIndex = index + 1;
            column.renderSortNumber = sortIndex;
          }
        });
        $xeTable.handleCustom();
        $xeTable.saveCustomStore('update:sort');
      }
    };

    const sortDragoverEvent = (evnt: DragEvent) => {
      const trEl = evnt.currentTarget as HTMLElement;
      if (prevDropTrEl !== trEl) {
        removeClass(prevDropTrEl, 'active--drag-target');
      }
      const colid = trEl.getAttribute('colid');
      const column = $xeTable.getColumnById(colid);
      // 是否移入有效元行
      if (column && column.level === 1) {
        evnt.preventDefault();
        const offsetY = evnt.clientY - trEl.getBoundingClientRect().y;
        const dragOffset = offsetY < trEl.clientHeight / 2 ? 'top' : 'bottom';
        addClass(trEl, 'active--drag-target');
        trEl.setAttribute('drag-pos', dragOffset);
        prevDropTrEl = trEl;
      }
      updateDropHint(evnt);
    };

    const updateDropHint = (evnt: DragEvent) => {
      const dragHintEl = dragHintElemRef.value;
      const bodyEl = bodyElemRef.value;
      if (!bodyEl) {
        return;
      }
      if (dragHintEl) {
        const wrapperEl = bodyEl.parentNode as HTMLElement;
        const wrapperRect = wrapperEl.getBoundingClientRect();
        dragHintEl.style.display = 'block';
        dragHintEl.style.top = `${Math.min(wrapperEl.clientHeight - wrapperEl.scrollTop - dragHintEl.clientHeight, evnt.clientY - wrapperRect.y)}px`;
        dragHintEl.style.left = `${Math.min(wrapperEl.clientWidth - wrapperEl.scrollLeft - dragHintEl.clientWidth - 16, evnt.clientX - wrapperRect.x)}px`;
      }
    };

    const renderSimplePanel = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { maxHeight } = customStore;
      const { checkMethod, visibleMethod, allowVisible, allowSort, allowFixed, trigger, placement } = customOpts;
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const colVNs: VNode[] = [];
      const customWrapperOns: any = {};
      // hover 触发
      if (trigger === 'hover') {
        customWrapperOns.onMouseenter = handleWrapperMouseenterEvent;
        customWrapperOns.onMouseleave = handleWrapperMouseleaveEvent;
      }
      XEUtils.eachTree(customColumnList, (column, index, items, path, parent) => {
        const isVisible = visibleMethod ? visibleMethod({ column }) : true;
        if (isVisible) {
          const isChecked = column.renderVisible;
          const isIndeterminate = column.halfVisible;
          const isColGroup = column.children && column.children.length;
          const colTitle = formatText(column.getTitle(), 1);
          const isDisabled = checkMethod ? !checkMethod({ column }) : false;
          const isHidden = !isChecked;
          colVNs.push(
            h(
              'li',
              {
                key: column.id,
                colid: column.id,
                class: [
                  'bk-table-custom--option',
                  `level--${column.level}`,
                  {
                    'is--group': isColGroup,
                  },
                ],
                onDragstart: sortDragstartEvent,
                onDragend: sortDragendEvent,
                onDragover: sortDragoverEvent,
              },
              [
                allowVisible
                  ? h(
                      'div',
                      {
                        class: [
                          'bk-table-custom--checkbox-option',
                          {
                            'is--checked': isChecked,
                            'is--indeterminate': isIndeterminate,
                            'is--disabled': isDisabled,
                          },
                        ],
                        title: getI18n('vxe.custom.setting.colVisible'),
                        onClick: () => {
                          if (!isDisabled) {
                            changeCheckboxOption(column);
                          }
                        },
                      },
                      [
                        h('span', {
                          class: [
                            'bk-checkbox--icon',
                            isIndeterminate
                              ? getIcon().TABLE_CHECKBOX_INDETERMINATE
                              : isChecked
                                ? getIcon().TABLE_CHECKBOX_CHECKED
                                : getIcon().TABLE_CHECKBOX_UNCHECKED,
                          ],
                        }),
                      ],
                    )
                  : createCommentVNode(),
                allowSort && column.level === 1
                  ? h(
                      'div',
                      {
                        class: 'bk-table-custom--sort-option',
                      },
                      [
                        h(
                          'span',
                          {
                            class: [
                              'bk-table-custom--sort-btn',
                              {
                                'is--disabled': isHidden,
                              },
                            ],
                            title: getI18n('vxe.custom.setting.sortHelpTip'),
                            ...(isHidden
                              ? {}
                              : {
                                  onMousedown: sortMousedownEvent,
                                  onMouseup: sortMouseupEvent,
                                }),
                          },
                          [
                            h('i', {
                              class: getIcon().TABLE_CUSTOM_SORT,
                            }),
                          ],
                        ),
                      ],
                    )
                  : createCommentVNode(),
                column.type === 'html'
                  ? h('div', {
                      key: '1',
                      class: 'bk-table-custom--checkbox-label',
                      innerHTML: colTitle,
                    })
                  : h(
                      'div',
                      {
                        key: '0',
                        class: 'bk-table-custom--checkbox-label',
                      },
                      colTitle,
                    ),
                !parent && allowFixed
                  ? h(
                      'div',
                      {
                        class: 'bk-table-custom--fixed-option',
                      },
                      [
                        VxeUIButtonComponent
                          ? h(VxeUIButtonComponent, {
                              mode: 'text',
                              icon:
                                column.renderFixed === 'left'
                                  ? getIcon().TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE
                                  : getIcon().TOOLBAR_TOOLS_FIXED_LEFT,
                              status: column.renderFixed === 'left' ? 'primary' : '',
                              disabled: isHidden || (isMaxFixedColumn && !column.renderFixed),
                              title: getI18n(
                                column.renderFixed === 'left' ? 'vxe.toolbar.cancelFixed' : 'vxe.toolbar.fixedLeft',
                              ),
                              onClick: () => {
                                changeFixedOption(column, 'left');
                              },
                            })
                          : createCommentVNode(),
                        VxeUIButtonComponent
                          ? h(VxeUIButtonComponent, {
                              mode: 'text',
                              icon:
                                column.renderFixed === 'right'
                                  ? getIcon().TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE
                                  : getIcon().TOOLBAR_TOOLS_FIXED_RIGHT,
                              status: column.renderFixed === 'right' ? 'primary' : '',
                              disabled: isHidden || (isMaxFixedColumn && !column.renderFixed),
                              title: getI18n(
                                column.renderFixed === 'right' ? 'vxe.toolbar.cancelFixed' : 'vxe.toolbar.fixedRight',
                              ),
                              onClick: () => {
                                changeFixedOption(column, 'right');
                              },
                            })
                          : createCommentVNode(),
                      ],
                    )
                  : createCommentVNode(),
              ],
            ),
          );
        }
      });
      const isAllChecked = customStore.isAll;
      const isAllIndeterminate = customStore.isIndeterminate;
      const dragColumn = dragColumnRef.value;
      return h(
        'div',
        {
          ref: refElem,
          key: 'simple',
          class: [
            'bk-table-custom-wrapper',
            `placement--${placement}`,
            {
              'is--active': customStore.visible,
            },
          ],
          style:
            maxHeight && !['left', 'right'].includes(placement as string)
              ? {
                  maxHeight: `${maxHeight}px`,
                }
              : {},
        },
        customStore.visible
          ? [
              h(
                'ul',
                {
                  class: 'bk-table-custom--header',
                },
                [
                  h(
                    'li',
                    {
                      class: 'bk-table-custom--option',
                    },
                    [
                      allowVisible
                        ? h(
                            'div',
                            {
                              class: [
                                'bk-table-custom--checkbox-option',
                                {
                                  'is--checked': isAllChecked,
                                  'is--indeterminate': isAllIndeterminate,
                                },
                              ],
                              title: getI18n('vxe.table.allTitle'),
                              onClick: allOptionEvent,
                            },
                            [
                              h('span', {
                                class: [
                                  'bk-checkbox--icon',
                                  isAllIndeterminate
                                    ? getIcon().TABLE_CHECKBOX_INDETERMINATE
                                    : isAllChecked
                                      ? getIcon().TABLE_CHECKBOX_CHECKED
                                      : getIcon().TABLE_CHECKBOX_UNCHECKED,
                                ],
                              }),
                              h(
                                'span',
                                {
                                  class: 'bk-checkbox--label',
                                },
                                getI18n('vxe.toolbar.customAll'),
                              ),
                            ],
                          )
                        : h(
                            'span',
                            {
                              class: 'bk-checkbox--label',
                            },
                            getI18n('vxe.table.customTitle'),
                          ),
                    ],
                  ),
                ],
              ),
              h(
                'div',
                {
                  ref: bodyElemRef,
                  class: 'bk-table-custom--list-wrapper',
                },
                [
                  h(
                    TransitionGroup,
                    {
                      class: 'bk-table-custom--body',
                      name: 'bk-table-custom--list',
                      tag: 'ul',
                      ...customWrapperOns,
                    },
                    {
                      default: () => colVNs,
                    },
                  ),
                  h(
                    'div',
                    {
                      ref: dragHintElemRef,
                      class: 'bk-table-custom-popup--drag-hint',
                    },
                    getI18n('vxe.custom.cstmDragTarget', [
                      dragColumn && dragColumn.type !== 'html' ? dragColumn.getTitle() : '',
                    ]),
                  ),
                ],
              ),
              customOpts.showFooter
                ? h(
                    'div',
                    {
                      class: 'bk-table-custom--footer',
                    },
                    [
                      VxeUIButtonComponent
                        ? h(VxeUIButtonComponent, {
                            mode: 'text',
                            content: customOpts.resetButtonText || getI18n('vxe.table.customRestore'),
                            onClick: resetCustomEvent,
                          })
                        : createCommentVNode(),
                      customOpts.immediate
                        ? VxeUIButtonComponent
                          ? h(VxeUIButtonComponent, {
                              mode: 'text',
                              content: customOpts.closeButtonText || getI18n('vxe.table.customClose'),
                              onClick: cancelCloseEvent,
                            })
                          : createCommentVNode()
                        : VxeUIButtonComponent
                          ? h(VxeUIButtonComponent, {
                              mode: 'text',
                              content: customOpts.cancelButtonText || getI18n('vxe.table.customCancel'),
                              onClick: cancelCustomEvent,
                            })
                          : createCommentVNode(),
                      customOpts.immediate
                        ? createCommentVNode()
                        : VxeUIButtonComponent
                          ? h(VxeUIButtonComponent, {
                              mode: 'text',
                              status: 'primary',
                              content: customOpts.confirmButtonText || getI18n('vxe.table.customConfirm'),
                              onClick: confirmCustomEvent,
                            })
                          : createCommentVNode(),
                    ],
                  )
                : null,
            ]
          : [],
      );
    };

    const renderPopupPanel = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const {
        modalOptions,
        drawerOptions,
        allowVisible,
        allowSort,
        allowFixed,
        allowResizable,
        checkMethod,
        visibleMethod,
      } = customOpts;
      const columnOpts = computeColumnOpts.value;
      const { maxFixedSize } = columnOpts;
      const { mode } = customOpts;
      const modalOpts = Object.assign({}, modalOptions);
      const drawerOpts = Object.assign({}, drawerOptions);
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const trVNs: VNode[] = [];
      XEUtils.eachTree(customColumnList, (column, index, items, path, parent) => {
        const isVisible = visibleMethod ? visibleMethod({ column }) : true;
        if (isVisible) {
          const isChecked = column.renderVisible;
          const isIndeterminate = column.halfVisible;
          const colTitle = formatText(column.getTitle(), 1);
          const isColGroup = column.children && column.children.length;
          const isDisabled = checkMethod ? !checkMethod({ column }) : false;
          const isHidden = !isChecked;
          trVNs.push(
            h(
              'tr',
              {
                key: column.id,
                colid: column.id,
                class: [
                  `bk-table-custom-popup--row level--${column.level}`,
                  {
                    'is--group': isColGroup,
                  },
                ],
                onDragstart: sortDragstartEvent,
                onDragend: sortDragendEvent,
                onDragover: sortDragoverEvent,
              },
              [
                allowVisible
                  ? h(
                      'td',
                      {
                        class: 'bk-table-custom-popup--column-item col--visible',
                      },
                      [
                        h(
                          'div',
                          {
                            class: [
                              'bk-table-custom--checkbox-option',
                              {
                                'is--checked': isChecked,
                                'is--indeterminate': isIndeterminate,
                                'is--disabled': isDisabled,
                              },
                            ],
                            title: getI18n('vxe.custom.setting.colVisible'),
                            onClick: () => {
                              if (!isDisabled) {
                                changeCheckboxOption(column);
                              }
                            },
                          },
                          [
                            h('span', {
                              class: [
                                'bk-checkbox--icon',
                                isIndeterminate
                                  ? getIcon().TABLE_CHECKBOX_INDETERMINATE
                                  : isChecked
                                    ? getIcon().TABLE_CHECKBOX_CHECKED
                                    : getIcon().TABLE_CHECKBOX_UNCHECKED,
                              ],
                            }),
                          ],
                        ),
                      ],
                    )
                  : createCommentVNode(),
                allowSort
                  ? h(
                      'td',
                      {
                        class: 'bk-table-custom-popup--column-item col--sort',
                      },
                      [
                        column.level === 1
                          ? h(
                              'span',
                              {
                                class: [
                                  'bk-table-custom-popup--column-sort-btn',
                                  {
                                    'is--disabled': isHidden,
                                  },
                                ],
                                title: getI18n('vxe.custom.setting.sortHelpTip'),
                                ...(isHidden
                                  ? {}
                                  : {
                                      onMousedown: sortMousedownEvent,
                                      onMouseup: sortMouseupEvent,
                                    }),
                              },
                              [
                                h('i', {
                                  class: getIcon().TABLE_CUSTOM_SORT,
                                }),
                              ],
                            )
                          : h('span', '-'),
                      ],
                    )
                  : createCommentVNode(),
                h(
                  'td',
                  {
                    class: 'bk-table-custom-popup--column-item col--name',
                  },
                  [
                    column.type === 'html'
                      ? h('div', {
                          key: '1',
                          class: 'bk-table-custom-popup--name',
                          innerHTML: colTitle,
                        })
                      : h(
                          'div',
                          {
                            key: '0',
                            class: 'bk-table-custom-popup--name',
                            title: colTitle,
                          },
                          colTitle,
                        ),
                  ],
                ),
                allowResizable
                  ? h(
                      'td',
                      {
                        class: 'bk-table-custom-popup--column-item col--resizable',
                      },
                      [
                        column.children && column.children.length
                          ? h('span', '-')
                          : VxeUIInputComponent
                            ? h(VxeUIInputComponent, {
                                type: 'integer',
                                disabled: isHidden,
                                modelValue: column.renderResizeWidth,
                                'onUpdate:modelValue'(value: any) {
                                  column.renderResizeWidth = Math.max(0, Number(value));
                                },
                              })
                            : createCommentVNode(),
                      ],
                    )
                  : createCommentVNode(),
                allowFixed
                  ? h(
                      'td',
                      {
                        class: 'bk-table-custom-popup--column-item col--fixed',
                      },
                      [
                        parent
                          ? h('span', '-')
                          : VxeUIRadioGroupComponent
                            ? h(VxeUIRadioGroupComponent, {
                                modelValue: column.renderFixed || '',
                                type: 'button',
                                size: 'mini',
                                disabled: isHidden,
                                options: [
                                  {
                                    label: getI18n('vxe.custom.setting.fixedLeft'),
                                    value: 'left',
                                    disabled: isHidden || isMaxFixedColumn,
                                  },
                                  { label: getI18n('vxe.custom.setting.fixedUnset'), value: '', disabled: isHidden },
                                  {
                                    label: getI18n('vxe.custom.setting.fixedRight'),
                                    value: 'right',
                                    disabled: isHidden || isMaxFixedColumn,
                                  },
                                ],
                                'onUpdate:modelValue'(value: any) {
                                  column.renderFixed = value;
                                },
                              })
                            : createCommentVNode(),
                      ],
                    )
                  : createCommentVNode(),
              ],
            ),
          );
        }
      });
      const isAllChecked = customStore.isAll;
      const isAllIndeterminate = customStore.isIndeterminate;
      const dragColumn = dragColumnRef.value;
      const scopedSlots = {
        default: () => {
          return h(
            'div',
            {
              ref: bodyElemRef,
              class: 'bk-table-custom-popup--body',
            },
            [
              h(
                'div',
                {
                  class: 'bk-table-custom-popup--table-wrapper',
                },
                [
                  h('table', {}, [
                    h('colgroup', {}, [
                      allowVisible
                        ? h('col', {
                            style: {
                              width: '80px',
                            },
                          })
                        : createCommentVNode(),
                      allowSort
                        ? h('col', {
                            style: {
                              width: '80px',
                            },
                          })
                        : createCommentVNode(),
                      h('col', {
                        style: {
                          minWidth: '120px',
                        },
                      }),
                      allowResizable
                        ? h('col', {
                            style: {
                              width: '140px',
                            },
                          })
                        : createCommentVNode(),
                      allowFixed
                        ? h('col', {
                            style: {
                              width: '200px',
                            },
                          })
                        : createCommentVNode(),
                    ]),
                    h('thead', {}, [
                      h('tr', {}, [
                        allowVisible
                          ? h('th', {}, [
                              h(
                                'div',
                                {
                                  class: [
                                    'bk-table-custom--checkbox-option',
                                    {
                                      'is--checked': isAllChecked,
                                      'is--indeterminate': isAllIndeterminate,
                                    },
                                  ],
                                  title: getI18n('vxe.table.allTitle'),
                                  onClick: allOptionEvent,
                                },
                                [
                                  h('span', {
                                    class: [
                                      'bk-checkbox--icon',
                                      isAllIndeterminate
                                        ? getIcon().TABLE_CHECKBOX_INDETERMINATE
                                        : isAllChecked
                                          ? getIcon().TABLE_CHECKBOX_CHECKED
                                          : getIcon().TABLE_CHECKBOX_UNCHECKED,
                                    ],
                                  }),
                                  h(
                                    'span',
                                    {
                                      class: 'bk-checkbox--label',
                                    },
                                    getI18n('vxe.toolbar.customAll'),
                                  ),
                                ],
                              ),
                            ])
                          : createCommentVNode(),
                        allowSort
                          ? h('th', {}, [
                              h(
                                'span',
                                {
                                  class: 'bk-table-custom-popup--table-sort-help-title',
                                },
                                getI18n('vxe.custom.setting.colSort'),
                              ),
                              VxeUITooltipComponent
                                ? h(
                                    VxeUITooltipComponent,
                                    {
                                      enterable: true,
                                      content: getI18n('vxe.custom.setting.sortHelpTip'),
                                      popupClassName: 'bk-table--ignore-clear',
                                    },
                                    {
                                      default: () => {
                                        return h('i', {
                                          class:
                                            'bk-table-custom-popup--table-sort-help-icon bk-icon-question-circle-fill',
                                        });
                                      },
                                    },
                                  )
                                : createCommentVNode(),
                            ])
                          : createCommentVNode(),
                        h('th', {}, getI18n('vxe.custom.setting.colTitle')),
                        allowResizable ? h('th', {}, getI18n('vxe.custom.setting.colResizable')) : createCommentVNode(),
                        allowFixed
                          ? h(
                              'th',
                              {},
                              getI18n(`vxe.custom.setting.${maxFixedSize ? 'colFixedMax' : 'colFixed'}`, [
                                maxFixedSize,
                              ]),
                            )
                          : createCommentVNode(),
                      ]),
                    ]),
                    h(
                      TransitionGroup,
                      {
                        class: 'bk-table-custom--body',
                        tag: 'tbody',
                        name: 'bk-table-custom--list',
                      },
                      {
                        default: () => trVNs,
                      },
                    ),
                  ]),
                ],
              ),
              h(
                'div',
                {
                  ref: dragHintElemRef,
                  class: 'bk-table-custom-popup--drag-hint',
                },
                getI18n('vxe.custom.cstmDragTarget', [dragColumn ? dragColumn.getTitle() : '']),
              ),
            ],
          );
        },
        footer: () => {
          return h(
            'div',
            {
              class: 'bk-table-custom-popup--footer',
            },
            [
              VxeUIButtonComponent
                ? h(VxeUIButtonComponent, {
                    content: customOpts.resetButtonText || getI18n('vxe.custom.cstmRestore'),
                    onClick: resetCustomEvent,
                  })
                : createCommentVNode(),
              VxeUIButtonComponent
                ? h(VxeUIButtonComponent, {
                    content: customOpts.resetButtonText || getI18n('vxe.custom.cstmCancel'),
                    onClick: cancelCustomEvent,
                  })
                : createCommentVNode(),
              VxeUIButtonComponent
                ? h(VxeUIButtonComponent, {
                    status: 'primary',
                    content: customOpts.confirmButtonText || getI18n('vxe.custom.cstmConfirm'),
                    onClick: confirmCustomEvent,
                  })
                : createCommentVNode(),
            ],
          );
        },
      };
      if (mode === 'drawer') {
        return VxeUIDrawerComponent
          ? h(
              VxeUIDrawerComponent,
              {
                key: 'drawer',
                className: [
                  'bk-table-custom-drawer-wrapper',
                  'bk-table--ignore-clear',
                  drawerOpts.className || '',
                ].join(' '),
                modelValue: customStore.visible,
                title: drawerOpts.title || getI18n('vxe.custom.cstmTitle'),
                width: drawerOpts.width || Math.min(880, document.documentElement.clientWidth),
                position: drawerOpts.position,
                escClosable: !!drawerOpts.escClosable,
                destroyOnClose: true,
                showFooter: true,
                'onUpdate:modelValue'(value: any) {
                  customStore.visible = value;
                },
              },
              scopedSlots,
            )
          : createCommentVNode();
      }
      return VxeUIModalComponent
        ? h(
            VxeUIModalComponent,
            {
              key: 'modal',
              className: ['bk-table-custom-modal-wrapper', 'bk-table--ignore-clear', modalOpts.className || ''].join(
                ' ',
              ),
              modelValue: customStore.visible,
              title: modalOpts.title || getI18n('vxe.custom.cstmTitle'),
              width: modalOpts.width || Math.min(880, document.documentElement.clientWidth),
              minWidth: modalOpts.minWidth || 700,
              height: modalOpts.height || Math.min(680, document.documentElement.clientHeight),
              minHeight: modalOpts.minHeight || 400,
              showZoom: modalOpts.showZoom,
              showMaximize: modalOpts.showMaximize,
              showMinimize: modalOpts.showMinimize,
              mask: modalOpts.mask,
              lockView: modalOpts.lockView,
              resize: modalOpts.resize,
              escClosable: !!modalOpts.escClosable,
              destroyOnClose: true,
              showFooter: true,
              'onUpdate:modelValue'(value: any) {
                customStore.visible = value;
              },
            },
            scopedSlots,
          )
        : createCommentVNode();
    };

    const renderVN = () => {
      const customOpts = computeCustomOpts.value;
      if (['modal', 'drawer', 'popup'].includes(`${customOpts.mode}`)) {
        return renderPopupPanel();
      }
      return renderSimplePanel();
    };

    if (process.env.VUE_APP_VXE_ENV === 'development') {
      nextTick(() => {
        const customOpts = computeCustomOpts.value;
        const { mode } = customOpts;
        if (!VxeUIModalComponent) {
          errLog('vxe.error.reqComp', ['bk-modal']);
        }
        if (!VxeUIDrawerComponent && mode === 'drawer') {
          errLog('vxe.error.reqComp', ['bk-drawer']);
        }
        if (!VxeUIButtonComponent) {
          errLog('vxe.error.reqComp', ['bk-button']);
        }
        if (!VxeUIInputComponent) {
          errLog('vxe.error.reqComp', ['bk-input']);
        }
        if (!VxeUITooltipComponent) {
          errLog('vxe.error.reqComp', ['bk-tooltip']);
        }
        if (!VxeUIRadioGroupComponent) {
          errLog('vxe.error.reqComp', ['bk-radio-group']);
        }
      });
    }

    return renderVN;
  },
});
