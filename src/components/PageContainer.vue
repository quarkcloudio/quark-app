<template>
  <Render :body="body" :data="data" />
</template>

<script lang="ts">
import Render from './Render.vue';

export default {
  name: 'PageContainer',
  components: {
    Render
  },
  mounted() {
    console.log(this.body);
  },
  props: ['body','data']
}
</script>