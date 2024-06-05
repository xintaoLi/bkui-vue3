<template>
  <div style="display: flex">
    <bk-select
      class="bk-select"
      v-model="selectedValue"
      :input-search="false"
      :list="datasource"
      multiple-mode="tag"
      enable-virtual-render
      filterable
      multiple
      show-select-all
    />

    <bk-select
      style="margin-left: 10px"
      class="bk-select"
      v-model="selectedValue"
      :input-search="false"
      :list="datasource"
      multiple-mode="tag"
      enable-virtual-render
      filterable
      multiple
    >
      <template #prefix>
        <span style="padding: 0 12px; margin-right: 10px; line-height: 32px; background: #ccc">自定义模板</span>
      </template>
      <template #virtualScrollRender="{ item }">
        {{ item.id }}
      </template>
    </bk-select>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  const datasource = ref([]);
  const selectedValue = ref(100);
  onMounted(() => {
    console.time();
    datasource.value = new Array(6000)
      .fill('')
      .map((_, index) => ({ value: index, label: `测试数据${index}`, id: `id-${index}` }));
    console.timeEnd();
  });
</script>
<style scoped>
  .bk-select {
    width: 300px;
  }
</style>
