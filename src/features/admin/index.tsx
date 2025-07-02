import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminNavigation} from './navigationTypes';
import AdminScreen from './AdminScreen';

export default function AdminNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AdminNavigation.AdminScreen}
        component={AdminScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
