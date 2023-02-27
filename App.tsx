import 'react-native-gesture-handler';
import React from 'react';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App