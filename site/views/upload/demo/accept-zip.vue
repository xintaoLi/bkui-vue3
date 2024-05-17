<template>
  <div class="demo">
    <bk-upload
      :accept="'.zip'"
      :handle-res-code="handleRes"
      :tip="'只允许上传ZIP的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      with-credentials
    />
  </div>
</template>

<script setup>
  import BkUpload from '@bkui-vue/upload';
  const handleRes = response => {
    console.log(response, 'handleRes');
    if (response.id) {
      return true;
    }
    return false;
  };
</script>
