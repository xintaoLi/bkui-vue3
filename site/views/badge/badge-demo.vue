<template>
  <div class="badge-demo">
    <bk-badge style="margin-right: 40px">
      <bk-button theme="primary"> top-right </bk-button>
      <template #icon>
        <help />
      </template>
    </bk-badge>
    <bk-badge
      style="margin-right: 40px"
      :count="999"
      position="bottom-left"
      theme="success"
    >
      <bk-button theme="primary"> bottom-left </bk-button>
    </bk-badge>
    <bk-badge
      style="margin-right: 40px"
      :count="999"
      position="top-left"
      theme="danger"
      dot
    >
      <bk-button theme="primary"> top-left </bk-button>
    </bk-badge>
    <bk-badge
      style="margin-right: 40px"
      :count="999"
      position="top-right"
      theme="danger"
      dot
    >
      <bk-button theme="primary"> top-right </bk-button>
    </bk-badge>
    <bk-badge
      style="margin-right: 40px"
      :count="'数字字符串'"
      :radius="'0px'"
      position="bottom-right"
      theme="warning"
    >
      <bk-button theme="primary"> bottom-right </bk-button>
    </bk-badge>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { Help } from 'bkui-vue/lib/icon';
  export default defineComponent({
    components: {
      Help,
    },
  });
</script>
<style lang="less" scoped>
  .badge-demo {
    width: 90%;
    padding: 30px;
    margin: 0 auto;
  }
</style>
