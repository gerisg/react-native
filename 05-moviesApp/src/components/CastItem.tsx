import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
      <View style={styles.info}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.text}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 8,
    marginLeft: 20,
    paddingRight: 15,
  },
  info: {
    marginLeft: 10,
    marginTop: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    opacity: 0.7,
  },
});
