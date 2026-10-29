import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/layouts/Header';
import Greeting from '../components/home/Greeting';
import SearchBar from '../components/home/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Greeting />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
