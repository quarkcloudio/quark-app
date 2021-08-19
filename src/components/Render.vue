<template>
  <view v-if="typeof body === 'string' || typeof body === 'number'">
    {{body}}
  </view>
  <view v-else-if="body?.hasOwnProperty?.('component')">
    <view v-if="body.component === 'page'">
      <PageContainer :style="body?.style">
        <Render :body="body.body" />
      </PageContainer>
    </view>
    <view v-else-if="body.component === 'navbar'">
      <Navbar 
        @on-click-back="back()"
        :title="body?.title" 
        :icon="body?.icon" 
        :desc="body?.desc"
        :left-show="body?.leftShow"
        :tit-icon="body?.titleIcon"
      />
    </view>
    <view v-else-if="body.component === 'swiper'">
      <Swiper />
    </view>
  </view>
  <view v-else>
    <view v-for="(item,index) in body" :key="index">
      <Render :body="item" />
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
import PageContainer from './PageContainer.vue';
import Swiper from './Swiper.vue';
import { Navbar } from '@nutui/nutui-taro';

export default {
  name: 'Render',
  components: {
    PageContainer,
    Navbar,
    Swiper
  },
  methods: {
    back() {
      Taro.navigateBack({
        delta: 1
      })
    },
  },
  props: ['body']
}
</script>