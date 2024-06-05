<template>
  <div style="width: 100%; overflow: auto">
    <div class="row">
      <div class="column">
        <span>draggable: <code>draggable = true</code></span>

        <div class="cell">
          <bk-tree
            :data="treeData"
            children="children"
            label="name"
            draggable
          />
        </div>
      </div>
      <div class="column">
        <span>draggable<code>drag-sort = true</code></span>
        <div class="cell">
          <bk-tree
            :data="treeData"
            children="children"
            label="name"
            drag-sort
            draggable
          />
        </div>
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
