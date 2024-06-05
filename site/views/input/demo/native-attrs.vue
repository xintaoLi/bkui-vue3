<template>
  <div>
    <bk-input
      class="mb8"
      v-model="val"
      autocomplete="true"
      autofocus
    />
    <bk-input
      class="mb8"
      v-model="val"
      autocomplete="false"
      type="password"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const val = ref('');
</script>

<style lang="postcss" scoped>
  .mb8 {
    margin-bottom: 8px;
  }
</style>
