import { VxeTableDefines } from '../components/table'

export namespace VxeGlobalValidatorsHandles {
  export interface ValidatorsOptions {

    /**
     * 表单 - 自定义表单项校验方法
     */
    formItemValidatorMethod?: FormItemValidatorMethod

    /**
     * 表格 - 自定义单元格校验方法
     */
    tableCellValidatorMethod?: TableCellValidatorMethod
  }


  export type TableCellValidatorMethod<D = any> = (params: TableCellValidatorParams<D>, ...args: any[]) => void | Error | Promise<any>
  export interface TableCellValidatorParams<D = any> extends VxeTableDefines.RuleValidatorParams<D> {}
}
