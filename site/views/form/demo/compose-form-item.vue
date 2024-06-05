<template>
  <bk-compose-form-item>
    <bk-input
      placeholder="请输入"
      clearable
    />
    <bk-select>
      <bk-option
        label="本科以下"
        value="1"
      />
      <bk-option
        label="本科以上"
        value="2"
      />
    </bk-select>
    <bk-input
      placeholder="请输入"
      type="number"
    />
    <bk-tag-input
      style="width: 100px"
      :list="list"
    />
    <bk-date-picker />
  </bk-compose-form-item>
</template>
<script setup>
  import { ref } from 'vue';

  import { BkComposeFormItem } from '@bkui-vue/form';
  import BkInput from '@bkui-vue/input';
  import BkSelect, { BkOption } from '@bkui-vue/select';

  const list = ref([
    { id: 'shenzhen', name: '深圳' },
    { id: 'guangzhou', name: '广州' },
    { id: 'beijing', name: '北京' },
    { id: 'shanghai', name: '上海' },
    { id: 'hangzhou', name: '杭州' },
    { id: 'nanjing', name: '南京' },
    { id: 'chongqing', name: '重庆' },
    { id: 'taibei', name: '台北' },
    { id: 'haikou', name: '海口' },
  ]);
</script>
