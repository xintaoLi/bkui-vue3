<template>
  <div class="row">
    <div class="column">
      <span>默认连线: <code>level-line="true"</code></span>
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
      <div class="cell">
        <bk-tree
          :auto-open-parent-node="false"
          :data="autoOpen"
          children="children"
          label="name"
        />
      </div>
    </div>
    <div class="column">
      <bk-button @click="handleAutoSelect"> 设置选中节点 </bk-button>
      <div class="cell">
        <bk-tree
          ref="refAutoSelect"
          :data="autoCheck"
          :selected="selected"
          children="children"
          label="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { AUTO_CHECKED_DATA, AUTO_OPEN_DATA, BASIC_DATA } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        treeData: [...BASIC_DATA],
        autoOpen: [...AUTO_OPEN_DATA],
        autoCheck: [...AUTO_CHECKED_DATA],
        selected: null,
      };
    },
    methods: {
      handleAutoSelect() {
        const treeData = this.$refs.refAutoSelect.getData();
        const { length } = treeData.data;
        const randomIndex = Math.floor(Math.random() * length);
        this.selected = treeData.data[randomIndex];
      },
    },
  });
</script>
<style scoped>
  @import './tree.less';
</style>
