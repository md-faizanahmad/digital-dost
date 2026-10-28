import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native';
import { BookOpen, Search, X } from 'lucide-react-native';

import { searchGuides } from '../../utils/searchGuides';
import type { Guide } from '../../types/guide';

interface SearchBarProps {
  onSelectGuide?: (guide: Guide) => void;
}

export default function SearchBar({ onSelectGuide }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchResult = searchGuides(query);
  const hasQuery = query.trim().length > 0;
  const shouldShowResults = isFocused || hasQuery;

  const displayedGuides = hasQuery
    ? searchResult.results
    : searchResult.suggestions;

  const handleClear = () => {
    setQuery('');
  };

  const handleSelectGuide = (guide: Guide) => {
    onSelectGuide?.(guide);
    setIsFocused(false);
  };

  return (
    <View className="w-full">
      <View
        className={`flex-row items-center border bg-white px-4 ${
          isFocused ? 'border-neutral-900' : 'border-neutral-200'
        }`}
        style={{ minHeight: 52 }}
      >
        <Search size={20} color="#737373" />

        <TextInput
          value={query}
          onChangeText={setQuery}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="What do you want to learn?"
          placeholderTextColor="#737373"
          accessibilityLabel="Search learning guides"
          returnKeyType="search"
          className="ml-3 flex-1 py-3 text-base text-neutral-900"
        />

        {query.length > 0 && (
          <Pressable
            onPress={handleClear}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            hitSlop={10}
            className="p-1"
          >
            <X size={18} color="#737373" />
          </Pressable>
        )}
      </View>

      {shouldShowResults && (
        <View className="mt-3">
          <Text className="mb-2 text-sm font-semibold text-neutral-700">
            {hasQuery
              ? searchResult.results.length > 0
                ? 'Learning guides'
                : 'You might like these'
              : 'Popular guides'}
          </Text>

          {displayedGuides.length > 0 ? (
            <ScrollView
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled
              className="max-h-64"
            >
              {displayedGuides.map(guide => (
                <Pressable
                  key={guide.id}
                  onPress={() => handleSelectGuide(guide)}
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
      )}
    </View>
  );
}
