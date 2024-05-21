import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  screenWrapper: {flex: 1, backgroundColor: 'white'},
  textWraper: {paddingHorizontal: 12},
  text: {fontSize: hp(4.5), fontWeight: '800'},
  textWorkout: {fontSize: hp(4.5), fontWeight: '800', color: '#007FFF'},
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
      <Box style={styles.textWraper}>
        <Text style={styles.text}>READY TO</Text>
        <Text style={styles.textWorkout}>WORKOUT</Text>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
