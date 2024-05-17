<template>
  <div class="demo">
    <bk-upload
      ref="uploader"
      :files="files"
      :handle-res-code="handleRes"
      :size="5"
      :tip="'最大上传5(Mb)的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      theme="button"
      with-credentials
    >
      <template #file="{ file }">
        <div>
          {{ file.name }}
          <a
            class="action-link"
            href="javascrip:;"
            @click.stop.prevent="handleRemove(file)"
            >删除</a
          >
          <a
            v-if="file.status === 'fail'"
            class="action-link"
            href="javascrip:;"
            @click="handleRetry(file)"
            >重试</a
          >
        </div>
      </template>
    </bk-upload>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import BkUpload from '@bkui-vue/upload';

  const uploader = ref(null);

  const files = [
    {
      name: 'test.ppt',
    },
  ];

  const handleRemove = file => {
    uploader.value?.handleRemove(file);
  };

  const handleRetry = file => {
    uploader.value?.handleRetry(file);
  };

  const handleRes = response => {
    if (response.id) {
      return true;
    }
    return false;
  };
</script>

<style scoped>
  .action-link {
    margin: 4px;
  }
</style>
