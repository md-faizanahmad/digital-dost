import { useState } from 'react';
import { Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../navigation/rootStack.types';
import { GUIDES } from '../data/guides';
import TranslateButton, { type GuideLanguage } from '../shared/TranslateButton';

import CategoryGuidesContent from '../components/screens/guides/CategoryGuidesContent';
import GuideDetails from '../components/screens/guides/GuideDetails';

import { guideContentStyles as styles } from '../styles/guideContent.styles';
import EmptyState from '../shared/EmptyState';
import SaveGuideButton from './guides/SaveGuideButton';

type Navigation = NativeStackNavigationProp<RootStackParamList>;
type GuideRoute = RouteProp<RootStackParamList, 'GuideContent'>;

export default function GuideContentScreen() {
  const navigation = useNavigation<Navigation>();
  const { params } = useRoute<GuideRoute>();

  const [language, setLanguage] = useState<GuideLanguage>('en');

  const isCategoryMode = 'categoryId' in params;
  const categoryId = isCategoryMode ? params.categoryId : undefined;

  const guide = !isCategoryMode
    ? GUIDES.find(({ id }) => id === params.guideId)
    : undefined;

  const categoryGuides = categoryId
    ? GUIDES.filter(({ categoryId: id }) => id === categoryId)
    : [];

  const categoryName = categoryId
    ?.replaceAll('-', ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  const handleBack = () => navigation.goBack();

  const handleLanguageToggle = () => {
    setLanguage(current => (current === 'en' ? 'hinglish' : 'en'));
  };

  const headerTitle = isCategoryMode
    ? categoryName ?? 'Category'
    : 'Learning Guide';

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Pressable
          onPress={handleBack}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={10}
          style={styles.backButton}
        >
          <ArrowLeft size={22} color="#171717" />
        </Pressable>

        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>

      {!isCategoryMode && !guide ? (
        <EmptyState
          title="Guide not found"
          description="This guide may have been removed or is no longer available."
        />
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.translateContainer}>
            <TranslateButton
              language={language}
              onToggle={handleLanguageToggle}
            />

            {isCategoryMode
              ? categoryGuides.map(guide => (
                  <SaveGuideButton key={guide.id} guideId={guide.id} />
                ))
              : guide && <SaveGuideButton guideId={guide.id} />}
          </View>

          {isCategoryMode ? (
            <CategoryGuidesContent
              guides={categoryGuides}
              language={language}
            />
          ) : (
            guide && <GuideDetails guide={guide} language={language} />
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
