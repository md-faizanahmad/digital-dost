import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export type GuideLanguage = 'en' | 'hinglish';

interface TranslateButtonProps {
  language: GuideLanguage;
  onToggle: () => void;
}

export default function TranslateButton({
  language,
  onToggle,
}: TranslateButtonProps) {
  const isEnglish = language === 'en';

  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityLabel={isEnglish ? 'Read in Hinglish' : 'Read in English'}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>
        {isEnglish ? 'हिंग्लिश में पढ़ें' : 'Read in English'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
});
