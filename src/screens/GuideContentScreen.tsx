import React from 'react';
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

type Navigation = NativeStackNavigationProp<RootStackParamList>;
type GuideRoute = RouteProp<RootStackParamList, 'GuideContent'>;

export default function GuideContentScreen() {
  const navigation = useNavigation<Navigation>();
  const { params } = useRoute<GuideRoute>();

  const guide = GUIDES.find(({ id }) => id === params.guideId);

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
        <Text style={styles.category}>
          {guide.categoryId.replaceAll('-', ' ').toUpperCase()}
        </Text>

        <Text style={styles.title}>{guide.title}</Text>

        <Text style={styles.description}>{guide.description}</Text>

        <View style={styles.meta}>
          <Text style={styles.metaText}>{guide.steps.length} steps</Text>

          <Text style={styles.metaText}>{guide.estimatedMinutes} min read</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Step-by-step guide</Text>

        {guide.steps.map((step, index) => (
          <View key={step.id} style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>

              <Text style={styles.stepDescription}>{step.description}</Text>

              {step.tip && (
                <View style={styles.tipBox}>
                  <Text style={styles.tipLabel}>TIP</Text>
                  <Text style={styles.tipText}>{step.tip}</Text>
                </View>
              )}

              {step.warning && (
                <View style={styles.warningBox}>
                  <Text style={styles.warningLabel}>IMPORTANT</Text>
                  <Text style={styles.warningText}>{step.warning}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
