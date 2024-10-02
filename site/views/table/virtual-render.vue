<template>
  <div>
    <div style="padding: 15px 0">
      <bk-button
        theme="primary"
        @click="handleRandomRows"
      >
        随机1000-9999行数据 | 自定义 row-height
      </bk-button>
      <span style="padding: 0 30px">当前行数：{{ randomRows.length }}</span>
    </div>
    <bk-table
      :border="border"
      :columns="columns"
      :data="randomRows"
      :height="300"
      settings
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { DATA_COLUMNS2, DATA_TABLE } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        randomRows: [...DATA_TABLE],
        columns: [...DATA_COLUMNS2],
        border: ['row'],
      };
    },
    mounted() {
      this.handleRandomRows();
    },
    methods: {
      handleRandomRows() {
        const newVal = new Array(100).fill('').map(v => this.randomRows).flat();
        this.randomRows.length= 0;
        this.randomRows.push(...newVal)
      },
    },
  });
</script>
