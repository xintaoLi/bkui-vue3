<template>
  <div style="display: grid">
    <div style="height: 300px">
      <bk-table
        :columns="columns"
        :data="tableData"
        :expand-option="expandOption"
        :max-height="300"
        :virtual-scroll-option="virtualScrollOption"
        row-key-field-name="rowKey"
      >
      </bk-table>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, reactive } from 'vue';

  const virtualScrollOption = reactive({ enable: true });

  const expandOption = {
    render: ({ row }) => {
      return `<p>
          My name is <span style='color:#1890ff;'>${row.name}</span>
          ,I'm living in ${row.address}
        </p>`;
    },
  };
  const columns = reactive([
    {
      field: '',
      key: 'a',
      // 设置需要显示展开图标的列
      type: 'expand',
      title: '',
      width: 50,
      align: 'center',
    },
    {
      field: 'index',
      key: 'a',
      title: '#',
      width: 100,
      align: 'left',
    },
    {
      field: 'name',
      key: 'b',
      title: 'Name',
      width: 200,
      align: 'left',
      sortBy: 'asc',
    },
    {
      field: 'hobby',
      key: 'c',
      title: 'Hobby',
      width: 300,
      align: 'left',
      sortBy: 'asc',
    },
    {
      field: 'address',
      key: 'd',
      title: 'Address',
      width: '',
      align: 'left',
      sortBy: 'asc',
    },
  ]);

  let tableData = reactive([]);

  onMounted(() => {
    let data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({
        rowKey: i,
        index: i,
        name: `name${i}`,
        hobby: `hobby${i}`,
        address: `address${i}`,
      });
    }

    tableData.push(...data);
  });
</script>
<style scoped>
  .row {
    display: flex;
    width: 100%;
  }

  .cell {
    flex: 1;
    margin: 0 5px 0 5px;
  }
</style>
