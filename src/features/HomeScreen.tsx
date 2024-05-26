import {Box, Image, View, Text} from '@gluestack-ui/themed';
import React from 'react';
import {
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from './ImageSlider';
import BodyParts from './BodyParts';

const styles = StyleSheet.create({
  screenWrapper: {flex: 1, backgroundColor: 'white', paddingHorizontal: 12},
  text: {fontSize: hp(5), fontWeight: '800'},
  textWorkout: {fontSize: hp(5), fontWeight: '800', color: '#007FFF'},
});

const HomeScreen = () => {
  const {StatusBarManager} = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 24 : StatusBarManager.HEIGHT;

  return (
    <SafeAreaView
      style={[styles.screenWrapper, {paddingVertical: STATUSBAR_HEIGHT + 6}]}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
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
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
