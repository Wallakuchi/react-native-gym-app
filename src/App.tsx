import React from 'react';
import HomeScreen from './features/HomeScreen';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  // const Stack = createNativeStackNavigator();
  return (
    <GluestackUIProvider config={config}>
      <HomeScreen />
    </GluestackUIProvider>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
