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

  const heading = hasQuery
    ? guides.length > 0
      ? 'Learning guides'
      : 'You might like these'
    : 'Popular guides';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      {guides.length > 0 ? (
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
          <Text style={styles.emptyTitle}>No matching guide found</Text>

          <Text style={styles.emptyDescription}>
            Try searching for Instagram, YouTube, Facebook, or AI prompts.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container: occupies the full width of the search bar.
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },

  // Section heading: labels the list as learning guides or suggestions.
  heading: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#70757A',
  },

  // Scrollable list: limits the height when many guides match.
  list: {
    maxHeight: 280,
  },

  // Individual result: provides vertical spacing around each guide title.
  guideItem: {
    minHeight: 54,
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 8,
  },

  // Pressed result: gives subtle feedback when a guide is tapped.
  guideItemPressed: {
    backgroundColor: '#F1F3F4',
  },

  // Guide title: displays only the guide name in Google-style typography.
  guideTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#202124',
  },

  // Empty state container: adds spacing when no guides are available.
  emptyState: {
    paddingVertical: 16,
    backgroundColor: '#F8F9FA',
  },

  // Empty state title: displays the no-results message.
  emptyTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#202124',
  },

  // Empty state description: explains how to find other guides.
  emptyDescription: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 19,
    color: '#70757A',
  },
});
