import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// Este dimensionamiento es más rápido pero no se actualiza al girar la pantalla
// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

  // Este dimensionamiento se actualiza al girar la pantalla
  const { width, height } = useWindowDimensions()

  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.cajaAzul,
          width: width * .2
        }}>
        </View>
        <View style={styles.cajaNaranja}>
        </View>
      </View>
      <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%'
  },
  cajaAzul: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 30,
    color: 'yellow'
  }
});