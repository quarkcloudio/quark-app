<template>
  <Engine :initApi="initApi" />
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import Engine from '../../components/Engine.vue';

export default {
  name: 'Index',
  components: {
    Engine
  },
  setup(){
    const state = reactive({
      initApi: '/api/app/initData',
    });

    return {
      ...toRefs(state)
    }
  }
}
</script>
