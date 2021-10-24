import { useRef, useState } from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');
  const operator = useRef<Operators>();

  const clean = () => {
    setCurrentNumber('0');
    setPrevNumber('0');
  };

  const divide = () => {
    pushNumber();
    operator.current = Operators.divide;
  };

  const multiply = () => {
    pushNumber();
    operator.current = Operators.multiply;
  };

  const add = () => {
    pushNumber();
    operator.current = Operators.add;
  };

  const substract = () => {
    pushNumber();
    operator.current = Operators.substract;
  };

  /** Add a digit */
  const push = (newNumber: string) => {
    // No aceptar múltiples puntos
    if (currentNumber.includes('.') && newNumber === '.') {
      return;
    }
    // No concatenar ceros al inicio
    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      // Punto decimal
      if (newNumber === '.') {
        setCurrentNumber(currentNumber + newNumber);
      } else if (newNumber === '0' && currentNumber.includes('.')) {
        // Es cero seguido de punto
        setCurrentNumber(currentNumber + newNumber);
      } else if (newNumber !== '0' && !currentNumber.includes('.')) {
        // Diferente de cero y no tiene punto
        setCurrentNumber(newNumber);
      } else if (newNumber === '0' && !currentNumber.includes('.')) {
        // Evitar múltiples ceros al inicio
        setCurrentNumber(currentNumber);
      } else {
        setCurrentNumber(currentNumber + newNumber);
      }
    } else {
      setCurrentNumber(currentNumber + newNumber);
    }
  };

  /** Add / Remove negative */
  const negative = () => {
    if (currentNumber.includes('-')) {
      setCurrentNumber(currentNumber.replace('-', ''));
    } else {
      setCurrentNumber('-' + currentNumber);
    }
  };

  /** Remove the last number pushed */
  const remove = () => {
    const updated = currentNumber.slice(0, -1);
    if (!updated || updated === '-') {
      setCurrentNumber('0');
    } else {
      setCurrentNumber(updated);
    }
  };

  const pushNumber = () => {
    if (currentNumber.endsWith('.')) {
      setPrevNumber(currentNumber.slice(0, -1));
    } else {
      setPrevNumber(currentNumber);
    }
    setCurrentNumber('0');
  };

  const calculate = () => {
    const num1 = Number(currentNumber);
    const num2 = Number(prevNumber);
    switch (operator.current) {
      case Operators.divide:
        setCurrentNumber(`${num2 / num1}`);
        break;
      case Operators.multiply:
        setCurrentNumber(`${num1 * num2}`);
        break;
      case Operators.substract:
        setCurrentNumber(`${num2 - num1}`);
        break;
      case Operators.add:
        setCurrentNumber(`${num1 + num2}`);
        break;
    }
    setPrevNumber('0');
  };

  return {
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
  };
};

export default useCalculator;
