import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}
    >
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.title}>{JSON.stringify(authState, null, 3)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
