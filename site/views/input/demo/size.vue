<template>
  <div>
    <bk-input
      class="mb8"
      v-model="xxxx"
      size="small"
    />
    <bk-input
      class="mb8"
      v-model="prefix"
      prefix="https://"
      size="small"
      type="url"
    />
    <bk-input
      class="mb8"
      v-model="normal"
    />
    <bk-input
      class="mb8"
      v-model="suffix"
      suffix="@qq.com"
      type="url"
    />
    <bk-input
      class="mb8"
      v-model="search"
      size="large"
      type="search"
    />
    <bk-input
      class="mb8"
      v-model="large"
      size="large"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const xxxx = ref('');
  const prefix = ref('');
  const normal = ref('');
  const suffix = ref('');
  const search = ref('');
  const large = ref('');
</script>
<style lang="postcss" scoped>
  .mb8 {
    margin-bottom: 8px;
  }
</style>
