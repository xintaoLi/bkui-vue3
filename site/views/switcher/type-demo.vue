<template>
  <div>
    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      theme="success"
      is-outline
    />
    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      size="large"
      is-outline
    />
    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      size="small"
      is-outline
    />

    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      theme="success"
      is-outline
      show-text
    />
    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      size="large"
      is-outline
      show-text
    />
    <bk-switcher
      v-model="demo1"
      :before-change="requestHandler"
      size="small"
      is-outline
      show-text
    />

    <div class="mt20">
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        theme="primary"
        is-square
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="large"
        theme="primary"
        is-square
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="small"
        theme="primary"
        is-square
      />

      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        theme="primary"
        is-square
        show-text
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="large"
        theme="primary"
        is-square
        show-text
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="small"
        theme="primary"
        is-square
        show-text
      />
    </div>

    <div class="mt20">
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        is-outline
        is-square
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="large"
        is-outline
        is-square
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        size="small"
        is-outline
        is-square
      />

      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        is-outline
        is-square
        show-text
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        is-outline
        is-square
        show-text
      />
      <bk-switcher
        v-model="demo1"
        :before-change="requestHandler"
        is-outline
        is-square
        show-text
      />
    </div>
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
      const demo1 = ref(true);
      const requestHandler = lastValue =>
        new Promise(resolve => {
          setTimeout(() => {
            console.log(lastValue);
            resolve();
          }, 1000);
        });

      return {
        demo1,
        requestHandler,
      };
    },
  });
</script>

<style scoped>
  .bk-switcher {
    margin-right: 10px;
  }

  .mt20 {
    margin-top: 20px;
  }
</style>
