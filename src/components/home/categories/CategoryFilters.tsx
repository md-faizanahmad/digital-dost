import React from 'react';
import { ScrollView, Pressable, StyleSheet, Text } from 'react-native';
import { CategoryGroup } from '../../../types/guide';

type FilterValue = CategoryGroup | 'all';

interface CategoryFiltersProps {
  selectedFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Social Media', value: 'social-media' },
  { label: 'AI Tools', value: 'ai-tools' },
  { label: 'Digital Skills', value: 'digital-skills' },
  { label: 'Online Safety', value: 'online-safety' },
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
    gap: 10,
    paddingVertical: 4,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeChip: {
    backgroundColor: '#171717',
    borderColor: '#171717',
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#525252',
  },
  activeLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
