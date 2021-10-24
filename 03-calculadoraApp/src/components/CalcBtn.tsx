import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string;
  type?: 'number' | 'operator' | 'default';
  double?: boolean;
  action: (textNumber: string) => void;
}

const CalcBtn = ({ text, type = 'default', double = false, action }: Props) => {
  let getColor = () => {
    return type === 'default' ? 'black' : 'white';
  };

  let getWidth = () => {
    return double ? 160 : 80;
  };

  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.numberBtn,
          ...styles[type],
          width: getWidth(),
        }}
      >
        <Text
          style={{
            ...styles.numberBtnText,
            color: getColor(),
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  number: { backgroundColor: '#2D2D2D' },
  operator: { backgroundColor: '#FF9427' },
  default: { backgroundColor: '#9B9B9B' },
  numberBtn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  numberBtnText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
  },
});

export default CalcBtn;
