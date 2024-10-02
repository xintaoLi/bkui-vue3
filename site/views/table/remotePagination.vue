<template>
  <div
    style="width: 100%; height: 500px"
    v-if="isShow"
  >
    <bk-table
      ref="refTable"
      :height="400"
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      empty-cell-text="--"
      :pagination-heihgt="60"
      remote-pagination
    />
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  import { DATA_FIX_COLUMNS } from './options';
  const appendColumns = new Array(20)
    .fill('')
    .map((item, index) => ({ label: `新增列${index}`, field: `new-${index}`, width: 50 }));

  const tableData = reactive([]);

  const isShow = ref(true);
  const renderTable = () => {
    isShow.value = !isShow.value;
  };
  const pagination = ref({ count: 100, limit: 20 });
  const columns = reactive(DATA_FIX_COLUMNS.concat(appendColumns));
  const refTable = ref(null);
  const handleSelectionChange = args => {};
  setTimeout(() => {
    tableData.push(
      ...new Array(100).fill('').map((_, index) => ({
        ip: `${index}--192.168.0.x`,
        source: index,
        create_by: `user-admin-${index}`,
        status: '',
        create_time: `2018-05-25 15:02:24.${index}`,
        ...appendColumns.reduce(
          (acc, cur, curIndex) => ({ ...acc, [`new-${curIndex}`]: `随机数据-${curIndex}-${index}` }),
          {},
        ),
      })),
    );
  }, 100);
</script>
