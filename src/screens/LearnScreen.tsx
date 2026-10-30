import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { GUIDE_CATEGORIES } from '../data/categories';
import CategoryCard from '../components/home/categories/CategoryCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootStack.types';

type LearnNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
export default function LearnScreen() {
  const categories = useMemo(
    () =>
      [...GUIDE_CATEGORIES]
        .sort((a, b) => a.order - b.order)
        .filter(category => category.isFeatured),
    [],
  );

  const navigation = useNavigation<LearnNavigationProp>();

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate('GuideContent', { categoryId });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Learn</Text>

        <Text style={styles.subtitle}>
          Explore tutorials and build your digital skills.
        </Text>

        <Text style={styles.sectionTitle}>Browse Categories</Text>

        <ScrollView contentContainerStyle={styles.grid} scrollEnabled={false}>
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={() => handleCategoryPress(category.id)}
            />
          ))}
        </ScrollView>
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
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#666666',
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
