<template>
  <div class="demo">
    <bk-upload
      :files="files"
      :handle-res-code="handleRes"
      :size="5"
      :tip="'最大上传5(Mb)的文件'"
      :url="'https://jsonplaceholder.typicode.com/posts/'"
      theme="button"
      with-credentials
    />
  </div>
</template>

<script setup>
  import BkUpload from '@bkui-vue/upload';

  const files = [
    {
      name: 'test.ppt',
    },
  ];

  const handleRes = response => {
    if (response.id) {
      return true;
    }
    return false;
  };
</script>
