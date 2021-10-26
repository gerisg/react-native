import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainMenu } from './src/navigator/MainMenu';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MainMenu />
    </NavigationContainer>
  );
};

export default App;
