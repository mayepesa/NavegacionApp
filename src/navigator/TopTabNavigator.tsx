/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarPressColor: colores.primary,
        tabBarActiveTintColor: colores.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
          shadowColor: 'transparent',
          elevation: 0,
          borderTopColor: colores.primary,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'Ch';
              break;
            case 'Contacts':
              iconName = 'T2';
              break;
            case 'Albums':
              iconName = 'St';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
