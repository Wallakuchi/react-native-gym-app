import React from 'react';
import HomeScreen from './features/HomeScreen';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './features/LandingScreen';
import {Navigation, ParamList} from './types/navigationTypes';
import DetailedExcerciseScreen from './features/DetailedExcerciseScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<ParamList>();
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName={Navigation.Landing}>
          <Stack.Screen
            name={Navigation.Landing}
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Navigation.Home}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Navigation.DetailedExcercise}
            component={DetailedExcerciseScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
