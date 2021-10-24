import React from 'react';
import { Text, View } from 'react-native';
import CalcBtn from '../components/CalcBtn';
import useCalculator from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    prevNumber,
    currentNumber,
    add,
    push,
    remove,
    clean,
    negative,
    substract,
    multiply,
    divide,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {currentNumber}
      </Text>
      <View style={styles.btnRow}>
        <CalcBtn text="C" type="default" action={clean} />
        <CalcBtn text="+/-" action={negative} />
        <CalcBtn text="del" action={remove} />
        <CalcBtn text="/" type="operator" action={divide} />
      </View>
      <View style={styles.btnRow}>
        <CalcBtn text="7" type="number" action={push} />
        <CalcBtn text="8" type="number" action={push} />
        <CalcBtn text="9" type="number" action={push} />
        <CalcBtn text="x" type="operator" action={multiply} />
      </View>
      <View style={styles.btnRow}>
        <CalcBtn text="4" type="number" action={push} />
        <CalcBtn text="5" type="number" action={push} />
        <CalcBtn text="6" type="number" action={push} />
        <CalcBtn text="-" type="operator" action={substract} />
      </View>
      <View style={styles.btnRow}>
        <CalcBtn text="1" type="number" action={push} />
        <CalcBtn text="2" type="number" action={push} />
        <CalcBtn text="3" type="number" action={push} />
        <CalcBtn text="+" type="operator" action={add} />
      </View>
      <View style={styles.btnRow}>
        <CalcBtn text="0" type="number" action={push} double />
        <CalcBtn text="." type="number" action={push} />
        <CalcBtn text="=" type="operator" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
