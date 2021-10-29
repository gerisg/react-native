import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const TouchableIcon = ({
  name,
  size = 80,
  color = colors.primary,
}: Props) => {
  const { setFavoriteIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setFavoriteIcon(name);
      }}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
