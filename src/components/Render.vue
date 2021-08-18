<template>
  <view v-if="typeof body === 'string' || typeof body === 'number'">
    {{body}}
  </view>
  <view v-else-if="body.hasOwnProperty('component')">
    <view v-if="body.component === 'page'">
      <PageContainer>
        <Render :body="body.body" />
      </PageContainer>
    </view>
  </view>
  <view v-else>
    <view v-for="(item,index) in body " :key="index">
      <Render :body="item" />
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, h } from 'vue';
import Taro from '@tarojs/taro';
import PageContainer from './PageContainer.vue';

export default {
  name: 'Render',
  props: ['body']
}
</script>