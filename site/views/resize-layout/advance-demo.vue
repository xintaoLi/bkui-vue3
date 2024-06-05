<template>
  <bk-resize-layout
    style="height: 500px"
    collapsible
  >
    <template #aside>
      <bk-resize-layout
        style="height: 100%"
        :border="false"
        placement="top"
      >
        <template #aside>
          <div>aside-top</div>
        </template>
        <template #main>
          <div>main-1</div>
        </template>
      </bk-resize-layout>
    </template>
    <template #main>
      <bk-resize-layout
        style="height: 100%"
        :border="false"
        placement="bottom"
      >
        <template #aside>
          <div>aside-bottom</div>
        </template>
        <template #main>
          <div>main-2</div>
        </template>
      </bk-resize-layout>
    </template>
  </bk-resize-layout>
</template>
<script setup>
  import BkResizeLayout from '@bkui-vue/resize-layout';
</script>
