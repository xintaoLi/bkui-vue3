<template>
  <div>
    <bk-button
      theme="primary"
      @click="isGray = !isGray"
    >
      切换{{ !isGray ? '灰色' : '白色' }}背景
    </bk-button>
  </div>
  <div class="exception-wrap">
    <bk-exception
      class="exception-wrap-item exception-part"
      :class="{ 'exception-gray': isGray }"
      description="你没有相应业务的访问权限，请前往申请相关业务权限"
      scene="part"
      title="没有权限"
      type="403"
    >
      <bk-button
        theme="primary"
        text
      >
        去申请
      </bk-button>
    </bk-exception>
    <bk-exception
      class="exception-wrap-item exception-part"
      :class="{ 'exception-gray': isGray }"
      description="没有数据"
      scene="part"
      type="empty"
    />
  </div>
  <div class="exception-wrap">
    <bk-exception
      class="exception-wrap-item exception-part"
      :class="{ 'exception-gray': isGray }"
      description="服务维护中"
      scene="part"
      type="500"
    />
    <bk-exception
      class="exception-wrap-item exception-part"
      :class="{ 'exception-gray': isGray }"
      description="搜索为空"
      scene="part"
      type="search-empty"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  import BkException from '@bkui-vue/exception';
  const isGray = ref(false);
</script>
<style>
  .exception-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
  }

  .exception-wrap .exception-wrap-item {
    height: 420px;
    padding-top: 22px;
    margin: 10px;
    border: 1px solid #dcdee5;
  }

  .exception-wrap-item.exception-part {
    height: 260px;
    padding-top: 48px;
    flex: 1;
  }

  .exception-wrap-item.exception-gray {
    background-color: #f5f6fa;
  }
</style>
