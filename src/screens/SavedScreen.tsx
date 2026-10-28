import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved</Text>

      <Text style={styles.subtitle}>Your learning collection.</Text>

      <Text style={styles.description}>
        Bookmark useful tutorials and digital resources to access them whenever
        you need them.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#444444',
  },
  description: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
  },
});
