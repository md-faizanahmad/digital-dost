import React from 'react';
import { ScrollView, Pressable, StyleSheet, Text } from 'react-native';

import { GUIDE_CATEGORIES } from '../../../data/categories';
import { CategoryGroup } from '../../../types/guide';

type FilterValue = CategoryGroup | 'all';

interface CategoryFiltersProps {
  selectedFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  ...Array.from(new Set(GUIDE_CATEGORIES.map(({ group }) => group))).map(
    group => ({
      label: group
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      value: group,
    }),
  ),
];

export default function CategoryFilters({
  selectedFilter,
  onFilterChange,
}: CategoryFiltersProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {FILTERS.map(({ label, value }) => {
        const isActive = selectedFilter === value;

        return (
          <Pressable
            key={value}
            onPress={() => onFilterChange(value)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            style={[styles.chip, isActive && styles.activeChip]}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingVertical: 6,
  },
  chip: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F7F8F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeChip: {
    backgroundColor: '#DDF2BD',
    borderColor: '#9BCB62',
    borderWidth: 1.5,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#62685F',
    letterSpacing: 0.1,
  },
  activeLabel: {
    color: '#294D18',
    fontWeight: '700',
  },
});
