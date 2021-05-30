import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const FloatingActionButton = ({ title, position = 'br', onPress }: Props) => {

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[
          styles.fabLocation,
          (position === 'bl' ? styles.left : styles.right)
        ]}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          (position === 'bl' ? styles.left : styles.right)
        ]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return (Platform.OS === 'ios' ? ios() : android())
}

const styles = StyleSheet.create({
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5.00,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center'
  }
});