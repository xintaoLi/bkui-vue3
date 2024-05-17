<template>
  <bk-tag-input
    v-model="state.tags"
    :list="state.list"
    placeholder="请选择城市"
    allow-auto-match
    allow-create
    has-delete-icon
  />
</template>

<script setup>
  import { reactive } from 'vue';

  const state = reactive({
    tags: ['shenzhen'],
    list: [
      { id: 'shenzhen', name: '深圳' },
      { id: 'guangzhou', name: '广州' },
      { id: 'beijing', name: '北京' },
      { id: 'shanghai', name: '上海' },
      { id: 'hangzhou', name: '杭州' },
      { id: 'nanjing', name: '南京' },
      { id: 'chongqing', name: '重庆' },
      { id: 'taibei', name: '台北' },
      { id: 'haikou', name: '海口' },
    ],
  });
</script>
