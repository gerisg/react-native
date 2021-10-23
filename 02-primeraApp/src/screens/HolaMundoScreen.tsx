import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'red',
        }}>
        Hola Gerardo
      </Text>
    </View>
  )
}
