import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
  const {
    colors: { primary, secondary },
    prevColors: { primary: prevPrimary, secondary: prevSecondary },
    setPrevMainColors,
  } = useContext(GradientContext);

  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors({ primary, secondary });
      fadeOut(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, secondary]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevPrimary, prevSecondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: opacity,
        }}
      >
        <LinearGradient
          colors={[primary, secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
