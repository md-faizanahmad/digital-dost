import { StyleSheet } from 'react-native';

export const guideContentStyles = StyleSheet.create({
  // Screen
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 14,
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#171717',
  },

  // Scroll content
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  translateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
    marginBottom: 22,
  },

  // Guide details
  category: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#278052',
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    lineHeight: 35,
    fontWeight: '700',
    color: '#171717',
    marginTop: 20,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555555',
    marginBottom: 22,
  },
  whatyouneed: {
    fontSize: 14,
    lineHeight: 23,
    color: '#424242',
    padding: 16,
    marginBottom: 22,
  },
  meta: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555555',
    marginBottom: 26,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 8,
  },

  // Steps
  sectionTitle: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 20,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    backgroundColor: '#E8F3EC',
  },
  stepNumberText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#217747',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 7,
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 23,
    color: '#555555',
  },
  stepImage: {
    width: '100%',
    height: 190,
    marginTop: 16,
    backgroundColor: '#F6F6F6',
  },

  // Tips and warnings
  tipBox: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#F3F7F3',
    borderLeftWidth: 3,
    borderLeftColor: '#278052',
  },
  tipLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#217747',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#444444',
  },
  warningBox: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFF6EF',
    borderLeftWidth: 3,
    borderLeftColor: '#D97706',
  },
  warningLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 5,
  },
  warningText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#444444',
  },

  // Category guide list
  categoryList: {
    gap: 18,
  },
  listSubtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
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
    fontSize: 19,
    fontWeight: '700',
    color: '#171717',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
    textAlign: 'center',
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
