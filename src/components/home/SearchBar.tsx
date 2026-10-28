import React, { useState } from 'react';
import { Keyboard, Pressable, TextInput, View } from 'react-native';
import { Search, X } from 'lucide-react-native';

import SearchResults from './SearchResults';
import { searchGuides } from '../../utils/searchGuides';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const hasQuery = query.trim().length > 0;
  const searchResult = searchGuides(query);

  const displayedGuides = hasQuery
    ? searchResult.results.length > 0
      ? searchResult.results
      : searchResult.suggestions
    : searchResult.suggestions;

  const shouldShowResults = isFocused;

  const handleClear = () => {
    setQuery('');
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  return (
    <View className="z-10 w-full">
      {/* Search input */}
      <View
        className={`flex-row items-center bg-neutral-100 px-4 ${
          isFocused ? 'border border-neutral-400' : 'border border-transparent'
        }`}
        style={{
          minHeight: 54,
          borderRadius: 16,
        }}
      >
        <Search
          size={21}
          color={isFocused ? '#171717' : '#737373'}
          strokeWidth={2}
        />

        <TextInput
          value={query}
          onChangeText={setQuery}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={handleSubmit}
          placeholder="Search anything you want to learn"
          placeholderTextColor="#737373"
          accessibilityLabel="Search learning guides"
          returnKeyType="search"
          autoCorrect={false}
          className="ml-3 flex-1 py-3 text-[15px] text-neutral-900"
        />

        {hasQuery && (
          <Pressable
            onPress={handleClear}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            hitSlop={10}
            className="ml-2 h-8 w-8 items-center justify-center"
          >
            <X size={19} color="#525252" />
          </Pressable>
        )}
      </View>

      {/* Search results */}
      {shouldShowResults && (
        <View
          className="mt-3 overflow-hidden border border-neutral-200 bg-white"
          style={{ borderRadius: 16 }}
        >
          <View className="px-4 pt-3">
            <SearchResults guides={displayedGuides} query={query} />
          </View>
        </View>
      )}
    </View>
  );
}
