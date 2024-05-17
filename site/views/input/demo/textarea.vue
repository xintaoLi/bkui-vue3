<template>
  <div>
    <header class="overlimit-header">
      <label>超出后是否可以输入</label>
      <bk-switcher v-model="overMaxLengthLimit" />
    </header>
    <bk-input
      v-model="val"
      :maxlength="255"
      :over-max-length-limit="overMaxLengthLimit"
      :rows="6"
      type="textarea"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const val = ref('');
  const overMaxLengthLimit = ref(false);
</script>

<style lang="less">
  .overlimit-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    grid-gap: 12px;
  }
</style>
