import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';
export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1 effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalMargin}> Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="attach-outline" size={80} color={colores.primary} />
        <Icon name="bonfire-outline" size={80} color={colores.primary} />
        <Icon name="calculator-outline" size={80} color={colores.primary} />
        <Icon name="chatbubble-outline" size={80} color={colores.primary} />
        <Icon name="images-outline" size={80} color={colores.primary} />
        <Icon name="leaf-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
