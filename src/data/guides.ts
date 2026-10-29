import type { Guide } from '../types/guide';

/**
 * Digital Dost — Learning Guides
 *
 * Initial guide library.
 * Image keys will be mapped to local assets separately.
 */
export const GUIDES: Guide[] = [
  {
    id: 'instagram-professional-account',
    slug: 'create-instagram-professional-account',
    title: 'How to Create an Instagram Professional Account?',
    description:
      'Learn how to set up a professional Instagram account for your business, creator profile, or personal brand.',
    categoryId: 'social-media',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    coverImage: {
      key: 'instagram-professional-cover',
      type: 'cover',
      alt: 'Instagram professional profile setup',
    },
    searchKeywords: [
      'instagram',
      'instagram business account',
      'instagram professional account',
      'professional instagram profile',
      'creator account',
      'business profile',
      'insta business',
      'instagram setup',
    ],
    prerequisites: [
      'Instagram app installed on your phone.',
      'An Instagram account. Create one first if you do not have one.',
    ],
    steps: [
      {
        id: 'instagram-step-1',
        title: 'Open your Instagram profile',
        description:
          'Open Instagram and sign in. Tap your profile picture in the bottom navigation to open your profile.',
        image: {
          key: 'instagram-profile-screen',
          type: 'step',
          alt: 'Instagram profile screen',
        },
      },
      {
        id: 'instagram-step-2',
        title: 'Open account settings',
        description:
          'Open the profile menu and look for the account tools or account type options. The exact menu labels may vary by app version.',
        image: {
          key: 'instagram-account-settings',
          type: 'step',
          alt: 'Instagram account settings menu',
        },
        tip: 'If you cannot find the option, check Instagram’s official help resources for the current interface.',
      },
      {
        id: 'instagram-step-3',
        title: 'Switch to a professional account',
        description:
          'Choose the option to switch to a professional account, if available. Follow the on-screen instructions.',
        image: {
          key: 'instagram-professional-options',
          type: 'step',
          alt: 'Instagram professional account options',
        },
      },
      {
        id: 'instagram-step-4',
        title: 'Choose an account type',
        description:
          'Select the account type that best matches your needs, such as Creator or Business, and choose a suitable category.',
        tip: 'A Business account is generally suitable for a shop or company. A Creator account may suit an individual content creator.',
      },
      {
        id: 'instagram-step-5',
        title: 'Complete your profile',
        description:
          'Add a clear profile picture, a useful bio, and relevant contact information. Review your profile to ensure the information is accurate.',
        image: {
          key: 'instagram-complete-profile',
          type: 'step',
          alt: 'Example of a completed Instagram professional profile',
        },
        tip: 'Use a recognizable logo for a business or a clear photo for a personal brand.',
      },
    ],
    relatedGuideIds: ['facebook-business-page', 'youtube-channel-setup'],
    sources: [
      {
        title: 'Instagram Help Center',
        url: 'https://help.instagram.com/',
        description:
          'Official Instagram support for account settings and professional features.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-28T00:00:00.000Z',
    updatedAt: '2026-10-28T00:00:00.000Z',
  },
  {
    id: 'facebook-business-page',
    slug: 'create-facebook-business-page',
    title: 'How to Create a Facebook Business Page',
    description:
      'Learn how to create a Facebook Page for your shop, service, organization, or brand.',
    categoryId: 'social-media',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'facebook-business-cover',
      type: 'cover',
      alt: 'Facebook business page setup',
    },
    searchKeywords: [
      'facebook',
      'facebook business page',
      'create facebook page',
      'business profile facebook',
      'facebook shop page',
      'company page',
      'facebook setup',
    ],
    prerequisites: [
      'A Facebook account.',
      'Your business name and a short description.',
      'A logo or suitable profile image, if available.',
    ],
    steps: [
      {
        id: 'facebook-step-1',
        title: 'Open Facebook',
        description:
          'Open the Facebook app or website and sign in to your account.',
        image: {
          key: 'facebook-home-screen',
          type: 'step',
          alt: 'Facebook home screen',
        },
      },
      {
        id: 'facebook-step-2',
        title: 'Find the Pages section',
        description:
          'Open the menu and look for Pages. Select the option to create a new Page.',
        image: {
          key: 'facebook-pages-menu',
          type: 'step',
          alt: 'Facebook Pages menu',
        },
      },
      {
        id: 'facebook-step-3',
        title: 'Enter your Page details',
        description:
          'Enter your business or brand name, select an appropriate category, and write a clear description of what you offer.',
        image: {
          key: 'facebook-page-details',
          type: 'step',
          alt: 'Facebook business Page details form',
        },
        tip: 'Use the same business name that customers recognize.',
      },
      {
        id: 'facebook-step-4',
        title: 'Add your business information',
        description:
          'Add a profile picture, cover image, contact details, location, and opening hours where relevant.',
        image: {
          key: 'facebook-business-information',
          type: 'step',
          alt: 'Facebook business Page information',
        },
      },
      {
        id: 'facebook-step-5',
        title: 'Review and publish your Page',
        description:
          'Check your information for accuracy, publish the Page, and preview how it appears to visitors.',
        tip: 'Only publish contact details and business information you are comfortable sharing publicly.',
      },
    ],
    relatedGuideIds: [
      'instagram-professional-account',
      'youtube-channel-setup',
    ],
    sources: [
      {
        title: 'Facebook Help Center',
        url: 'https://www.facebook.com/help/',
        description:
          'Official Facebook support for Pages and business features.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-28T00:00:00.000Z',
    updatedAt: '2026-10-28T00:00:00.000Z',
  },
  {
    id: 'youtube-channel-setup',
    slug: 'create-youtube-channel',
    title: 'How to Create a YouTube Channel',
    description:
      'Set up a YouTube channel, choose its name, and prepare it for publishing videos.',
    categoryId: 'social-media',
    difficulty: 'beginner',
    estimatedMinutes: 7,
    coverImage: {
      key: 'youtube-channel-cover',
      type: 'cover',
      alt: 'YouTube channel setup',
    },
    searchKeywords: [
      'youtube',
      'create youtube channel',
      'youtube channel setup',
      'start a youtube channel',
      'youtube creator',
      'upload videos',
      'youtube account',
    ],
    prerequisites: [
      'A Google Account.',
      'A channel name and an idea of what you want to publish.',
    ],
    steps: [
      {
        id: 'youtube-step-1',
        title: 'Sign in to YouTube',
        description:
          'Open the YouTube app or website and sign in using your Google Account.',
        image: {
          key: 'youtube-sign-in',
          type: 'step',
          alt: 'YouTube sign-in screen',
        },
      },
      {
        id: 'youtube-step-2',
        title: 'Open channel creation',
        description:
          'Open your account menu and look for the option to create a channel. Follow the current on-screen instructions.',
        image: {
          key: 'youtube-create-channel',
          type: 'step',
          alt: 'YouTube channel creation screen',
        },
      },
      {
        id: 'youtube-step-3',
        title: 'Choose your channel name',
        description:
          'Choose a name that reflects your topic, personal brand, or business. Review the available handle options.',
        tip: 'Keep the name easy to remember and spell.',
      },
      {
        id: 'youtube-step-4',
        title: 'Customize your channel',
        description:
          'Add a profile picture, channel description, and banner if available. Explain what viewers can expect from your videos.',
        image: {
          key: 'youtube-channel-customization',
          type: 'step',
          alt: 'YouTube channel customization screen',
        },
      },
      {
        id: 'youtube-step-5',
        title: 'Prepare your first video',
        description:
          'Plan a useful first video, record it, and review the title, description, thumbnail, and audience settings before uploading.',
        tip: 'You can create your channel before uploading your first video.',
      },
    ],
    relatedGuideIds: [
      'instagram-professional-account',
      'facebook-business-page',
      'write-good-ai-prompt',
    ],
    sources: [
      {
        title: 'YouTube Help Center',
        url: 'https://support.google.com/youtube/',
        description:
          'Official YouTube support for channel creation and customization.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-28T00:00:00.000Z',
    updatedAt: '2026-10-28T00:00:00.000Z',
  },
  {
    id: 'write-good-ai-prompt',
    slug: 'how-to-write-a-good-ai-prompt',
    title: 'How to Write a Good AI Prompt',
    description:
      'Learn how to give AI tools clear instructions so you can get more useful and relevant responses.',
    categoryId: 'ai-tools',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    coverImage: {
      key: 'ai-prompt-cover',
      type: 'cover',
      alt: 'Writing a clear prompt for an AI tool',
    },
    searchKeywords: [
      'AI',
      'artificial intelligence',
      'prompt',
      'AI prompt',
      'prompt engineering',
      'ChatGPT prompt',
      'how to use ChatGPT',
      'write better prompts',
      'AI instructions',
    ],
    prerequisites: [
      'Access to an AI tool, such as ChatGPT.',
      'A task or question you want help with.',
    ],
    steps: [
      {
        id: 'prompt-step-1',
        title: 'State your goal clearly',
        description:
          'Explain exactly what you want the AI tool to help you accomplish.',
        image: {
          key: 'ai-prompt-goal',
          type: 'illustration',
          alt: 'An example of a clearly stated AI prompt goal',
        },
        tip: 'Instead of writing “help me with business,” try “help me write a short description for my local clothing shop.”',
      },
      {
        id: 'prompt-step-2',
        title: 'Provide useful context',
        description:
          'Include relevant details such as your audience, experience level, purpose, and any important constraints.',
        tip: 'Do not include passwords, private account details, or other sensitive information.',
      },
      {
        id: 'prompt-step-3',
        title: 'Specify the output format',
        description:
          'Tell the AI how you want the answer presented, such as a checklist, table, short paragraph, or step-by-step guide.',
        image: {
          key: 'ai-prompt-format',
          type: 'illustration',
          alt: 'Examples of different AI response formats',
        },
      },
      {
        id: 'prompt-step-4',
        title: 'Describe the tone and audience',
        description:
          'If the result is intended for a particular audience, specify the tone and reading level you need.',
        tip: 'For example: “Explain this in simple English for a complete beginner.”',
      },
      {
        id: 'prompt-step-5',
        title: 'Review and improve the response',
        description:
          'Check the result. If it misses something, ask a follow-up question and explain what should change.',
        tip: 'AI responses can contain mistakes. Verify important facts before relying on them.',
      },
    ],
    relatedGuideIds: [
      'youtube-channel-setup',
      'instagram-professional-account',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description: 'Official help and guidance for using ChatGPT.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-28T00:00:00.000Z',
    updatedAt: '2026-10-28T00:00:00.000Z',
  },
];
