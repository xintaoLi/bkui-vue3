<template>
  <bk-swiper
    class="swiper"
    :height="400"
    :loop-time="6000"
    :pics="picList"
  />
</template>

<script setup>
  import firstSwiper from '../../imgs/firstswiper.jpg';
  import secondSwiper from '../../imgs/secondswiper.jpg';

  const picList = [
    { url: firstSwiper, link: 'https://www.npmjs.com/package/bkui-vue' },
    { url: secondSwiper },
    { url: firstSwiper, link: 'https://www.npmjs.com/package/bkui-vue' },
    { url: secondSwiper },
    { url: firstSwiper, link: 'https://www.npmjs.com/package/bkui-vue' },
    { url: secondSwiper },
    { url: firstSwiper, link: 'https://www.npmjs.com/package/bkui-vue' },
    { url: secondSwiper },
  ];
</script>
