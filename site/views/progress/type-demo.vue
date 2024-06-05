<template>
  <div style="width: 100%">
    <div>
      <bk-progress
        :percent="30"
        :text-inside="false"
        bg-color="#3a84ff"
        color="#f56c6c"
        type="dashboard"
      >
        <span>未开始</span>
      </bk-progress>
      <bk-progress
        :percent="10"
        color="#f56c6c"
        type="circle"
        text-inside
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';

  import BkProgress from '@bkui-vue/progress';

  export default defineComponent({
    name: 'SiteProgress',
    components: {
      BkProgress,
    },
    setup() {},
  });
</script>

<style scoped>
  .mb10 {
    margin-bottom: 10px;
  }

  .bk-progress {
    margin-right: 30px;
  }
</style>
