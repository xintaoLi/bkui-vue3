<template>
  <div class="demo">
    <bk-upload
      :handle-res-code="handleRes"
      :select-change="handleSelectChange"
      :tip="'只允许上传JPG、PNG、JPEG、ZIP的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      with-credentials
      @done="handleDone"
      @error="handleError"
      @progress="handleProgress"
      @success="handleSuccess"
    />
  </div>
</template>

<script setup>
  import BkUpload from '@bkui-vue/upload';

  const handleSuccess = (file, fileList) => {
    console.log(file, fileList, 'handleSuccess');
  };
  const handleProgress = (event, file, fileList) => {
    console.log(event, file, fileList, 'handleProgress');
  };
  const handleError = (file, fileList, error) => {
    console.log(file, fileList, error, 'handleError');
  };
  const handleDone = fileList => {
    console.log(fileList, 'handleDone');
  };
  const handleRes = response => {
    console.log(response, 'handleRes');
    if (response.id) {
      return true;
    }
    return false;
  };

  const handleSelectChange = event => {
    console.log(event, 'change');
  };
</script>

<style lang="less">
  .demo {
    padding: 24px;
  }
</style>
