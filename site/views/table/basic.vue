<template>
  <div>
    <bk-table
      :data="tableData"
      :pagination="true"
    >
      <bk-table-column
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
      ></bk-table-column>
    </bk-table>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  interface RowVO {
    id: string;
    name: string;
    role: string;
    sex: string;
    age: number;
    address: string;
  }

  const tableData = ref<RowVO[]>(
    new Array(120).fill('').map((_, index) => ({
      id: `1000${index + 1}`,
      name: `Test-${index}`,
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: `test_${index}`,
    })),
  );
</script>
