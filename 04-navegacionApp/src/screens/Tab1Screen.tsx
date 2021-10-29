import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="images-outline" />
        <TouchableIcon name="calculator-outline" />
        <TouchableIcon name="chatbubble-outline" />
        <TouchableIcon name="images-outline" />
        <TouchableIcon name="leaf-outline" />
      </Text>
    </View>
  );
};
