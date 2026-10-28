import React, { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, TextInput, View } from 'react-native';
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

  const handleClear = () => {
    setQuery('');
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {/* Search input */}
      <View
        style={[
          styles.searchInputContainer,
          isFocused && styles.searchInputFocused,
        ]}
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
          style={styles.textInput}
        />

        {hasQuery && (
          <Pressable
            onPress={handleClear}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            hitSlop={10}
            style={styles.clearButton}
          >
            <X size={19} color="#525252" />
          </Pressable>
        )}
      </View>

      {/* Search results */}
      {isFocused && (
        <View style={styles.resultsContainer}>
          <SearchResults guides={displayedGuides} query={query} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: 600,
    alignSelf: 'center',
    position: 'relative',
    zIndex: 10,
  },

  searchInputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
  },

  searchInputFocused: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A3A3A3',
  },

  textInput: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: '#171717',
  },

  clearButton: {
    width: 32,
    height: 32,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultsContainer: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
