import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/layouts/Header';
import Greeting from '../components/home/Greeting';
import SearchBar from '../components/home/SearchBar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Greeting />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
