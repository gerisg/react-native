import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>
        Navegar con argumentos
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }
          style={{ ...styles.bigBtn, backgroundColor: '#5856D6' }}
        >
          <Icon name="body-outline" size={30} color={'white'} />
          <Text style={styles.textBigBtn}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Susana',
            })
          }
          style={{ ...styles.bigBtn, backgroundColor: '#FF9427' }}
        >
          <Icon name="woman-outline" size={30} color={'white'} />
          <Text style={styles.textBigBtn}>Susana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
