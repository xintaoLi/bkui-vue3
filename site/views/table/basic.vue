<template>
  <div>
    <bk-table-toolbar ref="toolbarRef" custom></bk-table-toolbar>
    <bk-table
      ref="tableRef"
      :data="tableData">
      <bk-table-column type="seq" width="70"></bk-table-column>
      <bk-table-column field="name" title="Name"></bk-table-column>
      <bk-table-column field="sex" title="Sex"></bk-table-column>
      <bk-table-column field="age" title="Age"></bk-table-column>
    </bk-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref()
const tableRef = ref()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
