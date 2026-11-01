import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Bookmark, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GUIDES } from '../data/guides';
import type { Guide } from '../types/guide';
import type { RootStackParamList } from '../navigation/rootStack.types';
import { getSavedGuides } from '../utils/savedGuides';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function SavedScreen() {
  const navigation = useNavigation<Navigation>();

  const [savedGuides, setSavedGuides] = useState<Guide[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  /**
   * Loads saved guide IDs from SQLite and matches them
   * with the existing guide data.
   */
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadSavedGuides = async (): Promise<void> => {
        setIsLoading(true);
        setHasError(false);

        try {
          const savedGuideIds = await getSavedGuides();

          const guides = savedGuideIds
            .map(savedGuideId =>
              GUIDES.find(guide => guide.id === savedGuideId),
            )
            .filter((guide): guide is Guide => guide !== undefined);

          if (isActive) {
            setSavedGuides(guides);
          }
        } catch (error: unknown) {
          console.error('Failed to load saved guides:', error);

          if (isActive) {
            setHasError(true);
          }
        } finally {
          if (isActive) {
            setIsLoading(false);
          }
        }
      };

      void loadSavedGuides();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleGuidePress = (guideId: string) => {
    navigation.navigate('GuideContent', { guideId });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Saved</Text>
        <Text style={styles.subtitle}>Your personal learning collection.</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Tutorials</Text>

          {isLoading ? (
            <ActivityIndicator
              size="small"
              color="#16A34A"
              style={styles.loader}
            />
          ) : hasError ? (
            <Text style={styles.emptyText}>
              Unable to load saved tutorials. Please try again.
            </Text>
          ) : savedGuides.length === 0 ? (
            <Text style={styles.emptyText}>
              No saved tutorials yet. Bookmark a guide to see it here.
            </Text>
          ) : (
            savedGuides.map(guide => (
              <Pressable
                key={guide.id}
                style={styles.tutorialRow}
                onPress={() => handleGuidePress(guide.id)}
              >
                <Bookmark size={20} color="#16A34A" />

                <View style={styles.tutorialInfo}>
                  <Text style={styles.tutorialTitle}>{guide.title}</Text>

                  <Text style={styles.tutorialCategory}>
                    {guide.categoryId.replaceAll('-', ' ')}
                  </Text>
                </View>

                <ChevronRight size={20} color="#888888" />
              </Pressable>
            ))
          )}
        </View>
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
    color: '#666666',
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 14,
  },
  loader: {
    marginTop: 24,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 21,
    color: '#777777',
  },
  tutorialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  tutorialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  tutorialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
  },
  tutorialCategory: {
    marginTop: 4,
    fontSize: 13,
    color: '#777777',
    textTransform: 'capitalize',
  },
});
