import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaAzul} />
      <View style={styles.cajaNaranja} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    // top: 300,
    // left: 300
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0
    // Si no tiene width / heigh, lo anterior es reemplazado por:
    ...StyleSheet.absoluteFillObject
  }
});