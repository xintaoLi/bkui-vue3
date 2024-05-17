<template>
  <div style="width: 100%">
    <div style="margin-bottom: 20px">
      <bk-progress
        :percent="30"
        :text-inside="false"
        bg-color="#3a84ff"
        type="circle"
      />
      <bk-progress
        :percent="0"
        :text-inside="false"
        color="#f56c6c"
        type="dashboard"
      >
        <span>未开始</span>
      </bk-progress>
    </div>
    <div style="margin-bottom: 20px">
      <bk-progress
        :percent="10"
        :stroke-width="8"
        :width="48"
        color="#f56c1c"
        type="circle"
        text-inside
      />
      <bk-progress
        :percent="10"
        :stroke-width="10"
        :width="88"
        color="#ff9c01"
        type="circle"
        text-inside
      />
      <bk-progress
        :percent="10"
        :stroke-width="12"
        :width="128"
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
