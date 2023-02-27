import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    
      //Si el ancho de la pantalla del movil es mayor a 768 entonces que el menu lateral sea fijo/permanente
      screenOptions={{drawerType: width > 768 ? 'permanent' : 'front'}}
      //desestructuramos las props
      drawerContent={props => <MenuInterno {...props} />}> 
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      {/* Acá estoy agregando las nuevas tabs al drawer para el bottom navigator */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Parte del avatar */}
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
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuTexto}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
