import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';

import { CategoryGroup, GuideCategory } from '../../../types/guide';
import CategoryCard from './CategoryCard';

type FilterValue = CategoryGroup | 'all';

interface CategoryGridProps {
  categories: GuideCategory[];
  selectedFilter: FilterValue;
  onCategoryPress: (categoryId: string) => void;
  style?: StyleProp<ViewStyle>;
}

export default function CategoryGrid({
  categories,
  selectedFilter,
  onCategoryPress,
  style,
}: CategoryGridProps) {
  const { width: screenWidth } = useWindowDimensions();

  const cardWidth = (screenWidth - 40 - 12) / 2;

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
    <View style={[styles.grid, style]}>
      {filteredCategories.map(category => (
        <View key={category.id} style={{ width: cardWidth }}>
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
    columnGap: 12,
    rowGap: 16,
  },
});
