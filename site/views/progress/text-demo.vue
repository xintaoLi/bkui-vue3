<template>
  <div style="width: 100%">
    <div class="mb10">
      <bk-progress
        :percent="46"
        :show-text="false"
        :stroke-width="18"
        text-inside
      />
    </div>
    <div class="mb10">
      <bk-progress
        :percent="46"
        :stroke-width="18"
        text-inside
      />
    </div>
    <div>
      <bk-progress
        :format="format"
        :percent="70"
        :stroke-width="22"
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
    setup() {
      const format = value => `自定义过滤文案：${value}`;
      return {
        format,
      };
    },
  });
</script>

<style scoped>
  .mb10 {
    margin-bottom: 10px;
  }
</style>
