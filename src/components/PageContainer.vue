<template>
  <view :style="body.style">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'PageContainer',
  mounted() {
    console.log(this.body);
  },
  props: ['body','data']
}
</script>