import React from 'react';
import { Image, Swiper as TaroSwiper, SwiperItem } from '@tarojs/components';
import './Swiper.scss'

const Swiper: React.FC<any> = (props:any) => {
  return (
    <TaroSwiper
      className="swiper"
      indicatorColor={props.indicatorColor}
      indicatorActiveColor={props.indicatorActiveColor}
      vertical={props.vertical}
      circular={props.circular}
      indicatorDots={props.indicatorDots}
      autoplay={props.autoplay}
    >
      {props.list.map((item:any, index:any) => {
        return <SwiperItem
                className="swiper-item"
                key={index}
              >
                <Image
                  style="width:100%"
                  mode={'widthFix'}
                  src={item.src}
                />
              </SwiperItem>;
      })}
    </TaroSwiper>
  );
}

export default Swiper;