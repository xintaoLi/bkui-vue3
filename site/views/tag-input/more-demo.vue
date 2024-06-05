<template>
  <div>
    <bk-tag-input
      v-model="state.tags"
      :list="state.list"
      :search-key="searchKey"
      :tpl="tpl"
      display-key="username"
      placeholder="请输入 username 或 nickname"
      save-key="username"
    />
    <p>请输入 J 或 杰 来体验下搜索效果</p>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  const searchKey = ['username', 'nickname'];
  const state = reactive({
    tags: [],
    list: [
      { username: 'Jack', nickname: '杰克' },
      { username: 'Json', nickname: '杰森' },
      { username: 'Jane', nickname: '简' },
      { username: 'Arman', nickname: '阿尔曼' },
    ],
  });
  const tpl = (node, highlightKeyword, h) => {
    const innerHTML = `${highlightKeyword(node.username)} (${node.nickname})`;
    return h('div', { class: 'bk-selector-node' }, [
      h('span', {
        class: 'text',
        innerHTML,
      }),
    ]);
  };
</script>
