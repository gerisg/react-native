import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color={colors.primary} />
        <Icon name="images-outline" size={30} color={colors.primary} />
        <Icon name="calculator-outline" size={30} color={colors.primary} />
        <Icon name="chatbubble-outline" size={30} color={colors.primary} />
        <Icon name="images-outline" size={30} color={colors.primary} />
        <Icon name="leaf-outline" size={30} color={colors.primary} />
      </Text>
    </View>
  );
};
