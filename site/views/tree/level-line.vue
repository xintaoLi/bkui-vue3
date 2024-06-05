<template>
  <div class="row">
    <div class="column">
      <span>默认连线</span>

      <div class="cell">
        <bk-tree
          :data="treeData"
          children="children"
          label="name"
          level-line
        />
      </div>
    </div>
    <div class="column">
      <span>自定义连线</span>

      <div class="cell">
        <bk-tree
          :data="treeData"
          :level-line="'solid 1px red'"
          children="children"
          label="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { BASIC_DATA } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        treeData: [...BASIC_DATA],
      };
    },
  });
</script>
<style scoped>
  @import './tree.less';
</style>
