import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MainMenu = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{ ...styles.menuOptionContainer, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={25} />
          <Text style={styles.menuOption}> Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.menuOptionContainer, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="cog-outline" size={25} />
          <Text style={styles.menuOption}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
