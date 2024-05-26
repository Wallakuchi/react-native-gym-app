import React from 'react';
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {sliderImages} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View} from '@gluestack-ui/themed';

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{
        display: 'flex',
        alignItems: 'center',
      }}
    />
  );
};

const ItemCard = (
  item: {item: any; index: number},
  parallaxProps?: AdditionalParallaxProps,
) => {
  return (
    <View style={{width: wp(100) - 70, height: hp(30)}}>
      <ParallaxImage
        source={item.item}
        containerStyle={{borderRadius: 30, flex: 1}}
        style={{resizeMode: 'contain'}}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

export default ImageSlider;
