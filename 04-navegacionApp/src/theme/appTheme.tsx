import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigBtn: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textBigBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuOptionContainer: {
    marginVertical: 10,
  },
  menuOption: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
