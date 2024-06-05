<template>
  <div class="basic-button-list">
    <bk-button>
      <plus class="f22" />
      新增
    </bk-button>
    <bk-button
      class="ml10"
      theme="primary"
    >
      下拉
      <angle-down class="f22" />
    </bk-button>
    <bk-button class="ml10">
      <search class="f22" />
    </bk-button>
    <bk-button
      class="ml10"
      theme="primary"
      circle
    >
      <search class="f22" />
    </bk-button>
    <bk-button class="ml10">
      <loading
        class="mr6"
        mode="spin"
        size="mini"
        loading
      />
      loading
    </bk-button>
    <bk-button
      class="ml10"
      loading
    />
    <bk-button
      class="ml10"
      theme="primary"
      loading
    />
    <bk-button
      class="ml10"
      loading-mode="spin"
      loading
    />
    <bk-button
      class="ml10"
      loading-mode="spin"
      theme="primary"
      loading
    />
  </div>
</template>

<script setup>
  import { Loading } from 'bkui-vue';
  import { AngleDown, Plus, Search } from 'bkui-vue/lib/icon';
</script>

<style lang="postcss">
  .ml10 {
    margin-left: 10px;
  }

  .mr6 {
    margin-right: 6px;
  }

  .f22 {
    font-size: 22px;
  }
</style>
