import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1: undefined;
  Pagina2: undefined;
  Pagina3: undefined;
  PersonaScreen: {id: number, nombre: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pagina1'
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
