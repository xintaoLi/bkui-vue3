// Vxe UI

// Vxe Table
import { VxeTableProps } from '../components/table';
import { VxeColumnProps } from '../components/column';
import { VxeColgroupProps } from '../components/colgroup';
import { VxeGridProps } from '../components/grid';
import { VxeToolbarProps } from '../components/toolbar';

export interface VxeGlobalConfig {
  empty?: string;

  table?: VxeTableProps;
  column?: VxeColumnProps;
  colgroup?: VxeColgroupProps;
  grid?: VxeGridProps;
  toolbar?: VxeToolbarProps;
}
