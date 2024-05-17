<template>
  <div>
    <bk-steps
      class="mb20"
      :cur-step="2"
      status="error"
    />

    <bk-steps
      class="mb20"
      :cur-step="2"
      status="loading"
    />
  </div>
</template>
<style>
  .mb20 {
    margin-bottom: 20px;
  }
</style>
