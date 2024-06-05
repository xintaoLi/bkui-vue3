<template>
  <bk-radio
    v-model="value"
    :before-change="() => handleBeforeChange('QQ')"
    label="QQ"
  />
  <bk-radio
    v-model="value"
    :before-change="() => handleBeforeChange('微信')"
    label="微信"
  />
  <bk-radio
    v-model="value"
    :before-change="() => handleBeforeChange('Email')"
    label="Email"
  />
  <div style="margin-top: 10px">选中：{{ value }}</div>
</template>
<script setup>
  import { ref } from 'vue';

  import InfoBox from '@bkui-vue/info-box';
  import { BkRadio } from '@bkui-vue/radio';
  const flag = ref(false);
  const hasPackage = ref(true);
  const value = ref('微信');

  function handleBeforeChange(item) {
    console.log('进来了吗？');
    if (hasPackage.value && !flag.value) {
      InfoBox({
        title: '确认要切换类型吗？',
        subTitle: 'before-change 配置项示例',
        confirmText: '确认',
        cancelText: '取消',
        onCancel: () => {},
        onConfirm: () => {
          value.value = item;
        },
      });
      return false;
    }
    return true;
  }
</script>
