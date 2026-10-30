import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <Text style={styles.subtitle}>Customize your experience.</Text>

        <Text style={styles.description}>
          Manage your language preferences, view app information, access the
          Privacy Policy, and get help using Digital Dost.
        </Text>
      </View>
    </SafeAreaView>
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
