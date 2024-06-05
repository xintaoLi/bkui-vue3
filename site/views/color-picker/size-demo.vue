<template>
  <div>
    <bk-color-picker
      class="color-picker"
      v-model="color2"
      size="large"
    />
    <bk-color-picker
      class="color-picker"
      v-model="color2"
    />
    <bk-color-picker
      v-model="color2"
      size="small"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  import BkColorPicker from '@bkui-vue/color-picker';
  const color2 = ref('3A84FF');
</script>

<style lang="postcss" scoped>
  .color-picker {
    margin-right: 20px;
  }
</style>
