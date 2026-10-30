import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GUIDE_CATEGORIES } from '../../../data/categories';
import type { GuideCategory } from '../../../types/guide';
import CategoryCard from './CategoryCard';

interface ExploreCategoriesProps {
  onCategoryPress: (category: GuideCategory) => void;
  onViewMore: () => void;
}

export default function ExploreCategories({
  onCategoryPress,
  onViewMore,
}: ExploreCategoriesProps) {
  const featuredCategories = GUIDE_CATEGORIES.filter(
    category => category.isFeatured,
  )
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Explore Categories</Text>
          <Text style={styles.subtitle}>Learn something useful today</Text>
        </View>

        <Pressable accessibilityRole="button" onPress={onViewMore} hitSlop={8}>
          <Text style={styles.viewMore}>View More</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        {featuredCategories.map(category => (
          <View key={category.id} style={styles.cardWrapper}>
            <CategoryCard
              category={category}
              onPress={() => onCategoryPress(category)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },
  viewMore: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cardWrapper: {
    width: '48%',
  },
});
