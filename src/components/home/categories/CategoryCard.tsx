import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import type { GuideCategory } from '../../../types/guide';
import { CATEGORY_IMAGES } from '../../../utils/categoryImages';

interface CategoryCardProps {
  category: GuideCategory;
  onPress: () => void;
}

export default function CategoryCard({ category, onPress }: CategoryCardProps) {
  const imageSource = category.image
    ? CATEGORY_IMAGES[category.image.key as keyof typeof CATEGORY_IMAGES]
    : undefined;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Explore ${category.name}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        {imageSource && (
          <Image
            source={imageSource}
            resizeMode="contain"
            style={styles.image}
          />
        )}
      </View>

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {category.name}
        </Text>

        <Text numberOfLines={2} style={styles.description}>
          {category.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75,
  },
  imageContainer: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 12,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },
});
