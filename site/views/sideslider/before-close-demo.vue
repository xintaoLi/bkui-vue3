<template>
  <div>
    <bk-button
      theme="primary"
      text
      @click="handleOpen"
    >
      打开侧栏
    </bk-button>

    <bk-sideslider
      v-model:isShow="isShow"
      :before-close="beforeClose"
      title="我是标题"
    >
      hello world!!!
    </bk-sideslider>
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  import InfoBox from '@bkui-vue/info-box';

  const isShow = ref(false);

  const beforeClose = () =>
    new Promise((resolve, reject) => {
      InfoBox({
        title: '确认关闭?',
        infoType: 'warning',
        onConfirm: () => resolve(true),
        onCancel: () => reject(),
      });
    });

  const handleOpen = () => {
    isShow.value = true;
  };
</script>
