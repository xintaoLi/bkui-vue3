<template>
  <div>
    <bk-input
      class="mb8"
      v-model="val"
      disabled
    />
    <bk-input
      class="mb8"
      readonly
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const val = ref('hello world');
</script>
<style lang="postcss" scoped>
  .mb8 {
    margin-bottom: 8px;
  }
</style>
