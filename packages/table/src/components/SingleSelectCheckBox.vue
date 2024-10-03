<template>
  <div
    class="easy-checkbox"
    @click.stop.prevent="emits('change')"
  >
    <input
      type="checkbox"
      :checked="checked"
    >
    <label for="checbox" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const emits = defineEmits(['change']);

defineProps({
  checked: { type: Boolean, required: true },
});

const themeColor = inject('themeColor');
</script>

<style lang="less" scoped>
@import '../scss/checbox.less';

@checkbox-checked-color: v-bind(themeColor);

.easy-checkbox {
  input[type="checkbox"] {
    &:checked {
      + label:before {
        background: @checkbox-checked-color;
      }
    }
  }
}
</style>
