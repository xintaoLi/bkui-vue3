<template>
  <div>
    <bk-pop-confirm
      width="288"
      title="确认删除该脚本？"
      trigger="click"
      @confirm="ensure"
    >
      <bk-button>嵌入Select</bk-button>
      <template #content>
        <bk-select
          :list="list"
          :popover-options="{ boundary: 'parent' }"
        />
      </template>
    </bk-pop-confirm>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {},
    setup() {
      const list = ref([
        {
          label: '爬山',
          value: 1,
        },
        {
          label: '跑步',
          value: 2,
        },
      ]);
      function ensure() {
        console.log('ensure');
      }
      return {
        ensure,
        list,
      };
    },
  });
</script>
