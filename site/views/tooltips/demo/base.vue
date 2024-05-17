<template>
  <div>
    <span
      ref="nodeRef"
      class="bk-tooltips-base"
      v-bk-tooltips="{ content: '提示信息' }"
    >
      <info />
    </span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span
      ref="nodeRef"
      class="bk-tooltips-base"
      v-bk-tooltips="{ content: '提示信息2,延迟3s', delay: 3000 }"
    >
      <info />
    </span>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { bkTooltips } from 'bkui-vue';
  import { Info } from 'bkui-vue/lib/icon';

  export default defineComponent({
    components: {
      Info,
    },
    directives: {
      bkTooltips,
    },
  });
</script>

<style lang="postcss">
  .bk-tooltips-base {
    font-size: 18px;
    color: #3a84ff;
  }
</style>
