<template>
  <bk-alert
    close-text="继续努力"
    theme="success"
    title="成功的提示文字"
    closable
  />
  <bk-alert
    close-text="下次见！"
    theme="info"
    title="消息的提示文字"
    closable
  />
  <bk-alert
    close-text="删掉"
    theme="warning"
    title="警告的提示文字"
    closable
  />
</template>
<script setup>
  import BkAlert from '@bkui-vue/alert';
</script>
<style lang="postcss">
  .bk-alert ~ .bk-alert {
    margin-top: 20px;
  }
</style>
