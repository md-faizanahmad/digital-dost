import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { GUIDE_CATEGORIES } from '../data/categories';
import type { CategoryGroup } from '../types/guide';
import type { RootStackParamList } from '../navigation/rootStack.types';

import SearchBar from '../components/home/SearchBar';
import CategoryFilters from '../components/home/categories/CategoryFilters';
import CategoryGrid from '../components/home/categories/CategoryGrid';

type LearnNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

type FilterValue = CategoryGroup | 'all';

export default function LearnScreen() {
  const navigation = useNavigation<LearnNavigationProp>();
  const [selectedFilter, setSelectedFilter] = useState<FilterValue>('all');

  const categories = useMemo(
    () =>
      [...GUIDE_CATEGORIES]
        .filter(category => category.isFeatured)
        .sort((a, b) => a.order - b.order),
    [],
  );

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate('GuideContent', { categoryId });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Learn</Text>

        <Text style={styles.subtitle}>
          Explore tutorials and build your digital skills.
        </Text>

        <SearchBar />

        <Text style={styles.sectionTitle}>Browse Categories</Text>

        <CategoryFilters
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <CategoryGrid
          categories={categories}
          selectedFilter={selectedFilter}
          onCategoryPress={handleCategoryPress}
          style={styles.categoryGrid}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 22,
    fontSize: 15,
    lineHeight: 22,
    color: '#666666',
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 14,
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  categoryGrid: {
    marginTop: 20,
  },
});
