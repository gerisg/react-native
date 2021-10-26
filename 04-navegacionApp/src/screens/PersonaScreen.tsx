import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStakParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStakParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({ title: params!.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
