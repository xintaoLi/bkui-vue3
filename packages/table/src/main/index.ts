import { withInstall } from '@bkui-vue/shared';
import VxeTableComponent from './table';
import './module/filter/hook';
import './module/menu/hook';
import './module/edit/hook';
import './module/export/hook';
import './module/keyboard/hook';
import './module/validator/hook';
import './module/custom/hook';
import './render';
import { setI18n, setLanguage } from '../core';
import zhCN from '../locale/lang/zh-CN';
import enUS from '../locale/lang/en-US';


const table = withInstall(VxeTableComponent);
setI18n('zh-CN', zhCN);
setI18n('en-US', enUS);

setLanguage('zh-CN');
export const Table = table;
export default table;
