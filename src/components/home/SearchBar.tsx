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

  const handleDismiss = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  return (
    <View style={styles.wrapper}>
      {/* Transparent backdrop: dismisses results when tapped outside. */}
      {isFocused && (
        <Pressable
          style={styles.backdrop}
          onPress={handleDismiss}
          accessibilityLabel="Close search results"
        />
      )}

      {/* Search input and results remain above the backdrop. */}
      <View style={styles.container}>
        {/* Search input */}
        <View
          style={[
            styles.searchInputContainer,
            isFocused && styles.searchInputFocused,
          ]}
        >
          <TextInput
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onSubmitEditing={handleSubmit}
            placeholder="Search anything you want to learn"
            placeholderTextColor="#737373"
            accessibilityLabel="Search learning guides"
            returnKeyType="search"
            autoCorrect={false}
            style={styles.textInput}
          />

          <Search
            size={21}
            color={isFocused ? '#171717' : '#737373'}
            strokeWidth={2}
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

        {/* Search results: visible only while the input is focused. */}
        {isFocused && (
          <View style={styles.resultsContainer}>
            <SearchResults guides={displayedGuides} query={query} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Root wrapper for the backdrop and search interface.
  wrapper: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },

  // Centered search container with 90% width and a desktop-friendly limit.
  container: {
    width: '90%',
    maxWidth: 600,
    alignSelf: 'center',
    position: 'relative',
    zIndex: 2,
  },

  // Transparent layer that captures taps outside the search interface.
  backdrop: {
    ...StyleSheet.absoluteFill,
    position: 'absolute',
    zIndex: 1,
  },

  // Main search field.
  searchInputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
  },

  // Focused search field appearance.
  searchInputFocused: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A3A3A3',
  },

  // Search text input.
  textInput: {
    flex: 1,
    minWidth: 0,
    marginRight: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: '#171717',
  },

  // Clear-query button.
  clearButton: {
    width: 32,
    height: 32,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Results panel below the search field.
  resultsContainer: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
