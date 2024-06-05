<template>
  <div>
    <bk-button
      theme="primary"
      text
      @click="handleRight"
    >
      右侧
    </bk-button>
    <bk-button
      style="margin-left: 10px"
      theme="primary"
      text
      @click="handleLeft"
    >
      左侧
    </bk-button>

    <bk-sideslider
      v-model:isShow="isShowRight"
      title="我是标题"
      quick-close
      transfer
    >
      right
    </bk-sideslider>
    <bk-sideslider
      v-model:isShow="isShowLeft"
      direction="left"
      title="我是标题"
      quick-close
      transfer
    >
      left
    </bk-sideslider>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isShowRight = ref(false);
  const isShowLeft = ref(false);

  const handleRight = () => {
    isShowRight.value = true;
  };

  const handleLeft = () => {
    isShowLeft.value = true;
  };
</script>
