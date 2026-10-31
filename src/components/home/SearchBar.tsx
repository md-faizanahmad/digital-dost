import React, { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Search, X } from 'lucide-react-native';

import SearchResults from './SearchResults';
import { searchGuides } from '../../utils/searchGuides';
import type { Guide } from '../../types/guide';
import type { RootStackParamList } from '../../navigation/rootStack.types';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function SearchBar() {
  const navigation = useNavigation<Navigation>();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const hasQuery = query.trim().length > 0;
  const { results, suggestions } = searchGuides(query);

  const displayedGuides = results.length ? results : suggestions;
  const shouldShowResults = isFocused && hasQuery;

  const handleClear = () => setQuery('');

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  const handleDismiss = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  const handleSelectGuide = (guide: Guide) => {
    Keyboard.dismiss();
    setIsFocused(false);
    navigation.navigate('GuideContent', { guideId: guide.id });
  };

  return (
    <View style={styles.wrapper}>
      {shouldShowResults && (
        <Pressable
          style={styles.backdrop}
          onPress={handleDismiss}
          accessibilityRole="button"
          accessibilityLabel="Close search results"
        />
      )}

      <View style={styles.container}>
        <View
          style={[
            styles.searchInputContainer,
            isFocused && styles.searchInputFocused,
          ]}
        >
          <Search
            size={20}
            color={isFocused ? '#171717' : '#737373'}
            strokeWidth={2}
          />

          <TextInput
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onSubmitEditing={handleSubmit}
            placeholder="Search anything you want to learn"
            placeholderTextColor="#8A8A8A"
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
              <X size={18} color="#737373" />
            </Pressable>
          )}
        </View>

        {shouldShowResults && (
          <View style={styles.resultsContainer}>
            <SearchResults
              guides={displayedGuides}
              query={query}
              onSelectGuide={handleSelectGuide}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    width: '90%',
    maxWidth: 600,
    alignSelf: 'center',
    position: 'relative',
    zIndex: 2,
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
  },
  searchInputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#206a0b',
    borderRadius: 10,
  },
  searchInputFocused: {
    backgroundColor: '#FFFFFF',
    borderColor: '#469010',
  },
  textInput: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#171717',
  },
  clearButton: {
    width: 32,
    height: 32,
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
