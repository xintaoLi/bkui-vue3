<template>
  <bk-popover
    width="490"
    :component-event-delay="300"
    :offset="16"
    placement="top"
    theme="light"
    disable-outside-click
  >
    超长
    <template #content>
      <div>
        <content-table />
      </div>
    </template>
  </bk-popover>
</template>
<script setup>
  import ContentTable from '../../table/column-template.vue';
</script>
