import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { UserRound } from 'lucide-react-native';

const headerLogo = require('../../assets/header-logo.png');

type HeaderProps = {
  onProfilePress?: () => void;
};

export default function Header({ onProfilePress }: HeaderProps) {
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

      <Pressable
        onPress={onProfilePress}
        style={styles.profileButton}
        accessibilityRole="button"
        accessibilityLabel="Open profile"
        hitSlop={8}
      >
        <UserRound size={23} color="#111111" strokeWidth={1.8} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 76,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  logo: {
    width: 42,
    height: 42,
  },

  brandText: {
    marginLeft: 10,
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

  profileButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
