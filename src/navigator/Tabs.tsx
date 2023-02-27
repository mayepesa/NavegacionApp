import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () =>  {
  return (
    <Tab.Navigator

    screenOptions={{
      tabBarActiveTintColor: colores.primary,
      tabBarStyle:{
        borderTopColor: colores.primary,
        // borderTopWidth: 0
      }
    }}
    >
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      {/* aca estoy poniendo el stack en lugar de tab 3 screen  */}
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};
