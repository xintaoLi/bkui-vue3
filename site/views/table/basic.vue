<template>
  <!-- <bk-button @click="clearSelection">取消全选</bk-button>
  <bk-button @click="handleScrollTo">ScrollToLast</bk-button>
  <bk-button @click="handleAppendToLastRow">追加一行</bk-button> -->
  <div style="display: grid">
    <div style="height: 300px">
      <bk-table v-bind="gridOptions">
        <!-- <bk-table-column
          type="seq"
          width="70"
        ></bk-table-column>
        <bk-table-column
          field="name"
          title="Name"
        ></bk-table-column>
        <bk-table-column
          field="sex"
          title="Sex"
        ></bk-table-column>
        <bk-table-column
          field="age"
          title="Age"
        ></bk-table-column> -->
      </bk-table>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue';

  const gridOptions = reactive({
    columns: [
      { type: 'seq', width: 70 },
      { field: 'name', title: 'Name' },
      { field: 'sex', title: 'Sex' },
      { field: 'age', title: 'Age' },
    ],
    data: [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    ],
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
