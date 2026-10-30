import { StyleSheet } from 'react-native';

export const guideContentStyles = StyleSheet.create({
  // Screen
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
  },

  // Scroll content
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  translateContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  // Guide details
  category: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 16,
  },
  prerequisites: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  meta: {
    fontSize: 13,
    marginBottom: 20,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },

  // Steps
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '700',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 22,
  },

  // Tips and warnings
  tipBox: {
    marginTop: 12,
    padding: 12,
    borderLeftWidth: 3,
  },
  tipLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    lineHeight: 20,
  },
  warningBox: {
    marginTop: 12,
    padding: 12,
    borderLeftWidth: 3,
  },
  warningLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  warningText: {
    fontSize: 13,
    lineHeight: 20,
  },

  // Category guide list
  categoryList: {
    gap: 16,
  },
  listSubtitle: {
    fontSize: 14,
    marginBottom: 16,
  },

  // Empty state
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
