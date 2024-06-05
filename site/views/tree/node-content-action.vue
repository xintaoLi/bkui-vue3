<template>
  <div style="width: 100%; overflow: auto">
    <bk-input
      style="width: 400px; margin-left: 20px"
      v-model="search.value"
      type="search"
    />
    <div class="row">
      <div class="column">
        <div class="attr-tag">node-content-action = ['selected', 'click', 'expand', 'collapse'] | (默认配置)</div>
        <div class="cell">
          <bk-tree
            :data="treeData"
            :node-content-action="['selected', 'click', 'expand', 'collapse']"
            :search="search"
            children="children"
            label="name"
            expand-all
          />
        </div>
      </div>
      <div class="column">
        <div class="attr-tag">node-content-action =['selected', 'click']</div>
        <div class="cell">
          <bk-tree
            :data="treeData"
            :node-content-action="['selected', 'click']"
            :search="search"
            children="children"
            label="name"
          />
        </div>
      </div>
      <div class="column">
        <div class="attr-tag">
          node-content-action =[] |
          (如果要禁用所有行为请设置为[],不要设置null|undefined之类，这类设置会被置换为默认配置)
        </div>
        <div class="cell">
          <bk-tree
            :data="treeData"
            :node-content-action="[]"
            :search="search"
            children="children"
            label="name"
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
        treeData: BASIC_DATA,
        search: {
          value: '',
          showChildNodes: true,
        },
      };
    },
  });
</script>
<style scoped>
  @import './tree.less';

  .attr-tag {
    padding: 10px;
    margin-right: 2px;
    background: #f0f1f5;
  }
</style>
