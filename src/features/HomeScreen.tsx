import {Box, Image, View, Text} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from './ImageSlider';
import Exercises from './BodyParts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.screenWrapper, {paddingVertical: hp(3)}]}>
      {/* Status Bar */}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      {/* Screen Top contents */}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <Text style={styles.text}>READY TO</Text>
          <Text style={styles.textWorkout}>WORKOUT</Text>
        </Box>
        <Box paddingVertical={hp(1)} columnGap={2}>
          <View style={{width: hp(6), height: hp(6)}}>
            <Image
              source={require('../assets/img/avtar.png')}
              flex={1}
              borderRadius={50}
              alt="avtarImg"
            />
          </View>
          <View
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginTop={hp(0.3)}>
            <Icon name="circle-notifications" size={hp(6)} color="gray" />
          </View>
        </Box>
      </Box>

      {/* image slider */}
      <View marginTop={8} alignItems="center">
        <ImageSlider />
      </View>

      {/* body parts  */}
      <View marginTop="$4" flex={1}>
        <Exercises />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },

  text: {
    fontSize: hp(5),
    fontWeight: '800',
  },

  textWorkout: {
    fontSize: hp(5),
    fontWeight: '800',
    color: '#007FFF',
  },
});
