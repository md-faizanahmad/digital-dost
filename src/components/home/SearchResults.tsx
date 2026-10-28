import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { BookOpen } from 'lucide-react-native';

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
    <View className="mt-3 w-full">
      <Text className="mb-2 text-sm font-semibold text-neutral-700">
        {heading}
      </Text>

      {guides.length > 0 ? (
        <ScrollView
          className="max-h-64"
          nestedScrollEnabled
          keyboardShouldPersistTaps="handled"
        >
          {guides.map(guide => (
            <Pressable
              key={guide.id}
              onPress={() => onSelectGuide?.(guide)}
              accessibilityRole="button"
              className="mb-2 flex-row items-start border border-neutral-200 bg-white p-3"
            >
              <View className="mr-3 mt-0.5">
                <BookOpen size={19} color="#404040" />
              </View>

              <View className="flex-1">
                <Text className="text-sm font-semibold text-neutral-900">
                  {guide.title}
                </Text>

                <Text
                  numberOfLines={2}
                  className="mt-1 text-xs leading-5 text-neutral-600"
                >
                  {guide.description}
                </Text>

                <Text className="mt-2 text-xs text-neutral-500">
                  {guide.estimatedMinutes} min ·{' '}
                  {guide.difficulty.charAt(0).toUpperCase() +
                    guide.difficulty.slice(1)}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <View className="border border-neutral-200 bg-neutral-50 p-4">
          <Text className="text-sm font-medium text-neutral-800">
            No matching guide found
          </Text>

          <Text className="mt-1 text-xs leading-5 text-neutral-600">
            Try searching for Instagram, YouTube, Facebook, or AI prompts.
          </Text>
        </View>
      )}
    </View>
  );
}
