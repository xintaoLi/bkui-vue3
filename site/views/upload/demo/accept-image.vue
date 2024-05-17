<template>
  <div class="demo">
    <bk-upload
      :accept="'image/png,image/jpeg,image/jpg'"
      :handle-res-code="handleRes"
      :tip="'只允许上传JPG、PNG、JPEG的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      with-credentials
    />
  </div>
</template>

<script setup>
  import BkUpload from '@bkui-vue/upload';

  const handleRes = response => {
    if (response.id) {
      return true;
    }
    return false;
  };
</script>
