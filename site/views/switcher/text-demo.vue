<template>
  <div>
    <bk-switcher
      v-model="demo1"
      false-value="b"
      true-value="a"
      @change="handleChange"
    />
    <bk-switcher
      v-model="demo1"
      false-value="b"
      off-text="假值"
      true-value="a"
      show-text
      on-text="真值"
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';

  import BkSwitcher from '@bkui-vue/switcher';

  export default defineComponent({
    name: 'SiteBkSwitcher',
    components: {
      BkSwitcher,
    },
    setup() {
      const demo1 = ref('a');
      const handleChange = value => {
        console.log(value);
      };
      return {
        demo1,
        handleChange,
      };
    },
  });
</script>

<style scoped>
  .bk-switcher {
    margin-right: 10px;
  }
</style>
