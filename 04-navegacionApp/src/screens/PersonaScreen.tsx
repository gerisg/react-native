import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStakParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStakParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const params = route.params;
  const { setUsername } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({ title: params!.name });
  }, []);

  useEffect(() => {
    setUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
