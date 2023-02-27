import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      //Si el ancho de la pantalla del movil es mayor a 768 entonces que el menu lateral sea fijo/permanente
      screenOptions={{drawerType: width > 768 ? 'permanent' : 'front'}}
      //desestructuramos las props
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      
      {/*Parte del avatar */ }
      <View style={styles.avatarContainer}>
        <Image
          source={{
            //acá no se ve nada con solo la uri porque por defecto las imagenes tienen 0 pixeles de ancho y alto
            uri: 'https://www.lattimer.com/es/images/uploads/content/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

          {/*Opciones de menu */}
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>Navigation Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>Settings</Text>
            </TouchableOpacity>
          </View>

    </DrawerContentScrollView>
  );
};
