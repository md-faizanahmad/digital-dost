import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { formatDate, formatTime } from '../../utils/dateTime';
import { COLORS } from '../../theme/colors';

const headerLogo = require('../../assets/header-logo.png');

export default function Header() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000);

    return () => clearInterval(timer);
  }, []);

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 72,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
  },

  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  logo: {
    width: 54,
    height: 54,
  },

  brandText: {
    marginLeft: 5,
    flexShrink: 1,
  },

  appName: {
    fontSize: 19,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -0.5,
  },

  tagline: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },

  dateTime: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },

  time: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    fontVariant: ['tabular-nums'],
  },

  date: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
});
