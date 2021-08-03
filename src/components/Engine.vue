<template>
  <Render :body="body" />
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
import Render from './Render.vue';

export default {
  name: 'Engine',
  components: {
    Render
  },
  setup() {
    const state = reactive({
      body: null,
    });

    return {
      ...toRefs(state)
    }
  },
  mounted() {
    var that = this;
    Taro.request({
      url: this.initApi,
      header: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      success: function (res) {
        that.body = res.data
      }
    });
  },
  props: ['initApi']
}
</script>