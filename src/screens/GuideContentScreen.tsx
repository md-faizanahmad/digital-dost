import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

import type { RootStackParamList } from '../navigation/rootStack.types';
import { GUIDES } from '../data/guides';
import TranslateButton, { type GuideLanguage } from '../shared/TranslateButton';
import { SafeAreaView } from 'react-native-safe-area-context';

type Navigation = NativeStackNavigationProp<RootStackParamList>;
type GuideRoute = RouteProp<RootStackParamList, 'GuideContent'>;

export default function GuideContentScreen() {
  const navigation = useNavigation<Navigation>();
  const { params } = useRoute<GuideRoute>();

  const [language, setLanguage] = useState<GuideLanguage>('en');

  const guide = GUIDES.find(({ id }) => id === params.guideId);
  const isHinglish = language === 'hinglish';

  if (!guide) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Guide not found</Text>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.screen}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={10}
            style={styles.backButton}
          >
            <ArrowLeft size={22} color="#171717" />
          </Pressable>

          <Text style={styles.headerTitle}>Learning Guide</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.translateContainer}>
            <TranslateButton
              language={language}
              onToggle={() =>
                setLanguage(current => (current === 'en' ? 'hinglish' : 'en'))
              }
            />
          </View>

          <Text style={styles.category}>
            {guide.categoryId.replaceAll('-', ' ').toUpperCase()}
          </Text>

          <Text style={styles.title}>
            {isHinglish ? guide.titleHinglish || guide.title : guide.title}
          </Text>

          <Text style={styles.description}>
            {isHinglish
              ? guide.descriptionHinglish || guide.description
              : guide.description}
          </Text>

          {isHinglish && guide.prerequisitesHinglish ? (
            <View style={styles.prerequisites}>
              <Text style={styles.sectionTitle}>Before you start</Text>
              {guide.prerequisitesHinglish.map((item, index) => (
                <Text key={index} style={styles.stepDescription}>
                  • {item}
                </Text>
              ))}
            </View>
          ) : null}

          <View style={styles.meta}>
            <Text style={styles.metaText}>{guide.steps.length} steps</Text>
            <Text style={styles.metaText}>
              {guide.estimatedMinutes} min read
            </Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Step-by-step guide</Text>

          {guide.steps.map((step, index) => (
            <View key={step.id} style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  {isHinglish ? step.titleHinglish || step.title : step.title}
                </Text>

                <Text style={styles.stepDescription}>
                  {isHinglish
                    ? step.descriptionHinglish || step.description
                    : step.description}
                </Text>

                {(isHinglish ? step.tipHinglish || step.tip : step.tip) ? (
                  <View style={styles.tipBox}>
                    <Text style={styles.tipLabel}>TIP</Text>
                    <Text style={styles.tipText}>
                      {isHinglish ? step.tipHinglish || step.tip : step.tip}
                    </Text>
                  </View>
                ) : null}

                {(
                  isHinglish
                    ? step.warningHinglish || step.warning
                    : step.warning
                ) ? (
                  <View style={styles.warningBox}>
                    <Text style={styles.warningLabel}>IMPORTANT</Text>
                    <Text style={styles.warningText}>
                      {isHinglish
                        ? step.warningHinglish || step.warning
                        : step.warning}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#171717',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 40,
  },
  translateContainer: {
    alignItems: 'flex-end',
    marginBottom: 22,
  },
  category: {
    marginBottom: 12,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#737373',
  },
  title: {
    fontSize: 27,
    lineHeight: 35,
    fontWeight: '700',
    color: '#171717',
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 24,
    color: '#525252',
  },
  prerequisites: {
    marginTop: 20,
  },
  meta: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 18,
  },
  metaText: {
    fontSize: 12,
    color: '#737373',
  },
  divider: {
    height: 1,
    marginVertical: 26,
    backgroundColor: '#E5E5E5',
  },
  sectionTitle: {
    marginBottom: 24,
    fontSize: 20,
    fontWeight: '700',
    color: '#171717',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  stepNumber: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
  },
  stepContent: {
    flex: 1,
    marginLeft: 14,
  },
  stepTitle: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#171717',
  },
  stepDescription: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 23,
    color: '#525252',
  },
  tipBox: {
    marginTop: 14,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderLeftWidth: 3,
    borderLeftColor: '#737373',
  },
  tipLabel: {
    marginBottom: 5,
    fontSize: 11,
    fontWeight: '700',
    color: '#404040',
  },
  tipText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#404040',
  },
  warningBox: {
    marginTop: 14,
    padding: 12,
    backgroundColor: '#FEF2F2',
    borderLeftWidth: 3,
    borderLeftColor: '#DC2626',
  },
  warningLabel: {
    marginBottom: 5,
    fontSize: 11,
    fontWeight: '700',
    color: '#991B1B',
  },
  warningText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#991B1B',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171717',
  },
  emptyText: {
    marginTop: 8,
    fontSize: 14,
    color: '#737373',
  },
  emptyDescription: {
    marginTop: 8,
    fontSize: 14,
    color: '#737373',
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#171717',
  },
});
