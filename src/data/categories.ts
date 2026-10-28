import type { GuideCategory } from '../types/guide';

/**
 * Digital Dost — Learning Categories
 *
 * Categories organize guides into practical learning topics.
 * The order field determines their display order in the app.
 */
export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    id: 'social-media',
    name: 'Social Media',
    description:
      'Create professional profiles and learn to grow on social platforms.',
    image: {
      key: 'social-media-cover',
      type: 'cover',
      alt: 'Social media learning category',
    },
    isFeatured: true,
    order: 1,
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    description:
      'Learn to use AI tools, write effective prompts, and work smarter.',
    image: {
      key: 'ai-tools-cover',
      type: 'cover',
      alt: 'Artificial intelligence learning category',
    },
    isFeatured: true,
    order: 2,
  },
  {
    id: 'digital-skills',
    name: 'Digital Skills',
    description: 'Master useful digital tasks for everyday life and work.',
    image: {
      key: 'digital-skills-cover',
      type: 'cover',
      alt: 'Digital skills learning category',
    },
    isFeatured: true,
    order: 3,
  },
  {
    id: 'online-business',
    name: 'Online Business',
    description:
      'Build your online presence and learn practical business skills.',
    image: {
      key: 'online-business-cover',
      type: 'cover',
      alt: 'Online business learning category',
    },
    isFeatured: true,
    order: 4,
  },
];
