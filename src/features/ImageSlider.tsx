import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {sliderImages} from '../constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from '@gluestack-ui/themed';

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
      slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  );
};

const ItemCard = ({item, index}) => {
  return <Text>Slider</Text>;
};

export default ImageSlider;
