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

  const renderHeader = (title: string) => (
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

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );

  const renderTranslateButton = () => (
    <View style={styles.translateContainer}>
      <TranslateButton
        language={language}
        onToggle={() =>
          setLanguage(current => (current === 'en' ? 'hinglish' : 'en'))
        }
      />
    </View>
  );

  if (isCategoryMode) {
    return (
      <SafeAreaView style={styles.screen} edges={['top']}>
        <StatusBar barStyle="dark-content" />

        {renderHeader(categoryName ?? 'Category')}

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {renderTranslateButton()}

          <CategoryGuidesContent guides={categoryGuides} language={language} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (!guide) {
    return (
      <SafeAreaView style={styles.screen} edges={['top']}>
        <StatusBar barStyle="dark-content" />

        {renderHeader('Learning Guide')}

        <EmptyState
          title="Guide not found"
          description="This guide may have been removed or is no longer available."
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {renderHeader('Learning Guide')}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {renderTranslateButton()}

        <GuideDetails guide={guide} language={language} />
      </ScrollView>
    </SafeAreaView>
  );
}
