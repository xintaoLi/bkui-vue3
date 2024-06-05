<template>
  <div ref="box">
    <div style="border: 1px solid #ccc; height: 50px">
      <div
        class="bk-tooltips-base"
        v-bk-tooltips="{ content: '提示信息', boundary: 'parent' }"
      >
        <info />
      </div>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div
      class="bk-tooltips-base"
      v-bk-tooltips="{ content: '提示信息2,延迟3s', boundary: box }"
    >
      <info />
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';

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
      const box = ref(null);
      const demo = ref(null);
      return {
        box,
        demo,
      };
    },
  });
</script>

<style lang="postcss">
  .bk-tooltips-base {
    font-size: 18px;
    color: #3a84ff;
  }
</style>
