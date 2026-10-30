import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DigitalDostLogo = require('../assets/logo.png');

export default function SettingsScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>About your app.</Text>

        {/* App Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>

          <InfoRow label="App Name" value="Digital Dost" />

          <View style={styles.infoRow}>
            <Text style={styles.label}>App Logo</Text>
            <Image
              source={DigitalDostLogo}
              style={styles.logo}
              resizeMode="contain"
              accessibilityLabel="Digital Dost app logo"
            />
          </View>
          <InfoRow label="Version" value="1.0.0" />
          <InfoRow label="Developer" value="Digital Dost Team" />
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            Digital Dost helps beginners learn digital platforms and tools
            through simple, step-by-step tutorials.
          </Text>
        </View>

        {/* Privacy Policy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Policy</Text>
          <Text style={styles.description}>
            Digital Dost does not collect or store your personal data on
            external servers. Your information stays on your device unless you
            choose to share it through other services.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
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
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 17,
    fontWeight: '600',
    color: '#111111',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  label: {
    fontSize: 14,
    color: '#666666',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222222',
  },
  logo: {
    width: 48,
    height: 48,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
  },
});
