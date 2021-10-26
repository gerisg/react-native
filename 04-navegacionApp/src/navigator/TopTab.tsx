import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarStyle: {
          shadowColor: colors.primary,
          elevation: 0,
        },
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'call-outline';
              break;
            case 'Albums':
              iconName = 'images-outline';
              break;
          }
          return <Icon name={iconName} size={25} />;
        },
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
