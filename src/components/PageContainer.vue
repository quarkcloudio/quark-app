<template>
  <view :style="style">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'PageContainer',
  mounted() {

  },
  props: ['style']
}
</script>