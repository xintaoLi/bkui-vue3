<template>
  <div>
    <bk-input
      v-model="val"
      :maxlength="88"
      clearable
      show-word-limit
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const val = ref('');
</script>
