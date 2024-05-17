<template>
  <div class="bk-tooltips-position-top">
    <span
      class="info mr20"
      v-bk-tooltips="{ content: '提示信息', placement: 'top-start' }"
    >
      <info />
    </span>
    <span
      class="info mr20"
      v-bk-tooltips="{ content: '提示信息', placement: 'top' }"
    >
      <info />
    </span>
    <span
      class="info"
      v-bk-tooltips="{ content: '提示信息', placement: 'top-end' }"
    >
      <info />
    </span>
  </div>

  <div class="bk-tooltips-position-center">
    <div class="bk-tooltips-position-center-left">
      <span
        class="info"
        v-bk-tooltips="{ content: '提示信息', placement: 'left' }"
      >
        <info />
      </span>
    </div>

    <div class="bk-tooltips-position-center-right">
      <span
        class="info"
        v-bk-tooltips="{ content: '提示信息', placement: 'right' }"
      >
        <info />
      </span>
    </div>
  </div>

  <div class="bk-tooltips-position-bottom">
    <span
      class="info mr20"
      v-bk-tooltips="{ content: '提示信息', placement: 'bottom-start' }"
    >
      <info />
    </span>
    <span
      class="info mr20"
      v-bk-tooltips="{ content: '提示信息', placement: 'bottom' }"
    >
      <info />
    </span>
    <span
      class="info"
      v-bk-tooltips="{ content: '提示信息', placement: 'bottom-end' }"
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
    setup() {
      const config = {
        content: '提示信息',
      };
      return {
        config,
      };
    },
  });
</script>

<style lang="postcss">
  .info {
    font-size: 18px;
    color: #3a84ff;
  }

  .mr20 {
    margin-right: 20px;
  }

  .bk-tooltips-position-center {
    margin: 10px auto;
  }

  .bk-tooltips-position-center-left {
    display: inline-block;
  }

  .bk-tooltips-position-center-right {
    display: inline-block;
    margin-left: 58px;
  }
</style>
