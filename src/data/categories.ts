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
    group: 'social-media',
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
    group: 'social-media',
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
    group: 'social-media',
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
    group: 'social-media',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    description:
      'Explore popular AI tools and discover which tools are best for different tasks and types of work.',
    image: {
      key: 'ai-tools-cover',
      type: 'cover',
      alt: 'AI tools learning category',
    },
    isFeatured: true,
    order: 5,
    group: 'ai-tools',
  },
  {
    id: 'ai-prompts',
    name: 'AI Prompts',
    description: 'Learn to write clear and effective prompts for AI tools.',
    image: {
      key: 'ai-prompts-cover',
      type: 'cover',
      alt: 'AI prompts learning category',
    },
    isFeatured: true,
    order: 6,
    group: 'ai-tools',
  },
  {
    id: 'ai-prompt-examples',
    name: 'AI Prompt Examples',
    description: 'Explore practical prompts for everyday tasks and work.',
    image: {
      key: 'ai-prompt-examples-cover',
      type: 'cover',
      alt: 'AI prompt examples learning category',
    },
    isFeatured: true,
    order: 7,
    group: 'ai-tools',
  },
  {
    id: 'ai-image-generation',
    name: 'AI Image Generation',
    description: 'Learn to create images using AI tools.',
    image: {
      key: 'ai-image-generation-cover',
      type: 'cover',
      alt: 'AI image generation learning category',
    },
    isFeatured: true,
    order: 8,
    group: 'ai-tools',
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
    order: 9,
    group: 'digital-skills',
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
    order: 10,
    group: 'online-safety',
  },
  // {
  //   id: 'online-business',
  //   name: 'Online Business',
  //   description:
  //     'Build your online presence and learn practical business skills.',
  //   image: {
  //     key: 'online-business-cover',
  //     type: 'cover',
  //     alt: 'Online business learning category',
  //   },
  //   isFeatured: true,
  //   order: 8,
  // },
];
