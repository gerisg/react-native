import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Tarea7Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaAzul} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaCeleste} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaCeleste: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  }
})
