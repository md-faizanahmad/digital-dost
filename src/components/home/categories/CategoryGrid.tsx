import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { CategoryGroup, GuideCategory } from '../../../types/guide';
import CategoryCard from './CategoryCard';

type FilterValue = CategoryGroup | 'all';

interface CategoryGridProps {
  categories: GuideCategory[];
  selectedFilter: FilterValue;
  onCategoryPress: (categoryId: string) => void;
}

export default function CategoryGrid({
  categories,
  selectedFilter,
  onCategoryPress,
}: CategoryGridProps) {
  const filteredCategories = useMemo(
    () =>
      [...categories]
        .filter(
          category =>
            selectedFilter === 'all' || category.group === selectedFilter,
        )
        .sort((a, b) => a.order - b.order),
    [categories, selectedFilter],
  );

  return (
    <View style={styles.grid}>
      {filteredCategories.map(category => (
        <View key={category.id} style={styles.cardWrapper}>
          <CategoryCard
            category={category}
            onPress={() => onCategoryPress(category.id)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cardWrapper: {
    width: '48%',
  },
});
