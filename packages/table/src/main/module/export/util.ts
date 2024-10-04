import type { VxeTablePropTypes } from '../../../types'

// 默认导出或打印的 HTML 样式
const defaultHtmlStyle = 'body{margin:0;padding: 0 1px;color:#333333;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.bk-table{border-collapse:collapse;text-align:left;border-spacing:0}.bk-table:not(.is--print){table-layout:fixed}.bk-table,.bk-table th,.bk-table td,.bk-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.bk-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.bk-table td>div,.bk-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.bk-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.bk-table--tree-node{text-align:left}.bk-table--tree-node-wrapper{position:relative}.bk-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.bk-table--tree-unfold-icon,.bk-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.bk-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.bk-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.bk-table--tree-cell{display:block;padding-left:1.5em}.bk-table input[type="checkbox"]{margin:0}.bk-table input[type="checkbox"],.bk-table input[type="radio"],.bk-table input[type="checkbox"]+span,.bk-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}'

export function getExportBlobByContent (content: string, options: { type: string }) {
  return new Blob([content], { type: `text/${options.type};charset=utf-8;` })
}

export function createHtmlPage (opts: VxeTablePropTypes.PrintConfig, content: string): string {
  const { style } = opts
  return [
    '<!DOCTYPE html><html>',
    '<head>',
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${opts.sheetName}</title>`,
    '<style media="print">.bk-page-break-before{page-break-before:always;}.bk-page-break-after{page-break-after:always;}</style>',
    `<style>${defaultHtmlStyle}</style>`,
    style ? `<style>${style}</style>` : '',
    '</head>',
    `<body>${content}</body>`,
    '</html>'
  ].join('')
}
