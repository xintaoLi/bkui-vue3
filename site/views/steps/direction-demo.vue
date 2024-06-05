<template>
  <div style="height: 400px">
    <bk-steps
      class="mb5"
      :line-type="state.lineType"
    />
    <bk-steps direction="vertical" />
  </div>
</template>
<script>
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        lineType: 'solid',
      });
      return {
        state,
      };
    },
  });
</script>
<style>
  .mb5 {
    margin-bottom: 5px;
  }
</style>
