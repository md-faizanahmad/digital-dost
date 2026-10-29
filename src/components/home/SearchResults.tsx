import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { Guide } from '../../types/guide';

interface SearchResultsProps {
  guides: Guide[];
  query: string;
  onSelectGuide?: (guide: Guide) => void;
}

export default function SearchResults({
  guides,
  query,
  onSelectGuide,
}: SearchResultsProps) {
  const hasQuery = query.trim().length > 0;
  const heading = guides.length
    ? hasQuery
      ? 'Learning guides'
      : 'Popular guides'
    : 'Suggested guides';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      {guides.length ? (
        <ScrollView
          style={styles.list}
          nestedScrollEnabled
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {guides.map(guide => (
            <Pressable
              key={guide.id}
              onPress={() => onSelectGuide?.(guide)}
              accessibilityRole="button"
              accessibilityLabel={`Open guide: ${guide.title}`}
              style={({ pressed }) => [
                styles.guideItem,
                pressed && styles.guideItemPressed,
              ]}
            >
              <Text style={styles.guideTitle} numberOfLines={2}>
                {guide.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No guides available yet</Text>
          <Text style={styles.emptyDescription}>
            Try another keyword, such as Instagram, YouTube, Facebook, or AI
            prompts.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  heading: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#70757A',
  },
  list: {
    maxHeight: 280,
  },
  guideItem: {
    minHeight: 54,
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 8,
  },
  guideItemPressed: {
    backgroundColor: '#F1F3F4',
  },
  guideTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#202124',
  },
  emptyState: {
    paddingVertical: 16,
    backgroundColor: '#F8F9FA',
  },
  emptyTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#202124',
  },
  emptyDescription: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 19,
    color: '#70757A',
  },
});
