import type { Guide } from '../../types/guide';

/**
 * Digital Dost — Social Media Guides
 *
 * Guides for Instagram, Facebook, YouTube, and WhatsApp.
 * Supports English and Hinglish (Roman script).
 */
export const SOCIAL_MEDIA_GUIDES: Guide[] = [
  // ─────────────────────────────────────────────
  // INSTAGRAM
  // ─────────────────────────────────────────────
  {
    id: 'instagram-professional-account',
    slug: 'create-instagram-professional-account',
    title: 'Create an Instagram Professional Account',
    titleHinglish: 'Instagram Professional Account Kaise Banayein',
    description:
      'Learn how to create or switch to a professional Instagram account for your business or creator profile.',
    descriptionHinglish:
      'Apne business ya creator profile ke liye Instagram Professional Account banana aur setup karna seekhein.',
    categoryId: 'instagram',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    coverImage: {
      key: 'instagram-professional-cover',
      type: 'cover',
      alt: 'Instagram professional account setup',
    },
    searchKeywords: [
      'instagram',
      'instagram professional account',
      'instagram business account',
      'instagram creator account',
      'instagram profile setup',
      'instagram business profile',
      'insta account',
      'instagram account kaise banaye',
      'instagram business account kaise banaye',
      'instagram professional account kaise banaye',
    ],
    prerequisites: [
      'An Instagram account',
      'Instagram app installed on your phone',
      'A profile photo and basic business information',
    ],
    prerequisitesHinglish: [
      'Ek Instagram account',
      'Phone mein Instagram app installed hona chahiye',
      'Profile photo aur basic business information',
    ],
    steps: [
      {
        id: 'instagram-step-1',
        title: 'Open Your Instagram Profile',
        titleHinglish: 'Apni Instagram Profile Kholein',
        description:
          'Open Instagram and log in to your account. Tap your profile picture at the bottom-right corner to open your profile.',
        descriptionHinglish:
          'Instagram kholein aur apne account mein login karein. Apni profile kholne ke liye neeche right side mein profile picture par tap karein.',
        image: {
          key: 'instagram-profile-step',
          type: 'step',
          alt: 'Instagram profile screen',
        },
        tip: 'Use an account you want to manage professionally.',
        tipHinglish:
          'Wahi account use karein jise aap professionally manage karna chahte hain.',
      },
      {
        id: 'instagram-step-2',
        title: 'Open Account Settings',
        titleHinglish: 'Account Settings Kholein',
        description:
          'Tap the menu icon in the top-right corner of your profile. Look for the account type and professional tools options. Menu names may vary by app version.',
        descriptionHinglish:
          'Profile ke top-right corner mein menu icon par tap karein. Account type aur professional tools se related options dekhein. App version ke hisaab se menu ke naam alag ho sakte hain.',
        image: {
          key: 'instagram-settings-step',
          type: 'step',
          alt: 'Instagram settings menu',
        },
      },
      {
        id: 'instagram-step-3',
        title: 'Switch to a Professional Account',
        titleHinglish: 'Professional Account Mein Switch Karein',
        description:
          'Find the option to switch to a professional account. Follow the on-screen instructions to begin the setup.',
        descriptionHinglish:
          'Professional account mein switch karne ka option dhoondhein. Setup shuru karne ke liye screen par diye gaye instructions follow karein.',
        image: {
          key: 'instagram-professional-step',
          type: 'step',
          alt: 'Instagram professional account setup',
        },
        tip: 'Instagram may offer Business and Creator account types.',
        tipHinglish:
          'Instagram aapko Business aur Creator account types ke options de sakta hai.',
      },
      {
        id: 'instagram-step-4',
        title: 'Choose Your Category',
        titleHinglish: 'Apni Category Chunein',
        description:
          'Choose the category that best describes your business or creator activity. Review the available contact and display options.',
        descriptionHinglish:
          'Apne business ya creator activity ke liye sahi category chunein. Contact details aur profile par dikhne wale options check karein.',
        image: {
          key: 'instagram-category-step',
          type: 'step',
          alt: 'Instagram professional category selection',
        },
      },
      {
        id: 'instagram-step-5',
        title: 'Complete and Review Your Profile',
        titleHinglish: 'Profile Complete Karke Check Karein',
        description:
          'Add a clear profile photo, a useful bio, and relevant contact details. Review your profile to make sure the information is correct.',
        descriptionHinglish:
          'Achhi profile photo, useful bio aur zaroori contact details add karein. Apni profile check karein taaki saari information sahi ho.',
        image: {
          key: 'instagram-complete-profile-step',
          type: 'step',
          alt: 'Completed Instagram professional profile',
        },
        tip: 'Only display contact information you are comfortable sharing publicly.',
        tipHinglish:
          'Sirf wahi contact information public karein jise share karne mein aap comfortable hain.',
      },
    ],
    relatedGuideIds: [
      'facebook-business-page',
      'whatsapp-business-profile',
      'youtube-channel-setup',
    ],
    sources: [
      {
        title: 'Instagram',
        url: 'https://help.instagram.com/',
        description: 'Official Instagram Help Center.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // FACEBOOK
  // ─────────────────────────────────────────────
  {
    id: 'facebook-business-page',
    slug: 'create-facebook-business-page',
    title: 'Create a Facebook Business Page',
    titleHinglish: 'Facebook Business Page Kaise Banayein',
    description:
      'Learn how to create and set up a Facebook Page for your shop, service, organization, or business.',
    descriptionHinglish:
      'Apni shop, service, organization ya business ke liye Facebook Page banana aur setup karna seekhein.',
    categoryId: 'facebook',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'facebook-business-cover',
      type: 'cover',
      alt: 'Facebook business page setup',
    },
    searchKeywords: [
      'facebook',
      'facebook page',
      'facebook business page',
      'facebook business account',
      'facebook page setup',
      'facebook page for shop',
      'facebook page kaise banaye',
      'facebook business page kaise banaye',
      'business page banana',
      'online business',
    ],
    prerequisites: [
      'A Facebook account',
      'Facebook app or website access',
      'Business name, category, and a short description',
    ],
    prerequisitesHinglish: [
      'Ek Facebook account',
      'Facebook app ya website ka access',
      'Business ka naam, category aur short description',
    ],
    steps: [
      {
        id: 'facebook-step-1',
        title: 'Open Facebook',
        titleHinglish: 'Facebook Kholein',
        description:
          'Open the Facebook app or website and log in to your personal account.',
        descriptionHinglish:
          'Facebook app ya website kholein aur apne personal account mein login karein.',
        image: {
          key: 'facebook-home-step',
          type: 'step',
          alt: 'Facebook home screen',
        },
        tip: 'A Facebook Page is different from your personal profile.',
        tipHinglish: 'Facebook Page aapki personal profile se alag hota hai.',
      },
      {
        id: 'facebook-step-2',
        title: 'Find the Pages Section',
        titleHinglish: 'Pages Section Dhoondhein',
        description:
          'Open the menu and look for Pages. Select the option to create a new Page. The exact menu location may vary.',
        descriptionHinglish:
          'Menu kholein aur Pages option dhoondhein. Naya Page banane ka option select karein. Menu ki location app version ke hisaab se badal sakti hai.',
        image: {
          key: 'facebook-pages-step',
          type: 'step',
          alt: 'Facebook Pages menu',
        },
      },
      {
        id: 'facebook-step-3',
        title: 'Enter Your Page Details',
        titleHinglish: 'Apne Page Ki Details Bharein',
        description:
          'Enter your business name, choose a suitable category, and write a short description explaining what your business offers.',
        descriptionHinglish:
          'Apne business ka naam likhein, sahi category chunein aur ek short description likhein jisme batayein ki aapka business kya service ya product deta hai.',
        image: {
          key: 'facebook-page-details-step',
          type: 'step',
          alt: 'Facebook Page details form',
        },
        tip: 'Use your actual business name so customers can recognize you.',
        tipHinglish:
          'Apne business ka asli naam use karein taaki customers aapko pehchaan sakein.',
      },
      {
        id: 'facebook-step-4',
        title: 'Add Your Profile and Cover Photos',
        titleHinglish: 'Profile Aur Cover Photo Lagayein',
        description:
          'Upload a suitable profile picture and cover photo. A clear logo or business image can help people recognize your Page.',
        descriptionHinglish:
          'Apni Page par suitable profile picture aur cover photo upload karein. Clear logo ya business ki photo se log aapke Page ko aasani se pehchaan sakte hain.',
        image: {
          key: 'facebook-page-photos-step',
          type: 'step',
          alt: 'Facebook Page profile and cover photos',
        },
      },
      {
        id: 'facebook-step-5',
        title: 'Add Contact Details and Publish',
        titleHinglish: 'Contact Details Add Karke Publish Karein',
        description:
          'Add relevant contact information, business hours, location, or website if applicable. Review the details and publish your Page.',
        descriptionHinglish:
          'Zaroori contact information, business hours, location ya website add karein. Details check karein aur apna Page publish karein.',
        image: {
          key: 'facebook-page-complete-step',
          type: 'step',
          alt: 'Completed Facebook business page',
        },
        tip: 'Keep your public business details accurate and up to date.',
        tipHinglish:
          'Apne public business details ko sahi aur updated rakhein.',
      },
    ],
    relatedGuideIds: [
      'instagram-professional-account',
      'whatsapp-business-profile',
      'youtube-channel-setup',
    ],
    sources: [
      {
        title: 'Facebook Help Center',
        url: 'https://www.facebook.com/help/',
        description: 'Official Facebook Help Center.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // YOUTUBE
  // ─────────────────────────────────────────────
  {
    id: 'youtube-channel-setup',
    slug: 'create-youtube-channel',
    title: 'Create a YouTube Channel',
    titleHinglish: 'YouTube Channel Kaise Banayein',
    description:
      'Learn how to create a YouTube channel and prepare it for uploading videos.',
    descriptionHinglish:
      'Apna YouTube channel banana aur videos upload karne ke liye use ready karna seekhein.',
    categoryId: 'youtube',
    difficulty: 'beginner',
    estimatedMinutes: 7,
    coverImage: {
      key: 'youtube-channel-cover',
      type: 'cover',
      alt: 'YouTube channel setup',
    },
    searchKeywords: [
      'youtube',
      'youtube channel',
      'create youtube channel',
      'youtube channel setup',
      'youtube account',
      'youtube creator',
      'youtube channel kaise banaye',
      'youtube par channel banana',
      'youtube video upload',
      'youtube channel settings',
    ],
    prerequisites: [
      'A Google account',
      'YouTube app or website access',
      'A channel name and optional profile image',
    ],
    prerequisitesHinglish: [
      'Ek Google account',
      'YouTube app ya website ka access',
      'Channel ka naam aur optional profile image',
    ],
    steps: [
      {
        id: 'youtube-step-1',
        title: 'Open YouTube',
        titleHinglish: 'YouTube Kholein',
        description:
          'Open the YouTube app or website and sign in with your Google account.',
        descriptionHinglish:
          'YouTube app ya website kholein aur apne Google account se sign in karein.',
        image: {
          key: 'youtube-home-step',
          type: 'step',
          alt: 'YouTube home screen',
        },
        tip: 'Your Google account lets you access YouTube creator features.',
        tipHinglish:
          'Google account se aap YouTube ke creator features access kar sakte hain.',
      },
      {
        id: 'youtube-step-2',
        title: 'Open Your Channel Options',
        titleHinglish: 'Channel Ke Options Kholein',
        description:
          'Tap your profile picture and look for the option to create a channel or access your channel. Follow the available prompts.',
        descriptionHinglish:
          'Apni profile picture par tap karein aur channel create karne ya apna channel access karne ka option dhoondhein. Screen par diye gaye instructions follow karein.',
        image: {
          key: 'youtube-channel-menu-step',
          type: 'step',
          alt: 'YouTube account and channel menu',
        },
      },
      {
        id: 'youtube-step-3',
        title: 'Choose Your Channel Name',
        titleHinglish: 'Apne Channel Ka Naam Chunein',
        description:
          'Enter a channel name that represents your content, business, or personal brand. Choose a suitable handle if prompted.',
        descriptionHinglish:
          'Aisa channel name likhein jo aapke content, business ya personal brand ko represent kare. Agar handle choose karne ka option aaye, toh suitable handle select karein.',
        image: {
          key: 'youtube-channel-name-step',
          type: 'step',
          alt: 'YouTube channel name setup',
        },
        tip: 'Choose a name that is easy to remember and spell.',
        tipHinglish: 'Aisa naam chunein jo yaad rakhna aur likhna aasaan ho.',
      },
      {
        id: 'youtube-step-4',
        title: 'Customize Your Channel',
        titleHinglish: 'Apne Channel Ko Customize Karein',
        description:
          'Add a profile picture, banner, and channel description. Explain what viewers can expect from your videos.',
        descriptionHinglish:
          'Profile picture, banner aur channel description add karein. Description mein batayein ki viewers aapke videos mein kya dekh sakte hain.',
        image: {
          key: 'youtube-customize-step',
          type: 'step',
          alt: 'YouTube channel customization',
        },
      },
      {
        id: 'youtube-step-5',
        title: 'Review Settings and Prepare Your First Video',
        titleHinglish: 'Settings Check Karein Aur Pehla Video Ready Karein',
        description:
          'Review your channel information and upload settings. When ready, use the Create button to upload your first video.',
        descriptionHinglish:
          'Apne channel ki information aur upload settings check karein. Jab ready hon, Create button ka use karke apna pehla video upload karein.',
        image: {
          key: 'youtube-first-video-step',
          type: 'step',
          alt: 'YouTube video upload options',
        },
        tip: 'Check the video title, description, audience setting, and visibility before publishing.',
        tipHinglish:
          'Video publish karne se pehle title, description, audience setting aur visibility check karein.',
      },
    ],
    relatedGuideIds: [
      'instagram-professional-account',
      'facebook-business-page',
      'whatsapp-business-profile',
    ],
    sources: [
      {
        title: 'YouTube Help',
        url: 'https://support.google.com/youtube/',
        description: 'Official YouTube Help Center.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // WHATSAPP BUSINESS
  // ─────────────────────────────────────────────
  {
    id: 'whatsapp-business-profile',
    slug: 'create-whatsapp-business-profile',
    title: 'Set Up a WhatsApp Business Profile',
    titleHinglish: 'WhatsApp Business Profile Kaise Banayein',
    description:
      'Learn how to set up WhatsApp Business for your shop or service and help customers find important business information.',
    descriptionHinglish:
      'Apni shop ya service ke liye WhatsApp Business setup karna aur customers ko zaroori business information dena seekhein.',
    categoryId: 'whatsapp-business',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'whatsapp-business-cover',
      type: 'cover',
      alt: 'WhatsApp Business profile setup',
    },
    searchKeywords: [
      'whatsapp',
      'whatsapp business',
      'whatsapp business account',
      'whatsapp business profile',
      'whatsapp for business',
      'whatsapp business setup',
      'whatsapp business kaise banaye',
      'whatsapp business profile kaise banaye',
      'business whatsapp',
      'shop whatsapp account',
      'whatsapp business tools',
    ],
    prerequisites: [
      'A phone number you can use for your business',
      'WhatsApp Business app installed',
      'Business name, category, and optional logo',
    ],
    prerequisitesHinglish: [
      'Ek phone number jo aap business ke liye use kar sakein',
      'WhatsApp Business app installed hona chahiye',
      'Business ka naam, category aur optional logo',
    ],
    steps: [
      {
        id: 'whatsapp-step-1',
        title: 'Install and Open WhatsApp Business',
        titleHinglish: 'WhatsApp Business Install Karke Kholein',
        description:
          'Install the official WhatsApp Business app from your phone’s app store and open it.',
        descriptionHinglish:
          'Apne phone ke app store se official WhatsApp Business app install karein aur use kholein.',
        image: {
          key: 'whatsapp-business-app-step',
          type: 'step',
          alt: 'WhatsApp Business app',
        },
        tip: 'WhatsApp Messenger and WhatsApp Business are separate apps.',
        tipHinglish: 'WhatsApp Messenger aur WhatsApp Business alag apps hain.',
      },
      {
        id: 'whatsapp-step-2',
        title: 'Register Your Business Number',
        titleHinglish: 'Apna Business Number Register Karein',
        description:
          'Follow the on-screen instructions to enter and verify your phone number. If you are moving an existing number, read the app’s migration instructions first.',
        descriptionHinglish:
          'Screen par diye gaye instructions follow karke apna phone number enter aur verify karein. Agar existing number transfer kar rahe hain, toh pehle app ke migration instructions padh lein.',
        image: {
          key: 'whatsapp-number-verification-step',
          type: 'step',
          alt: 'WhatsApp Business phone number verification',
        },
        warning:
          'Make sure you understand how moving a number may affect your existing WhatsApp account before proceeding.',
        warningHinglish:
          'Number transfer karne se aapke existing WhatsApp account par kya asar padega, ye samajhne ke baad hi aage badhein.',
      },
      {
        id: 'whatsapp-step-3',
        title: 'Enter Your Business Name and Category',
        titleHinglish: 'Business Ka Naam Aur Category Bharein',
        description:
          'Enter your business name and select the category that best describes your business. Add a profile photo or logo if available.',
        descriptionHinglish:
          'Apne business ka naam enter karein aur sahi category select karein. Agar logo ya profile photo available hai, toh use add karein.',
        image: {
          key: 'whatsapp-business-details-step',
          type: 'step',
          alt: 'WhatsApp Business profile details',
        },
      },
      {
        id: 'whatsapp-step-4',
        title: 'Complete Your Business Profile',
        titleHinglish: 'Business Profile Complete Karein',
        description:
          'Open business profile settings and add relevant details such as your business description, address, email, website, and opening hours when applicable.',
        descriptionHinglish:
          'Business profile settings kholein aur zaroori details add karein, jaise business description, address, email, website aur opening hours.',
        image: {
          key: 'whatsapp-business-profile-step',
          type: 'step',
          alt: 'WhatsApp Business profile information',
        },
        tip: 'Only add information that is accurate and that you want customers to see.',
        tipHinglish:
          'Sirf wahi information add karein jo sahi ho aur jise aap customers ko dikhana chahte hain.',
      },
      {
        id: 'whatsapp-step-5',
        title: 'Set Up Business Tools',
        titleHinglish: 'Business Tools Setup Karein',
        description:
          'Explore available business tools such as greeting messages, away messages, quick replies, and product catalogs. Configure the features that suit your business.',
        descriptionHinglish:
          'Greeting messages, away messages, quick replies aur product catalog jaise business tools explore karein. Apne business ke hisaab se useful features setup karein.',
        image: {
          key: 'whatsapp-business-tools-step',
          type: 'step',
          alt: 'WhatsApp Business tools',
        },
        tip: 'Test your profile and message settings before sharing your business number with customers.',
        tipHinglish:
          'Customers ke saath business number share karne se pehle profile aur message settings test karein.',
      },
    ],
    relatedGuideIds: [
      'instagram-professional-account',
      'facebook-business-page',
    ],
    sources: [
      {
        title: 'WhatsApp Help Center',
        url: 'https://faq.whatsapp.com/',
        description: 'Official WhatsApp Help Center.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },
];
