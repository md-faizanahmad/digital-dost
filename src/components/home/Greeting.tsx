import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  getGreeting,
  getGreetingName,
  GREETING_HOOKS,
  getNextHookIndex,
} from '../../utils/greeting';

type GreetingProps = {
  username?: string | null;
};

export default function Greeting({ username }: GreetingProps) {
  const [now, setNow] = useState(() => new Date());
  const [hookIndex, setHookIndex] = useState(0);

  // Keep the greeting updated when the time period changes.
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => clearInterval(timer);
  }, []);

  // Rotate the catchy hook every 8 seconds.
  useEffect(() => {
    if (GREETING_HOOKS.length <= 1) return;

    const timer = setInterval(() => {
      setHookIndex(currentIndex =>
        getNextHookIndex(currentIndex, GREETING_HOOKS.length),
      );
    }, 8_000);

    return () => clearInterval(timer);
  }, []);

  const greeting = getGreeting(now);
  const name = getGreetingName(username);
  const hook = GREETING_HOOKS[hookIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {greeting}, {name}
        <Text style={styles.wave}> {'\u{1F44B}'}</Text>
      </Text>

      <Text style={styles.hook} accessibilityLiveRegion="polite">
        {hook}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111111',
    letterSpacing: -0.5,
  },
  wave: {
    fontSize: 21,
  },
  hook: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#666666',
  },
});
