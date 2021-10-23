import React from 'react';

import { SafeAreaView } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';
import Tarea1Screen from './src/screens/Tarea1Screen';
import Tarea2Screen from './src/screens/Tarea2Screen';
import Tarea3Screen from './src/screens/Tarea3Screen';
import Tarea4Screen from './src/screens/Tarea4Screen';
import Tarea5Screen from './src/screens/Tarea5Screen';
import Tarea6Screen from './src/screens/Tarea6Screen';
import Tarea7Screen from './src/screens/Tarea7Screen';
import Tarea8Screen from './src/screens/Tarea8Screen';
import Tarea9Screen from './src/screens/Tarea9Screen';
import Tarea10Screen from './src/screens/Tarea10Screen';

export const App = () => {

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B' // Para iOS
    }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <TareaScreen /> */}
      <Tarea9Screen />
    </SafeAreaView>
  );
};