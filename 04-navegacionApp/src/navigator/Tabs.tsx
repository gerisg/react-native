import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTab } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopColor: colors.primary,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'gift-outline';
              break;
            case 'Tab2Screen':
              iconName = 'pricetags-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }
          return <Icon name={iconName} size={size} style={{ color }} />;
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={TopTab}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'gift-outline';
              break;
            case 'Tab2Screen':
              iconName = 'pricetags-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }
          return <Icon name={iconName} size={25} style={{ color }} />;
        },
      })}
    >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={TopTab}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
