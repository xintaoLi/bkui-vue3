<template>
  <bk-animate-number
    :digits="2"
    :value="numValue"
  />
  <bk-button @click="handleClick"> + </bk-button>
</template>

<script setup>
  import { ref } from 'vue';

  const numValue = ref(20.75);

  const handleClick = () => {
    numValue.value += 20;
  };
</script>
