<template>
  <div class="basic-button-list">
    <bk-button
      theme="primary"
      text
    >
      文字按钮
    </bk-button>
    <bk-button
      class="ml10"
      theme="primary"
      disabled
      loading
      text
    >
      加载中
    </bk-button>
    <bk-button
      class="ml10"
      disabled
      text
    >
      禁用状态
    </bk-button>
  </div>
</template>

<script setup>
  // import Loading from '@bkui-vue/loading';
</script>

<style lang="postcss">
  .ml10 {
    margin-left: 10px;
  }
</style>
