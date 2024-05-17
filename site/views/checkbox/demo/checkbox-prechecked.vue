<template>
  <bk-checkbox
    :before-change="beforeWeixinChange"
    label="weixin"
  >
    微信
  </bk-checkbox>
  <bk-checkbox
    :before-change="beforeQQChange"
    label="qq"
  >
    QQ
  </bk-checkbox>
</template>
<script setup>
  import { BkCheckbox } from '@bkui-vue/checkbox';

  const beforeWeixinChange = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

  const beforeQQChange = () => false;
</script>
