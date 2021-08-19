<template>
  <swiper
    indicator-color='#999'
    indicator-active-color='#333'
    :vertical="false"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item class='swiper-item'>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </swiper-item>
    <swiper-item class='swiper-item'>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </swiper-item>
    <swiper-item class='swiper-item'>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </swiper-item>
  </swiper>
</template>

<style scoped>
  .swiper-item img{
    width: 100%;
  }
</style>

<script lang="ts">

export default {
  name: 'Swiper',
  props: ['current','indicator-dots','indicator-color','autoplay','interval','list']
}
</script>