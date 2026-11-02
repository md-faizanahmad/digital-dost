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
    whatyouneed: [
      'An Instagram account',
      'Instagram app installed on your phone',
      'A profile photo and basic business information',
    ],
    whatyouneedHinglish: [
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
          'Open Instagram and sign in to your account. Tap your profile picture at the bottom-right corner to open your profile.',
        descriptionHinglish:
          'Instagram kholein aur apne account mein sign in karein. Apni profile kholne ke liye bottom-right corner mein profile picture par tap karein.',
        image: {
          key: 'instagram-profile-step',
          type: 'step',
          alt: 'Instagram profile screen',
        },
        tip: 'Use the account you want to manage for your business or creator activities.',
        tipHinglish:
          'Wahi account use karein jise aap apne business ya creator activities ke liye manage karna chahte hain.',
      },
      {
        id: 'instagram-step-2',
        title: 'Open Settings and Account Tools',
        titleHinglish: 'Settings Aur Account Tools Kholein',
        description:
          'Tap the three-line menu in the top-right corner of your profile. Open Settings and activity and look for Account type and tools.',
        descriptionHinglish:
          'Apni profile ke top-right corner mein three-line menu par tap karein. Settings and activity open karein aur Account type and tools option dhoondhein.',
        image: {
          key: 'instagram-settings-step',
          type: 'step',
          alt: 'Instagram settings and account tools menu',
        },
        tip: 'Menu names and locations may change with Instagram updates.',
        tipHinglish:
          'Instagram updates ke saath menu ke naam aur location change ho sakte hain.',
      },
      {
        id: 'instagram-step-3',
        title: 'Switch to a Professional Account',
        titleHinglish: 'Professional Account Mein Switch Karein',
        description:
          'Select Switch to professional account. Read the introduction and follow the on-screen instructions to start setting up your professional profile.',
        descriptionHinglish:
          'Switch to professional account option select karein. Introduction padhein aur apni professional profile setup karne ke liye screen par diye gaye instructions follow karein.',
        image: {
          key: 'instagram-professional-step',
          type: 'step',
          alt: 'Instagram switch to professional account screen',
        },
        tip: 'Professional accounts provide access to insights, professional tools, and additional account features.',
        tipHinglish:
          'Professional account se aapko insights, professional tools aur additional account features milte hain.',
      },
      {
        id: 'instagram-step-4',
        title: 'Choose Business or Creator Account',
        titleHinglish: 'Business Ya Creator Account Chunein',
        description:
          'Choose Business if you manage a shop, company, or service. Choose Creator if you create content as an influencer, artist, or public personality.',
        descriptionHinglish:
          'Agar aap shop, company ya service manage karte hain toh Business choose karein. Agar aap influencer, artist ya content creator hain toh Creator choose karein.',
        image: {
          key: 'instagram-account-type-step',
          type: 'step',
          alt: 'Instagram Business and Creator account selection',
        },
        tip: 'Choose the account type that best matches how you plan to use Instagram.',
        tipHinglish:
          'Apne Instagram use karne ke purpose ke according sahi account type choose karein.',
      },
      {
        id: 'instagram-step-5',
        title: 'Select Your Business or Creator Category',
        titleHinglish: 'Apni Business Ya Creator Category Chunein',
        description:
          'Choose a category that describes your work, such as Clothing Store, Restaurant, Digital Creator, or Photographer. Decide whether to display the category on your profile.',
        descriptionHinglish:
          'Apne kaam se related category choose karein, jaise Clothing Store, Restaurant, Digital Creator ya Photographer. Decide karein ki category ko profile par dikhana hai ya nahi.',
        image: {
          key: 'instagram-category-step',
          type: 'step',
          alt: 'Instagram professional account category selection',
        },
        tip: 'Select the most relevant category so visitors can understand what you do.',
        tipHinglish:
          'Sabse relevant category select karein, taaki visitors samajh sakein ki aap kya kaam karte hain.',
      },
      {
        id: 'instagram-step-6',
        title: 'Add Contact Information',
        titleHinglish: 'Contact Information Add Karein',
        description:
          'Add your business email, phone number, or business address if needed. Choose which contact details should appear publicly on your profile.',
        descriptionHinglish:
          'Zarurat ke according apna business email, phone number ya business address add karein. Decide karein ki kaunsi contact details aapki profile par public dikhni chahiye.',
        image: {
          key: 'instagram-contact-step',
          type: 'step',
          alt: 'Instagram professional account contact information setup',
        },
        tip: 'Use business contact details instead of personal information whenever possible.',
        tipHinglish:
          'Jahan possible ho, personal information ki jagah business contact details use karein.',
      },
      {
        id: 'instagram-step-7',
        title: 'Complete and Review Your Professional Profile',
        titleHinglish: 'Professional Profile Complete Karke Check Karein',
        description:
          'Add a clear profile picture, write a useful bio, and review your category and contact details. Check your profile to make sure everything is correct. Your professional account is now ready to use.',
        descriptionHinglish:
          'Clear profile picture add karein, useful bio likhein aur apni category aur contact details check karein. Profile open karke confirm karein ki saari information sahi hai. Ab aapka professional account use karne ke liye ready hai.',
        image: {
          key: 'instagram-complete-profile-step',
          type: 'step',
          alt: 'Completed Instagram professional account profile',
        },
        tip: 'Professional accounts are public. Make sure you are comfortable sharing your profile content publicly.',
        tipHinglish:
          'Professional accounts public hote hain. Confirm karein ki aap apni profile ka content public share karne mein comfortable hain.',
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
    whatyouneed: [
      'A Facebook account',
      'Facebook app or website access',
      'Business name, category, and a short description',
    ],
    whatyouneedHinglish: [
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
          alt: 'Facebook home screen on mobile and desktop',
        },
        tip: 'A Facebook Page is different from your personal profile.',
        tipHinglish: 'Facebook Page aapki personal profile se alag hota hai.',
      },
      {
        id: 'facebook-step-2',
        title: 'Find the Pages Section',
        titleHinglish: 'Pages Section Dhoondhein',
        description:
          'Open the Facebook menu and find Pages. Select the option to create a new Page. The menu location may vary depending on your device and app version.',
        descriptionHinglish:
          'Facebook menu kholein aur Pages option dhoondhein. Naya Page banane ka option select karein. Menu ki location device aur app version ke hisaab se alag ho sakti hai.',
        image: {
          key: 'facebook-pages-step',
          type: 'step',
          alt: 'Facebook Pages section on mobile and desktop',
        },
      },
      {
        id: 'facebook-step-3',
        title: 'Start Creating Your Page',
        titleHinglish: 'Apna Page Banana Shuru Karein',
        description:
          'Select Create New Page and begin the setup process. Facebook will guide you through the required details.',
        descriptionHinglish:
          'Create New Page select karein aur setup process shuru karein. Facebook aapse zaroori details fill karne ko kahega.',
        image: {
          key: 'facebook-create-page-step',
          type: 'step',
          alt: 'Facebook create new Page option',
        },
      },
      {
        id: 'facebook-step-4',
        title: 'Enter Your Page Details',
        titleHinglish: 'Apne Page Ki Details Bharein',
        description:
          'Enter your business or brand name, choose a relevant category, and write a short description explaining your products or services.',
        descriptionHinglish:
          'Apne business ya brand ka naam likhein, relevant category chunein aur ek short description likhein jo aapke products ya services ke baare mein bataye.',
        image: {
          key: 'facebook-page-details-step',
          type: 'step',
          alt: 'Facebook Page name, category and description form',
        },
        tip: 'Use your actual business name and a category that accurately describes your work.',
        tipHinglish:
          'Apne business ka asli naam aur apne kaam se match karti category use karein.',
      },
      {
        id: 'facebook-step-5',
        title: 'Add Contact Information',
        titleHinglish: 'Contact Information Add Karein',
        description:
          'Add your business phone number, email, website, location, and business hours where applicable. Only provide information you want customers to see.',
        descriptionHinglish:
          'Apna business phone number, email, website, location aur business hours zaroorat ke hisaab se add karein. Sirf wahi information dein jo aap customers ko dikhana chahte hain.',
        image: {
          key: 'facebook-page-contact-step',
          type: 'step',
          alt: 'Facebook Page contact information settings',
        },
        tip: 'Use a contact number that customers can actually reach.',
        tipHinglish:
          'Wahi contact number use karein jis par customers aapse contact kar sakein.',
      },
      {
        id: 'facebook-step-6',
        title: 'Add Profile and Cover Photos',
        titleHinglish: 'Profile Aur Cover Photos Lagayein',
        description:
          'Upload a clear profile picture, preferably your business logo, and a suitable cover photo that represents your business or services.',
        descriptionHinglish:
          'Ek clear profile picture upload karein, preferably apna business logo, aur ek suitable cover photo lagayein jo aapke business ya services ko represent kare.',
        image: {
          key: 'facebook-page-photos-step',
          type: 'step',
          alt: 'Facebook Page profile picture and cover photo setup',
        },
        tip: 'Use clear, properly sized images so your Page looks professional on mobile and desktop.',
        tipHinglish:
          'Clear aur properly sized images use karein taaki aapka Page mobile aur desktop dono par achha dikhe.',
      },
      {
        id: 'facebook-step-7',
        title: 'Customize Your Page',
        titleHinglish: 'Apne Page Ko Customize Karein',
        description:
          'Set a memorable Page username, add a suitable action button such as Call Now or WhatsApp if available, and organize relevant Page information.',
        descriptionHinglish:
          'Apne Page ke liye ek yaad rehne wala username set karein. Available options mein se Call Now ya WhatsApp jaisa action button add karein aur Page ki zaroori information organize karein.',
        image: {
          key: 'facebook-page-customize-step',
          type: 'step',
          alt: 'Facebook Page username and action button customization',
        },
        tip: 'Choose a simple username that matches your business name.',
        tipHinglish:
          'Aisa simple username chunein jo aapke business name se match karta ho.',
      },
      {
        id: 'facebook-step-8',
        title: 'Review and Publish Your Page',
        titleHinglish: 'Page Check Karke Publish Karein',
        description:
          'Review your Page name, category, description, photos, and contact details. Make sure everything is correct before publishing your Page.',
        descriptionHinglish:
          'Page ka naam, category, description, photos aur contact details check karein. Publish karne se pehle confirm karein ki sabhi details sahi hain.',
        image: {
          key: 'facebook-page-publish-step',
          type: 'step',
          alt: 'Facebook Page review and publish screen',
        },
      },
      {
        id: 'facebook-step-9',
        title: 'Publish Your First Post',
        titleHinglish: 'Apni Pehli Post Publish Karein',
        description:
          'Introduce your business with a welcome post. Share what you offer, add a relevant photo, and include a clear way for customers to contact you.',
        descriptionHinglish:
          'Ek welcome post ke through apne business ka introduction dein. Apni services ya products batayein, relevant photo add karein aur customers ko contact karne ka clear option dein.',
        image: {
          key: 'facebook-first-post-step',
          type: 'step',
          alt: 'Facebook business Page first post composer',
        },
        tip: 'Invite relevant friends to follow your Page and keep sharing useful updates.',
        tipHinglish:
          'Apne relevant friends ko Page follow karne ke liye invite karein aur useful updates share karte rahein.',
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
    whatyouneed: [
      'A Google account',
      'YouTube app or website access',
      'A channel name and optional profile image',
    ],
    whatyouneedHinglish: [
      'Ek Google account',
      'YouTube app ya website ka access',
      'Channel ka naam aur optional profile image',
    ],
    steps: [
      {
        id: 'youtube-step-1',
        title: 'Open YouTube and Sign In',
        titleHinglish: 'YouTube Kholein Aur Sign In Karein',
        description:
          'Open the YouTube app or visit youtube.com in your browser. Sign in using your Google account to access YouTube features.',
        descriptionHinglish:
          'YouTube app kholein ya browser mein youtube.com visit karein. YouTube ke features access karne ke liye apne Google account se sign in karein.',
        image: {
          key: 'youtube-home-step',
          type: 'step',
          alt: 'YouTube home screen with Google account signed in',
        },
        tip: 'If you do not have a Google account, create one before continuing.',
        tipHinglish:
          'Agar aapke paas Google account nahi hai, toh aage badhne se pehle ek account create karein.',
      },
      {
        id: 'youtube-step-2',
        title: 'Create Your YouTube Channel',
        titleHinglish: 'Apna YouTube Channel Banayein',
        description:
          'Tap your profile picture in the top-right corner. Select the option to create a channel and follow the on-screen instructions.',
        descriptionHinglish:
          'Top-right corner mein apni profile picture par tap karein. Channel create karne ka option select karein aur screen par diye gaye instructions follow karein.',
        image: {
          key: 'youtube-channel-menu-step',
          type: 'step',
          alt: 'YouTube profile menu showing channel creation option',
        },
        tip: 'If you already have a channel, check whether you need to create a separate channel or use your existing one.',
        tipHinglish:
          'Agar aapka pehle se channel hai, toh check karein ki aapko naya channel banana hai ya existing channel use karna hai.',
      },
      {
        id: 'youtube-step-3',
        title: 'Choose Your Channel Name and Handle',
        titleHinglish: 'Channel Ka Naam Aur Handle Chunein',
        description:
          'Enter a channel name that represents your content, business, or personal brand. Choose an available handle starting with @ that people can easily remember and search for.',
        descriptionHinglish:
          'Aisa channel name enter karein jo aapke content, business ya personal brand ko represent kare. Ek available handle chunein jo @ se start hota ho aur log aasani se yaad rakh sakein.',
        image: {
          key: 'youtube-channel-name-step',
          type: 'step',
          alt: 'YouTube channel name and handle setup screen',
        },
        tip: 'Choose a simple and memorable name. You can change your channel name and handle later, subject to YouTube limits.',
        tipHinglish:
          'Simple aur yaad rehne wala naam chunein. YouTube ki limits ke according aap baad mein channel name aur handle change kar sakte hain.',
      },
      {
        id: 'youtube-step-4',
        title: 'Add Your Channel Profile Picture',
        titleHinglish: 'Channel Ki Profile Picture Add Karein',
        description:
          'Choose a clear profile picture that represents you, your business, or your brand. Upload it through your channel customization settings.',
        descriptionHinglish:
          'Ek clear profile picture choose karein jo aapko, aapke business ya brand ko represent kare. Channel customization settings se ise upload karein.',
        image: {
          key: 'youtube-profile-picture-step',
          type: 'step',
          alt: 'YouTube channel profile picture customization',
        },
        tip: 'Use a clear logo or recognizable image that looks good in a small circular display.',
        tipHinglish:
          'Clear logo ya pehchaan mein aane wali image use karein jo chhote circular display mein bhi achhi dikhe.',
      },
      {
        id: 'youtube-step-5',
        title: 'Create and Upload Your Channel Banner',
        titleHinglish: 'Channel Banner Banayein Aur Upload Karein',
        description:
          'Create a channel banner that matches your content or brand. Add your channel name or a short tagline and upload it through YouTube Studio customization settings.',
        descriptionHinglish:
          'Apne content ya brand se match karta hua channel banner banayein. Ismein channel name ya short tagline add karein aur YouTube Studio ki customization settings se upload karein.',
        image: {
          key: 'youtube-channel-banner-step',
          type: 'step',
          alt: 'YouTube channel banner customization preview',
        },
        tip: 'YouTube recommends a banner size of 2560 × 1440 pixels. Keep important text and logos within the safe area.',
        tipHinglish:
          'YouTube 2560 × 1440 pixels ka banner size recommend karta hai. Important text aur logo ko safe area ke andar rakhein.',
      },
      {
        id: 'youtube-step-6',
        title: 'Write Your Channel Description',
        titleHinglish: 'Apne Channel Ki Description Likhein',
        description:
          'Open YouTube Studio and go to Customization > Profile. Write a short description explaining your channel, the topics you cover, and what viewers can expect. Add relevant links if needed.',
        descriptionHinglish:
          'YouTube Studio open karein aur Customization > Profile mein jaayein. Ek short description likhein jismein batayein ki aapka channel kis baare mein hai aur viewers ko kya dekhne ko milega. Zarurat ho toh relevant links bhi add karein.',
        image: {
          key: 'youtube-channel-description-step',
          type: 'step',
          alt: 'YouTube Studio channel description and links settings',
        },
        tip: 'Use relevant keywords naturally so viewers can understand your channel topic.',
        tipHinglish:
          'Relevant keywords naturally use karein, taaki viewers aasani se samajh sakein ki aapka channel kis topic par hai.',
      },
      {
        id: 'youtube-step-7',
        title: 'Customize Your Channel Layout',
        titleHinglish: 'Apne Channel Ka Layout Customize Karein',
        description:
          'Open YouTube Studio > Customization > Home tab. Set up your channel homepage with a channel trailer, featured video, and content sections to help visitors explore your videos.',
        descriptionHinglish:
          'YouTube Studio > Customization > Home tab open karein. Apne channel homepage par channel trailer, featured video aur content sections set karein, taaki visitors aapke videos aasani se explore kar sakein.',
        image: {
          key: 'youtube-channel-layout-step',
          type: 'step',
          alt: 'YouTube Studio channel homepage layout customization',
        },
        tip: 'You can add or rearrange homepage sections as your channel grows.',
        tipHinglish:
          'Jaise-jaise aapka channel grow karega, aap homepage sections add ya rearrange kar sakte hain.',
      },
      {
        id: 'youtube-step-8',
        title: 'Review Channel Settings and Verify Your Account',
        titleHinglish:
          'Channel Settings Check Karein Aur Account Verify Karein',
        description:
          'Open YouTube Studio settings and review your channel details, audience settings, and other available options. Complete phone verification if you want access to additional creator features.',
        descriptionHinglish:
          'YouTube Studio settings open karein aur channel details, audience settings aur available options check karein. Additional creator features access karne ke liye phone verification complete karein.',
        image: {
          key: 'youtube-channel-settings-step',
          type: 'step',
          alt: 'YouTube Studio channel settings and feature eligibility',
        },
        tip: 'Set your audience accurately. For example, mark content as Made for Kids only if it is actually created for children.',
        tipHinglish:
          'Audience setting sahi select karein. Jaise, Made for Kids tabhi select karein jab content sach mein bachchon ke liye banaya gaya ho.',
      },
      {
        id: 'youtube-step-9',
        title: 'Review Your Channel and Prepare Your First Video',
        titleHinglish: 'Channel Check Karein Aur Pehla Video Ready Karein',
        description:
          'Visit your channel and review its name, handle, profile picture, banner, description, and layout. Prepare your first video with a suitable title, thumbnail, description, and audience settings. You are now ready to upload.',
        descriptionHinglish:
          'Apna channel visit karein aur name, handle, profile picture, banner, description aur layout check karein. Apna pehla video suitable title, thumbnail, description aur audience settings ke saath ready karein. Ab aap video upload karne ke liye ready hain.',
        image: {
          key: 'youtube-first-video-step',
          type: 'step',
          alt: 'YouTube channel ready for first video upload',
        },
        tip: 'Before publishing, review your video visibility, audience selection, title, and description.',
        tipHinglish:
          'Video publish karne se pehle visibility, audience selection, title aur description zaroor check karein.',
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
    whatyouneed: [
      'A phone number you can use for your business',
      'WhatsApp Business app installed',
      'Business name, category, and optional logo',
    ],
    whatyouneedHinglish: [
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
          'Install the official WhatsApp Business app from Google Play Store or Apple App Store and open it.',
        descriptionHinglish:
          'Google Play Store ya Apple App Store se official WhatsApp Business app install karein aur use kholein.',
        image: {
          key: 'whatsapp-business-app-step',
          type: 'step',
          alt: 'WhatsApp Business app on a smartphone',
        },
        tip: 'WhatsApp Messenger and WhatsApp Business are separate apps.',
        tipHinglish: 'WhatsApp Messenger aur WhatsApp Business alag apps hain.',
      },
      {
        id: 'whatsapp-step-2',
        title: 'Register Your Business Number',
        titleHinglish: 'Apna Business Number Register Karein',
        description:
          'Follow the on-screen instructions to enter your phone number and verify it using the code sent by WhatsApp. If you are moving an existing number, review the migration instructions first.',
        descriptionHinglish:
          'Screen par diye gaye instructions follow karke phone number enter karein aur WhatsApp se aaye verification code se verify karein. Agar existing number transfer kar rahe hain, toh pehle migration instructions check karein.',
        image: {
          key: 'whatsapp-number-verification-step',
          type: 'step',
          alt: 'WhatsApp Business phone number verification screen',
        },
        warning:
          'Understand how moving a number may affect your existing WhatsApp account before proceeding.',
        warningHinglish:
          'Number transfer karne se existing WhatsApp account par kya asar padega, ye samajhne ke baad hi aage badhein.',
      },
      {
        id: 'whatsapp-step-3',
        title: 'Enter Your Business Name and Category',
        titleHinglish: 'Business Ka Naam Aur Category Bharein',
        description:
          'Enter your business name and select the category that best describes your products or services. Choose a recognizable name that customers can easily identify.',
        descriptionHinglish:
          'Apne business ka naam enter karein aur products ya services se match karti category select karein. Aisa naam choose karein jise customers aasani se pehchaan sakein.',
        image: {
          key: 'whatsapp-business-details-step',
          type: 'step',
          alt: 'WhatsApp Business name and category setup',
        },
        tip: 'Choose your business name carefully because changing it later may require additional steps.',
        tipHinglish:
          'Business name carefully choose karein kyunki baad mein change karne ke liye extra steps lag sakte hain.',
      },
      {
        id: 'whatsapp-step-4',
        title: 'Add Your Business Profile Information',
        titleHinglish: 'Business Profile Ki Information Add Karein',
        description:
          'Open your business profile settings and add a profile photo or logo, business description, address, email, and website where applicable.',
        descriptionHinglish:
          'Business profile settings kholein aur profile photo ya logo, business description, address, email aur website zaroorat ke hisaab se add karein.',
        image: {
          key: 'whatsapp-business-profile-step',
          type: 'step',
          alt: 'WhatsApp Business profile information settings',
        },
        tip: 'Use a clear business logo and a short description explaining what you offer.',
        tipHinglish:
          'Clear business logo aur short description use karein jo bataye ki aap kya services ya products offer karte hain.',
      },
      {
        id: 'whatsapp-step-5',
        title: 'Set Your Business Hours',
        titleHinglish: 'Business Hours Set Karein',
        description:
          'Add your working days and opening hours in your business profile. Choose the correct availability so customers know when they can contact or visit you.',
        descriptionHinglish:
          'Business profile mein working days aur opening hours add karein. Sahi timings set karein taaki customers ko pata rahe ki aapse kab contact ya visit kar sakte hain.',
        image: {
          key: 'whatsapp-business-hours-step',
          type: 'step',
          alt: 'WhatsApp Business opening hours settings',
        },
        tip: 'Keep your business hours updated, especially during holidays.',
        tipHinglish:
          'Business hours updated rakhein, especially holidays ke time.',
      },
      {
        id: 'whatsapp-step-6',
        title: 'Set Up Business Messaging Tools',
        titleHinglish: 'Business Messaging Tools Setup Karein',
        description:
          'Explore greeting messages, away messages, and quick replies. Set up automatic responses for common questions and messages you receive from customers.',
        descriptionHinglish:
          'Greeting messages, away messages aur quick replies explore karein. Customers ke common questions aur messages ke liye automatic responses setup karein.',
        image: {
          key: 'whatsapp-business-tools-step',
          type: 'step',
          alt: 'WhatsApp Business messaging tools and automated replies',
        },
        tip: 'Write clear, helpful replies that sound natural and provide useful information.',
        tipHinglish:
          'Clear aur helpful replies likhein jo natural lagein aur useful information dein.',
      },
      {
        id: 'whatsapp-step-7',
        title: 'Create Your Product or Service Catalog',
        titleHinglish: 'Product Ya Service Catalog Banayein',
        description:
          'Add products or services to your WhatsApp catalog with clear names, descriptions, prices where applicable, and good-quality photos. This helps customers explore your offerings directly in WhatsApp.',
        descriptionHinglish:
          'WhatsApp catalog mein apne products ya services add karein. Clear names, descriptions, zaroorat ke hisaab se prices aur achhi quality ki photos lagayein. Isse customers WhatsApp par hi aapki offerings dekh sakte hain.',
        image: {
          key: 'whatsapp-business-catalog-step',
          type: 'step',
          alt: 'WhatsApp Business product and service catalog',
        },
        tip: 'Keep product details, prices, and photos accurate and updated.',
        tipHinglish:
          'Product details, prices aur photos ko accurate aur updated rakhein.',
      },
      {
        id: 'whatsapp-step-8',
        title: 'Review and Share Your Business Profile',
        titleHinglish: 'Business Profile Check Karke Share Karein',
        description:
          'Review your profile, contact details, business hours, messaging tools, and catalog. Share your business profile using its QR code, short link, or other available sharing options.',
        descriptionHinglish:
          'Apna profile, contact details, business hours, messaging tools aur catalog check karein. QR code, short link ya available sharing options ke through apna business profile share karein.',
        image: {
          key: 'whatsapp-business-share-step',
          type: 'step',
          alt: 'WhatsApp Business profile sharing and QR code',
        },
        tip: 'Test your profile and messaging features before sharing your business number publicly.',
        tipHinglish:
          'Business number publicly share karne se pehle profile aur messaging features test karein.',
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
