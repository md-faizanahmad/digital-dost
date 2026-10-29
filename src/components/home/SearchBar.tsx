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
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  searchInputFocused: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A3A3A3',
  },
  textInput: {
    flex: 1,
    minWidth: 0,
    marginRight: 12,
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
    borderRadius: 5,
    overflow: 'hidden',
  },
});
