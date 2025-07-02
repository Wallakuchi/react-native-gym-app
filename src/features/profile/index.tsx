import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import {ParamList, authNavigation} from './navigationTypes';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<ParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigation.Landing}
        component={LandingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
