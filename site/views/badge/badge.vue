<template>
  <div class="badge-demo">
    <span style="position: relative">
      未读消息
      <bk-badge
        style="margin-left: 5px"
        :count="2"
        theme="danger"
      />
    </span>
    <span style="position: relative">
      <bk-badge
        style="margin-right: 5px; margin-left: 40px"
        theme="danger"
        dot
      />
      未读消息
    </span>
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
