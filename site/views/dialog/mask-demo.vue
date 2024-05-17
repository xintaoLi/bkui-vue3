<template>
  <bk-button
    theme="primary"
    text
    @click="handleShow"
  >
    打开弹框
  </bk-button>
  <bk-dialog
    v-model:is-show="isShow"
    :show-mask="false"
    theme="primary"
    title="没有遮罩的 dialog"
  >
    没有遮罩
  </bk-dialog>
</template>

<script setup>
  import { ref } from 'vue';

  const isShow = ref(false);

  const handleShow = () => {
    isShow.value = true;
  };
</script>
