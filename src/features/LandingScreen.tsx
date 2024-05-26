import {Box, Button, ButtonText, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ILandingScreen {
  navigation: any;
}

const LandingScreen = ({navigation}: ILandingScreen) => {
  const screenHeight = Dimensions.get('screen').height;

  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={require('../assets/img/main.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Box
          justifyContent="center"
          style={{marginTop: screenHeight / 2, paddingHorizontal: 12}}>
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
                  onPress={handleOnPress}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

export default LandingScreen;
