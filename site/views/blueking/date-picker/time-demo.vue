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
  const recent = ref(['now-2d', 'now']);
  const future = ref(['now', 'now+2d']);
  const natural = ref(['now-1w/w', 'now-1w/w']);
  const range = ref(['2024-03-11 00:20:00', 'now']);
  const range2 = ref(['2024-03-11 00:20:00', '2024-06-11 00:20:00']);
</script>
<style>
  .common-picker {
    margin: 10px;
  }
</style>
