import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Tarea6Screen() {
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
  },
  cajaAzul: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    flex: 1
  },
  cajaNaranja: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    flex: 1
  },
  cajaCeleste: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    flex: 2
  }
})
