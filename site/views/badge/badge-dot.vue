<template>
  <div class="badge-demo">
    <bk-badge
      style="margin-right: 40px"
      :count="999"
      position="top-left"
      theme="danger"
      dot
    >
      <bk-button theme="primary"> top-left </bk-button>
    </bk-badge>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {},
  });
</script>
<style lang="less" scoped>
  .badge-demo {
    width: 90%;
    padding: 30px;
    margin: 0 auto;
  }
</style>
