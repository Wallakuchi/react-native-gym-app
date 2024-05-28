import React, {useCallback} from 'react';
import {Box, Button, ButtonText, VStack} from '@gluestack-ui/themed';
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Navigation, useScreenNavigation} from '../types/navigationTypes';

const LandingScreen = () => {
  const navigation = useScreenNavigation();

  const getStartedButton = useCallback(() => {
    navigation.navigate(Navigation.Home);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.landingScreenContainer}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/img/main.jpg')}
        resizeMode="cover"
        style={styles.backgroundImageStyle}>
        <Box justifyContent="center" style={styles.ContentOnBgImage}>
          <VStack space="xs" reversed={false}>
            <Animated.View entering={FadeInDown.delay(100).springify()}>
              <Text style={styles.text}>
                Stay health even if you stay at home
              </Text>
              <Text style={styles.textSmall}>
                Staying fit to keep you in good condition can now go through
                mobile apps
              </Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).springify()}>
              <Box style={styles.btnWraper}>
                <Button
                  size="xl"
                  variant="solid"
                  action="primary"
                  isDisabled={false}
                  isFocusVisible={false}
                  style={styles.btn}
                  onPress={getStartedButton}>
                  <ButtonText>Get Started</ButtonText>
                </Button>
              </Box>
            </Animated.View>
          </VStack>
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  landingScreenContainer: {
    flex: 1,
  },

  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  ContentOnBgImage: {
    marginTop: hp(50),
    paddingHorizontal: 12,
  },

  text: {
    color: 'white',
    fontSize: hp(4.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSmall: {
    color: 'white',
    fontSize: hp(2.5),
    marginTop: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnWraper: {
    alignItems: 'center',
    padding: 12,
  },
  btn: {
    width: 196,
  },
});
