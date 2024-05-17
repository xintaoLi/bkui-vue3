<template>
  <div class="common-picker-wrapper">
    <span>可选范围: 今天（now/d ~ now/d）</span>
    <date-picker
      key="1"
      class="common-picker"
      v-model="recent"
      :valid-date-range="['now/d', 'now/d']"
    />
    <span>可选范围: 本周（now/w ~ now/w）</span>
    <date-picker
      key="2"
      class="common-picker"
      v-model="future"
      :valid-date-range="['now/w', 'now/w']"
    />
    <span>可选范围: 本月（now/M ~ now/M）</span>
    <date-picker
      key="3"
      class="common-picker"
      v-model="natural"
      :valid-date-range="['now/M', 'now/M']"
    />
    <span>可选范围: 今年（now/y ~ now/y）</span>
    <date-picker
      key="4"
      class="common-picker"
      v-model="range"
      :valid-date-range="['now/y', 'now/y']"
    />
    <span>可选范围: 特定的一个时间段（2024-03-11 00:20:00 ~ 2025-02-11 00:20:00）</span>
    <date-picker
      class="common-picker"
      v-model="range2"
      :valid-date-range="['2024-03-11 00:20:00', '2025-02-11 00:20:00']"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  import DatePicker from '@blueking/date-picker';

  import '@blueking/date-picker/vue3/vue3.css';
  const recent = ref(['now-10m', 'now']);
  const future = ref(['now', 'now+2d']);
  const natural = ref(['now-2d/d', 'now-2d/d']);
  const range = ref(['2024-03-11 00:20:00', 'now']);
  const range2 = ref(['2024-03-11 00:20:00', '2024-06-11 00:20:00']);
</script>
<style lang="less">
  .common-picker-wrapper {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: bold;
      color: #333;
    }

    .common-picker {
      display: flex;
      width: fit-content;
      margin: 2px 0 15px;
    }
  }
</style>
