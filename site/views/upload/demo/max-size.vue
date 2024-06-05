<template>
  <div class="demo">
    <bk-upload
      :handle-res-code="handleRes"
      :size="5"
      :tip="'最大上传5(Mb)的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      with-credentials
      @error="handleError"
    />
  </div>
</template>

<script setup>
  import BkUpload from '@bkui-vue/upload';

  const handleError = (file, fileList, error) => {
    console.log(file, fileList, error, 'handleError');
  };

  const handleRes = response => {
    if (response.id) {
      return true;
    }
    return false;
  };
</script>
