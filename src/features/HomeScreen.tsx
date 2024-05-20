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

const HomeScreen = () => {
  const screenHeight = Dimensions.get('screen').height;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={require('../assets/img/main.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Box
          h="$80"
          justifyContent="center"
          style={{marginTop: screenHeight / 2}}>
          <VStack space="xs" reversed={false}>
            <Text style={styles.text}>
              Stay health even if you stay at home
            </Text>
            <Text style={styles.textSmall}>
              Staying fit to keep you in good condition can now go through
              mobile apps
            </Text>
            <Box style={styles.btnWraper}>
              <Button
                size="xl"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={styles.btn}>
                <ButtonText>Enter</ButtonText>
              </Button>
            </Box>
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
    fontSize: 42,
    lineHeight: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
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

export default HomeScreen;
