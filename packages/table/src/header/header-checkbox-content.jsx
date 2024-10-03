import Checkbox from '@bkui-vue/checkbox';

import { COMPS_NAME, EMIT_EVENTS } from '../util/constant';
import { clsName } from '../util';
import emitter from '../mixins/emitter';
import { convertToV3Event } from '../util/event-map';
export default {
  name: COMPS_NAME.VE_TABLE_HEADER_CHECKBOX_CONTENT,
  mixins: [emitter],
  props: {
    // checkbox option
    checkboxOption: {
      type: Object,
      default: function () {
        return null;
      },
    },
  },
  data() {
    return {
      // is selected
      isSelected: false,
      isIndeterminate: false,
    };
  },

  methods: {
    // selected change
    selectedChange(isSelected) {
      this.isSelected = isSelected;

      this.dispatch(COMPS_NAME.VE_TABLE, EMIT_EVENTS.CHECKBOX_SELECTED_ALL_CHANGE, {
        isSelected,
      });
    },

    // set selected all info
    setSelectedAllInfo({ isSelected, isIndeterminate }) {
      this.isSelected = isSelected;
      this.isIndeterminate = isIndeterminate;
    },
  },
  mounted() {
    // receive selected all info
    this.$on(EMIT_EVENTS.CHECKBOX_SELECTED_ALL_INFO, params => {
      this.setSelectedAllInfo(params);
    });
  },
  render() {
    const { isSelected, isIndeterminate, selectedChange } = this;

    const checkboxProps = {
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      checked: isSelected,
      indeterminate: isIndeterminate,
      ...convertToV3Event({
        change: isSelectedParam => selectedChange(isSelectedParam),
      }),
    };

    return <Checkbox {...checkboxProps} />;
  },
};
