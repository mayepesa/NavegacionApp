import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/appTheme'
import { RootStackParams } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'Pagina3'>{}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.globalMargin}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a pagina 1" onPress={() => navigation.popToTop()} />

    </View>
  );
};

export default Pagina3Screen;
