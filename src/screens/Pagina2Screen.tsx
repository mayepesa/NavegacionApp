import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/core';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pagina2'> {}

const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalMargin}>Pagina2Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pagina3')}
      />
    </View>
  );
};

export default Pagina2Screen;
