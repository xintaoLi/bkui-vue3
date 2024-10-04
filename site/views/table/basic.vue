<template>
  <div>
    <bk-table
      border
      show-overflow
      :data="tableData">
      <bk-table-column type="seq" width="70"></bk-table-column>
      <bk-table-column field="name" title="Name" min-width="200"></bk-table-column>
      <bk-table-column field="flag1" title="开关" width="200" :cell-render="flag1CellRender">
        <template #default="args">
          {{ JSON.stringify(args) }}
        </template>
      </bk-table-column>
      <bk-table-column field="flag2" title="开关" width="200" :cell-render="flag2CellRender"></bk-table-column>
    </bk-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  flag1: boolean
  flag2: boolean
}

const flag1CellRender = reactive({
  name: 'BkSwitcher',
  props: {
    disabled: true,
  }
})

const flag2CellRender = reactive({
  name: 'BkSwitcher'
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
  { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
  { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
])
</script>
