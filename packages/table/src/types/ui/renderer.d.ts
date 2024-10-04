import { VxeComponentStyleType, VxeComponentClassNameType, VxeComponentSlotType } from '../../core/types';
import { VxeTableConstructor, VxeTablePropTypes, VxeTableDefines, VxeTablePrivateMethods } from '../components/table';
import {
  VxeFormItemPropTypes,
  VxeFormItemSlotTypes,
  FormItemContentRenderParams,
  FormItemVisibleParams,
  FormItemResetParams,
} from '../components/form-item';
import { VxeGridConstructor, VxeGridPropTypes } from '../components/grid';
import { VxeColumnPropTypes } from '../components/column';
import { VxeToolbarPropTypes } from '../components/toolbar';
import { VxeFormConstructor, VxeFormDefines, VxeFormProps } from '../components/form';
import { VxeFormDesignDefines, VxeFormDesignConstructor } from '../components/form-design';
import { VxeFormViewDefines, VxeFormViewConstructor } from '../components/form-view';
import { VxeListDesignDefines } from '../components/list-design';
import { VxeTreeSelectPropTypes } from '../components/tree-select';

/* eslint-disable no-use-before-define */

// 表格
export interface VxeGlobalRendererOptions {
  /**
   * 表格 - 设置筛选容器 class
   */
  tableFilterClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderTableFilterParams<any>) => string | VxeComponentClassNameType);
  /**
   * 表格 - 筛选容器是否显示尾部
   */
  showTableFilterFooter?: boolean;
  /**
   * 表格 - 自定义筛选渲染内容
   */
  renderTableFilter?(
    renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
    params: VxeGlobalRendererHandles.RenderTableFilterParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 表格 - 自定义筛选逻辑方法
   */
  tableFilterMethod?(params: VxeGlobalRendererHandles.TableFilterMethodParams<any>): boolean;
  /**
   * 表格 - 自定义筛选远程逻辑方法
   */
  tableFilterRemoteMethod?(params: VxeGlobalRendererHandles.TableFilterRemoteMethod<any>): boolean;
  /**
   * 表格 - 自定义筛选重置逻辑方法
   */
  tableFilterResetMethod?(params: VxeGlobalRendererHandles.TableFilterResetMethodParams<any>): void;
  /**
   * 表格 - 自定义筛选还原逻辑方法
   */
  tableFilterRecoverMethod?(params: VxeGlobalRendererHandles.TableFilterRecoverMethodParams<any>): void;
  /**
   * 表格 - 默认筛选处理方法，如果同时存在，会被 tableFilterMethod 覆盖
   */
  tableFilterDefaultMethod?(params: VxeGlobalRendererHandles.TableFilterMethodParams<any>): boolean;

  /**
   * 表格 - 单元格设置 class
   */
  tableCellClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>) => string | VxeComponentClassNameType);
  /**
   * 表格 - 单元格设置样式
   */
  tableCellStyle?:
    | VxeComponentStyleType
    | ((params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>) => VxeComponentStyleType);
  /**
   * 表格 - 渲染头部
   */
  renderTableHeader?(
    renderOpts: VxeGlobalRendererHandles.RenderTableHeaderOptions,
    params: VxeGlobalRendererHandles.RenderTableHeaderParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 表格 - 渲染单元格
   */
  renderTableDefault?(
    renderOpts: VxeGlobalRendererHandles.RenderTableDefaultOptions,
    params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 表格 - 渲染尾部
   */
  renderTableFooter?(
    renderOpts: VxeGlobalRendererHandles.RenderTableFooterOptions,
    params: VxeGlobalRendererHandles.RenderTableFooterParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 表格 - 自定义单元格导出逻辑
   */
  tableExportMethod?(params: VxeGlobalRendererHandles.TableExportMethodParams<any>): string;
  /**
   * 表格 - 自定义表尾单元格导出逻辑
   */
  tableFooterExportMethod?(params: VxeGlobalRendererHandles.TableFooterExportMethodParams<any>): string;

  /**
   * 表格 - 激活编辑状态时，设置自动聚焦的 class
   */
  tableAutoFocus?:
    | string
    | ((
        params:
          | VxeGlobalRendererHandles.RenderTableEditParams<any>
          | VxeGlobalRendererHandles.RenderTableCellParams<any>,
      ) => HTMLElement | null);
  /**
   * 表格 - 激活编辑状态时，设置是否自动选中 tableAutoFocus 指定的元素
   */
  tableAutoSelect?: boolean;
  /**
   * 表格 - 渲染编辑状态时，与 renderTableCell 配合使用
   */
  renderTableEdit?(
    renderOpts: VxeGlobalRendererHandles.RenderTableEditOptions<any>,
    params: VxeGlobalRendererHandles.RenderTableEditParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 表格 - 渲染非编辑状态时，与 renderTableEdit 配合使用
   */
  renderTableCell?(
    renderOpts: VxeGlobalRendererHandles.RenderTableCellOptions<any>,
    params: VxeGlobalRendererHandles.RenderTableCellParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];

  /**
   * 表格 - 展开行渲染
   */
  renderTableExpand?(
    renderOpts: VxeGlobalRendererHandles.RenderTableExpandOptions,
    params: VxeGlobalRendererHandles.RenderTableExpandParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];

  /**
   * 表格 - 空数据时渲染
   */
  renderTableEmpty?(
    renderOpts: VxeGlobalRendererHandles.RenderTableEmptyOptions,
    params: VxeGlobalRendererHandles.RenderTableEmptyParams,
  ): VxeComponentSlotType | VxeComponentSlotType[];

  /**
   * 已废弃，请使用 tableFilterMethod
   * @deprecated
   */
  filterMethod?(params: VxeGlobalRendererHandles.TableFilterMethodParams<any>): boolean;
  /**
   * 已废弃，请使用 tableFilterRemoteMethod
   * @deprecated
   */
  filterRemoteMethod?(params: VxeGlobalRendererHandles.TableFilterRemoteMethod<any>): boolean;
  /**
   * 已废弃，请使用 tableFilterResetMethod
   * @deprecated
   */
  filterResetMethod?(params: VxeGlobalRendererHandles.TableFilterResetMethodParams<any>): void;
  /**
   * 已废弃，请使用 tableFilterRecoverMethod
   * @deprecated
   */
  filterRecoverMethod?(params: VxeGlobalRendererHandles.TableFilterRecoverMethodParams<any>): void;
  /**
   * 已废弃，请使用 tableFilterDefaultMethod
   * @deprecated
   */
  defaultFilterMethod?(params: VxeGlobalRendererHandles.TableFilterMethodParams<any>): boolean;
  /**
   * 已废弃，请使用 tableFilterDefaultMethod
   * @deprecated
   */
  defaultTableFilterMethod?(params: VxeGlobalRendererHandles.TableFilterMethodParams<any>): boolean;
  /**
   * 已废弃，请使用 tableFilterClassName
   * @deprecated
   */
  filterClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderTableFilterParams<any>) => string | VxeComponentClassNameType);
  /**
   * 已废弃，请使用 showTableFilterFooter
   * @deprecated
   */
  isFooter?: boolean;
  /**
   * 已废弃，请使用 showTableFilterFooter
   * @deprecated
   */
  showFilterFooter?: boolean;
  /**
   * 已废弃，请使用 tableCellClassName
   * @deprecated
   */
  cellClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>) => string | VxeComponentClassNameType);
  /**
   * 已废弃，请使用 tableCellStyle
   * @deprecated
   */
  cellStyle?:
    | VxeComponentStyleType
    | ((params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>) => VxeComponentStyleType);
  /**
   * 已废弃，请使用 tableAutoFocus
   * @deprecated
   */
  autofocus?:
    | string
    | ((
        params:
          | VxeGlobalRendererHandles.RenderTableEditParams<any>
          | VxeGlobalRendererHandles.RenderTableCellParams<any>,
      ) => HTMLElement | null);
  /**
   * 已废弃，请使用 tableAutoFocus
   * @deprecated
   */
  tableAutofocus?:
    | string
    | ((
        params:
          | VxeGlobalRendererHandles.RenderTableEditParams<any>
          | VxeGlobalRendererHandles.RenderTableCellParams<any>,
      ) => HTMLElement | null);
  /**
   * 已废弃，请使用 tableAutoSelect
   * @deprecated
   */
  autoselect?: boolean;
  /**
   * 已废弃，请使用 tableExportMethod
   * @deprecated
   */
  exportMethod?(params: VxeGlobalRendererHandles.TableExportMethodParams<any>): string;
  /**
   * 已废弃，请使用 tableFooterExportMethod
   * @deprecated
   */
  footerExportMethod?(params: VxeGlobalRendererHandles.TableFooterExportMethodParams<any>): string;
  /**
   * 已废弃，请使用 renderTableHeader
   * @deprecated
   */
  renderHeader?(
    renderOpts: VxeGlobalRendererHandles.RenderTableHeaderOptions,
    params: VxeGlobalRendererHandles.RenderTableHeaderParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableFooter
   * @deprecated
   */
  renderFooter?(
    renderOpts: VxeGlobalRendererHandles.RenderTableFooterOptions,
    params: VxeGlobalRendererHandles.RenderTableFooterParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableFilter
   * @deprecated
   */
  renderFilter?(
    renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
    params: VxeGlobalRendererHandles.RenderTableFilterParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableDefault
   * @deprecated
   */
  renderDefault?(
    renderOpts: VxeGlobalRendererHandles.RenderTableDefaultOptions,
    params: VxeGlobalRendererHandles.RenderTableDefaultParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableEdit
   * @deprecated
   */
  renderEdit?(
    renderOpts: VxeGlobalRendererHandles.RenderTableEditOptions<any>,
    params: VxeGlobalRendererHandles.RenderTableEditParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableCell
   * @deprecated
   */
  renderCell?(
    renderOpts: VxeGlobalRendererHandles.RenderTableCellOptions<any>,
    params: VxeGlobalRendererHandles.RenderTableCellParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 已废弃，请使用 renderTableExpand
   * @deprecated
   */
  renderExpand?(
    renderOpts: VxeGlobalRendererHandles.RenderTableExpandOptions,
    params: VxeGlobalRendererHandles.RenderTableExpandParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * @deprecated 已废弃
   */
  className?: string;
  /**
   * 已废弃，请使用 renderTableEmptyView
   * @deprecated
   */
  renderEmpty?(
    renderOpts: VxeGlobalRendererHandles.RenderTableEmptyOptions,
    params: VxeGlobalRendererHandles.RenderTableEmptyParams,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  renderTableEmptyView?(
    renderOpts: VxeGlobalRendererHandles.RenderTableEmptyOptions,
    params: VxeGlobalRendererHandles.RenderTableEmptyParams,
  ): VxeComponentSlotType | VxeComponentSlotType[];
}

export namespace VxeGlobalRendererHandles {
  /**
   * @deprecated
   */
  export interface RenderFilterOptions extends RenderTableFilterOptions {}
  export interface RenderTableFilterOptions extends VxeColumnPropTypes.FilterRender {}

  export interface RenderParams {}

  /**
   * @deprecated
   */
  export interface RenderFilterParams<D = any> extends RenderTableFilterParams<D> {}
  export interface RenderTableFilterParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    $panel: any;
    column: {
      filters: VxeTableDefines.FilterOption[];
    } & VxeTableDefines.ColumnInfo<D>;
    columnIndex: number;
    $columnIndex: number;
    $rowIndex: number;
  }

  /**
   * @deprecated
   */
  export interface FilterMethodParams<D = any> extends TableFilterMethodParams<D> {}
  export interface TableFilterMethodParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    value: any;
    option: VxeTableDefines.FilterOption;
    cellValue: any;
    row: any;
    column: VxeTableDefines.ColumnInfo<D>;
  }

  /**
   * @deprecated
   */
  export interface FilterRemoteMethod<D = any> extends TableFilterRemoteMethod<D> {}
  export interface TableFilterRemoteMethod<D = any> extends VxeTableDefines.FilterChangeParams<D> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
  }

  /**
   * @deprecated
   */
  export interface FilterResetMethodParams<D = any> extends TableFilterResetMethodParams<D> {}
  export interface TableFilterResetMethodParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    options: VxeTableDefines.FilterOption[];
    column: VxeTableDefines.ColumnInfo<D>;
  }

  /**
   * @deprecated
   */
  export interface FilterRecoverMethodParams<D = any> extends TableFilterRecoverMethodParams<D> {}
  export interface TableFilterRecoverMethodParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    option: VxeTableDefines.FilterOption;
    column: VxeTableDefines.ColumnInfo<D>;
  }

  /**
   * @deprecated
   */
  export interface RenderHeaderOptions extends RenderTableHeaderOptions {}
  export interface RenderTableHeaderOptions extends VxeGlobalRendererHandles.RenderOptions {}

  export interface RenderHeaderParams<D = any> extends RenderTableHeaderParams<D> {}
  export interface RenderTableHeaderParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    column: VxeTableDefines.ColumnInfo<D>;
    columnIndex: number;
    $columnIndex: number;
    $rowIndex: number;
  }

  export interface RenderDefaultOptions<D = any> extends RenderTableDefaultOptions<D> {}
  export interface RenderTableDefaultOptions<D = any> extends VxeColumnPropTypes.CellRender<D> {}

  /**
   * @deprecated
   */
  export interface RenderDefaultParams<D = any> extends RenderTableDefaultParams<D> {}
  export interface RenderTableDefaultParams<D = any> extends RenderTableEditParams<D> {}

  /**
   * @deprecated
   */
  export interface RenderFooterOptions extends RenderTableFooterOptions {}
  export interface RenderTableFooterOptions extends VxeGlobalRendererHandles.RenderOptions {}

  /**
   * @deprecated
   */
  export interface RenderFooterParams<D = any> extends RenderTableFooterParams<D> {}
  export interface RenderTableFooterParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    column: VxeTableDefines.ColumnInfo<D>;
    columnIndex: number;
    _columnIndex: number;
    $columnIndex: number;
    $rowIndex: number;
    items: any[];
    data: D[][];
  }

  export interface ExportMethodParams<D = any> extends TableExportMethodParams<D> {}
  export interface TableExportMethodParams<D = any> {
    row: D;
    column: VxeTableDefines.ColumnInfo<D>;
    options: VxeTablePropTypes.ExportHandleOptions;
  }

  export interface FooterExportMethodParams<D = any> extends TableFooterExportMethodParams<D> {}
  export interface TableFooterExportMethodParams<D = any> {
    items: any[];
    _columnIndex: number;
    column: VxeTableDefines.ColumnInfo<D>;
    options: VxeTablePropTypes.ExportHandleOptions;
  }

  /**
   * @deprecated
   */
  export interface RenderEditOptions<D = any> extends RenderTableEditOptions<D> {}
  export interface RenderTableEditOptions<D = any, P = any> extends VxeColumnPropTypes.EditRender<D, P> {}

  /**
   * @deprecated
   */
  export interface RenderEditParams<D = any> extends RenderTableEditParams<D> {}
  export interface RenderTableEditParams<D = any> extends VxeTableDefines.CellRenderBodyParams<D> {}

  /**
   * @deprecated
   */
  export interface RenderCellOptions<D = any> extends RenderTableCellOptions<D> {}
  export interface RenderTableCellOptions<D = any, P = any> extends VxeColumnPropTypes.CellRender<D, P> {}

  /**
   * @deprecated
   */
  export interface RenderCellParams<D = any> extends RenderTableCellParams<D> {}
  export interface RenderTableCellParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    $grid: VxeGridConstructor<D> | null;
    column: VxeTableDefines.ColumnInfo<D>;
    columnIndex: number;
    $columnIndex: number;
    rowid: string;
    row: D;
    rowIndex: number;
    $rowIndex: number;
    isHidden: boolean;
    fixed: VxeColumnPropTypes.Fixed;
    type: string;
  }

  /**
   * @deprecated
   */
  export interface RenderExpandOptions extends RenderTableExpandOptions {}
  export interface RenderTableExpandOptions extends VxeColumnPropTypes.ContentRender {}

  /**
   * @deprecated
   */
  export interface RenderExpandParams<D = any> extends RenderTableExpandParams<D> {}
  export interface RenderTableExpandParams<D = any> extends RenderTableEditParams<D> {}

  export type RenderTableEmptyOptions = VxeTablePropTypes.EmptyRender;

  /**
   * @deprecated
   */
  export interface RenderEmptyParams<D = any> extends RenderTableEmptyParams<D> {}
  export interface RenderTableEmptyParams<D = any> {
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
  }

  /**
   * 渲染选项
   */
  export interface RenderOptions {
    /**
     * 渲染器名称
     */
    name?: string;
    /**
     * 目标组件渲染的参数
     */
    props?: { [key: string]: any };
    /**
     * 目标组件渲染的属性
     */
    attrs?: { [key: string]: any };
    /**
     * 目标组件渲染的事件
     */
    events?: { [key: string]: (...args: any[]) => any };
    /**
     * 多目标渲染
     */
    children?: any[];
    /**
     * 渲染类型
     */
    cellType?: VxeColumnPropTypes.CellType;
  }

  /**
   * 选项参数
   */
  export interface RenderOptionProps extends VxeTreeSelectPropTypes.OptionProps {
    value?: string;
    label?: string;
    disabled?: string;
    key?: string;
  }

  /**
   * 分组选项参数
   */
  export interface RenderOptionGroupProps {
    options?: string;
    label?: string;
    key?: string;
  }
}

// 工具栏
export interface VxeGlobalRendererOptions {
  /**
   * 工具栏 - 左侧按钮设置 class
   */
  toolbarButtonClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderButtonParams<any>) => string | VxeComponentClassNameType);
  /**
   * 工具栏 - 渲染左侧按钮
   */
  renderToolbarButton?(
    renderOpts: VxeGlobalRendererHandles.RenderButtonOptions,
    params: VxeGlobalRendererHandles.RenderButtonParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
  /**
   * 工具栏 - 右侧按钮设置 class
   */
  toolbarToolClassName?:
    | string
    | ((params: VxeGlobalRendererHandles.RenderToolParams<any>) => string | VxeComponentClassNameType);
  /**
   * 工具栏 - 渲染右侧按钮
   */
  renderToolbarTool?(
    renderOpts: VxeGlobalRendererHandles.RenderToolOptions,
    params: VxeGlobalRendererHandles.RenderToolParams<any>,
  ): VxeComponentSlotType | VxeComponentSlotType[];
}

export namespace VxeGlobalRendererHandles {
  export interface RenderButtonOptions extends VxeToolbarPropTypes.ButtonRender {}
  export interface RenderButtonParams<D = any> {
    $grid: VxeGridConstructor | null;
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    button: VxeToolbarPropTypes.ButtonConfig;
  }

  export interface RenderToolOptions extends VxeToolbarPropTypes.ToolRender {}
  export interface RenderToolParams<D = any> {
    $grid: VxeGridConstructor | null;
    $table: VxeTableConstructor<D> & VxeTablePrivateMethods<D>;
    tool: VxeToolbarPropTypes.ToolConfig;
  }
}
