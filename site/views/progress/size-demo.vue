<template>
  <div style="width: 100%">
    <div>
      <div class="mb10">
        <bk-progress
          :percent="0"
          :size="'small'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="28"
          :size="'small'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="46"
          :size="'small'"
          :theme="'warning'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="73"
          :size="'small'"
          :theme="'danger'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="90"
          :size="'small'"
          :theme="'success'"
        />
      </div>
    </div>
    <div>
      <div class="mb10">
        <bk-progress
          :percent="0"
          :size="'large'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="28"
          :size="'large'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="46"
          :size="'large'"
          :theme="'warning'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="73"
          :size="'large'"
          :theme="'danger'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="90"
          :size="'large'"
          :theme="'success'"
        />
      </div>
      <div class="mb10">
        <bk-progress
          :percent="90"
          :stroke-width="20"
          :theme="'success'"
        />
      </div>
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
</style>
