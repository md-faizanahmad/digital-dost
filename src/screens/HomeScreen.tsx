import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/layouts/Header';
import Greeting from '../components/home/Greeting';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Greeting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
