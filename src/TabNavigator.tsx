import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './features/gym/HomeScreen';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={} />
      <Tab.Screen name="Settings" component={} />
    </Tab.Navigator>
  );
}
