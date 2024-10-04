import { App } from 'vue';
import { VxeUI, getI18n, setConfig } from '../../core/types';
import { FormDesignHandleExport, ListDesignHandleExport, TableHandleExport } from '../handles';


export interface VxeUIExport {
  uiVersion: string;
  tableVersion: string;

  /**
   * @deprecated
   */
  _t(key: string, args?: any): string;
  /**
   * @deprecated
   */
  version: string;
}
export * from './global-config';
export * from './global-icon';
export * from './renderer';
export * from './interceptor';
export * from './commands';
export * from './formats';
export * from './hooks';

export * from '../handles';

export default VxeUI;
