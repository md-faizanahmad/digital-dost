import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatDate, formatTime } from '../../utils/dateTime';
import { SafeAreaView } from 'react-native-safe-area-context';
const headerLogo = require('../../assets/header-logo.png');

export default function Header() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.brand}>
          <Image
            source={headerLogo}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Digital Dost logo"
          />

          <View style={styles.brandText}>
            <Text style={styles.appName}>Digital Dost</Text>

            <Text style={styles.tagline}>Learn. Create. Grow.</Text>
          </View>
        </View>
        <View style={styles.dateTime}>
          <Text style={styles.time}>{formatTime(now)}</Text>
          <Text style={styles.date}>{formatDate(now)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },

  container: {
    minHeight: 76,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  logo: {
    width: 62,
    height: 62,
  },

  brandText: {
    marginLeft: 3,
    flexShrink: 1,
  },

  appName: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111111',
    letterSpacing: -0.4,
  },

  tagline: {
    marginTop: 3,
    fontSize: 12,
    color: '#666666',
  },

  dateTime: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    fontVariant: ['tabular-nums'],
  },
  date: {
    marginTop: 3,
    fontSize: 10,
    color: '#666666',
  },
});
