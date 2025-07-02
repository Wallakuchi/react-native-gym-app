import React from 'react';
import TabNavigator from './TabNavigator';
import AuthNavigator from './features/auth';

export default function MainNavigator() {
  const isLogedIn = false;

  if (!isLogedIn) {
    return <AuthNavigator />;
  }
  <TabNavigator />;
}
