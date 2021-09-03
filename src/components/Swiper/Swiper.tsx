import React from 'react';
import { Image, Swiper as TaroSwiper, SwiperItem, Navigator } from '@tarojs/components'

const Swiper: React.FC<any> = (props:any) => {
  return (
    <TaroSwiper
      indicatorColor={props.indicatorColor}
      indicatorActiveColor={props.indicatorActiveColor}
      vertical={props.vertical}
      circular={props.circular}
      indicatorDots={props.indicatorDots}
      autoplay={props.autoplay}
    >
      {props.list.map((item:any) => {
        return <SwiperItem>
                <Navigator
                  url={item.url}
                >
                  <Image
                    style="width:100%"
                    mode={'widthFix'}
                    src={item.src}
                  />
                </Navigator>
              </SwiperItem>;
      })}
    </TaroSwiper>
  );
}

export default Swiper;