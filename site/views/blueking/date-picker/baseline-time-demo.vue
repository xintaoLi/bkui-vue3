<template>
  <date-picker
    class="common-picker"
    v-model="recent"
  />
  <date-picker
    class="common-picker"
    v-model="future"
  />
  <date-picker
    class="common-picker"
    v-model="natural"
  />
  <date-picker
    class="common-picker"
    v-model="range"
  />
  <date-picker
    class="common-picker"
    v-model="range2"
  />
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  import DatePicker from '@blueking/date-picker';

  import '@blueking/date-picker/vue3/vue3.css';
  const recent = ref(['(now/d)-1d', '(now/d)']);
  const future = ref(['(now-1d/d)-1h', '(now-1d/d)']);
  const natural = ref(['(now-2d/d)-30m', '(now-2d/d)']);
  const range = ref(['(now-12d/d)-88m', '(now-12d/d)']);
  const range2 = ref(['(2024-03-11 00:20:00)-3d', '(2024-03-11 00:20:00)']);
</script>
<style>
  .common-picker {
    margin: 10px;
  }
</style>
