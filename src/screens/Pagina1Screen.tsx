// import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<RootStackParams, 'Pagina1'> {}

interface Props extends DrawerScreenProps<RootStackParams, 'Pagina1'> {}


const Pagina1Screen = ({navigation}: Props) => {
 

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'red'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
