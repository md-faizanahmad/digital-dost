import type { GuideCategory } from '../types/guide';

/**
 * Digital Dost — Learning Categories
 *
 * Categories organize guides into practical learning topics.
 * The order field determines their display order in the app.
 */
export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Learn to create channels, upload videos, and make Shorts.',
    image: {
      key: 'youtube-cover',
      type: 'cover',
      alt: 'YouTube learning category',
    },
    isFeatured: true,
    order: 1,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Learn account setup, posts, Reels, and profile management.',
    image: {
      key: 'instagram-cover',
      type: 'cover',
      alt: 'Instagram learning category',
    },
    isFeatured: true,
    order: 2,
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    description:
      'Set up business profiles, catalogs, and customer communication.',
    image: {
      key: 'whatsapp-business-cover',
      type: 'cover',
      alt: 'WhatsApp Business learning category',
    },
    isFeatured: true,
    order: 3,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description:
      'Learn Facebook Pages, posts, and business profile management.',
    image: {
      key: 'facebook-cover',
      type: 'cover',
      alt: 'Facebook learning category',
    },
    isFeatured: true,
    order: 4,
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
    order: 5,
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
    order: 6,
  },
  {
    id: 'online-safety',
    name: 'Online Safety',
    description: 'Learn about privacy, online scams, and account security.',
    image: {
      key: 'online-safety-cover',
      type: 'cover',
      alt: 'Online safety learning category',
    },
    isFeatured: true,
    order: 7,
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
    order: 8,
  },
];
