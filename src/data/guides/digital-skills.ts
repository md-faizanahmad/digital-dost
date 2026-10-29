import type { Guide } from '../../types/guide';

export const DIGITAL_SKILLS_GUIDES: Guide[] = [
  {
    id: 'use-google-search-effectively',
    slug: 'use-google-search-effectively',
    title: 'How to Search Google Effectively',
    titleHinglish: 'Google Par Sahi Tarike Se Search Kaise Karein',
    description:
      'Learn to find useful and reliable information online using better search terms and simple search techniques.',
    descriptionHinglish:
      'Behtar search words aur simple techniques ki help se internet par useful aur reliable information dhoondhna seekhein.',
    categoryId: 'digital-skills',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    coverImage: {
      key: 'google-search-cover',
      type: 'cover',
      alt: 'Searching for information using a search engine',
    },
    searchKeywords: [
      'Google search',
      'internet search',
      'search tips',
      'find information online',
      'Google kaise use kare',
      'internet par search kaise kare',
      'online information kaise dhoonde',
    ],
    prerequisites: ['A smartphone or computer', 'Internet connection'],
    prerequisitesHinglish: ['Smartphone ya computer', 'Internet connection'],
    steps: [
      {
        id: 'google-search-open',
        title: 'Open Google',
        titleHinglish: 'Google Open Karein',
        description:
          'Open your browser and visit Google. Tap the search box to begin.',
        descriptionHinglish:
          'Apna browser open karke Google par jaayein. Search shuru karne ke liye search box par tap karein.',
        image: {
          key: 'google-search-open-step',
          type: 'step',
          alt: 'Opening Google in a web browser',
        },
        tip: 'You can also search directly from your browser address bar.',
        tipHinglish:
          'Aap browser ke address bar se bhi directly search kar sakte hain.',
      },
      {
        id: 'google-search-specific',
        title: 'Use Specific Keywords',
        titleHinglish: 'Specific Keywords Use Karein',
        description:
          'Write a clear search query. Instead of searching for “phone,” try “best budget Android phone under ₹15000 in India.”',
        descriptionHinglish:
          'Clear search query likhein. Sirf “phone” search karne ke bajaye “India mein ₹15000 se kam ka best budget Android phone” search karein.',
        image: {
          key: 'google-search-keywords-step',
          type: 'step',
          alt: 'Entering specific keywords into a search engine',
        },
        tip: 'Include the topic, location, price range, or year when relevant.',
        tipHinglish:
          'Zaroorat ke hisaab se topic, location, price range ya year add karein.',
      },
      {
        id: 'google-search-refine',
        title: 'Refine Your Search',
        titleHinglish: 'Search Ko Aur Specific Banayein',
        description:
          'If results are not useful, add more details or change your keywords. You can also put an exact phrase inside quotation marks.',
        descriptionHinglish:
          'Agar useful results nahi mil rahe, to aur details add karein ya keywords change karein. Exact phrase dhoondhne ke liye use quotation marks mein likh sakte hain.',
        image: {
          key: 'google-search-refine-step',
          type: 'step',
          alt: 'Refining a search query to get better results',
        },
        tip: 'Example: search for "luggage repair in Gaya" to look for that exact phrase.',
        tipHinglish:
          'Example: exact phrase dhoondhne ke liye "luggage repair in Gaya" search karein.',
      },
      {
        id: 'google-search-compare',
        title: 'Compare Search Results',
        titleHinglish: 'Search Results Compare Karein',
        description:
          'Check more than one result. Look at the website name, publication date, author, and supporting evidence before trusting information.',
        descriptionHinglish:
          'Ek se zyada results check karein. Information par bharosa karne se pehle website ka naam, publish date, author aur evidence dekhein.',
        image: {
          key: 'google-search-compare-step',
          type: 'step',
          alt: 'Comparing information from multiple search results',
        },
        tip: 'Official websites are usually the best starting point for policies and services.',
        tipHinglish:
          'Policies aur services ki information ke liye official websites se shuru karna behtar hai.',
      },
      {
        id: 'google-search-safe',
        title: 'Search Safely',
        titleHinglish: 'Safe Tarike Se Search Karein',
        description:
          'Avoid suspicious links and unexpected downloads. Check website addresses before entering personal information.',
        descriptionHinglish:
          'Suspicious links aur unknown downloads se bachein. Personal information enter karne se pehle website ka address check karein.',
        image: {
          key: 'google-search-safety-step',
          type: 'step',
          alt: 'Checking a website before opening or sharing information',
        },
        warning:
          'Never enter passwords, OTPs, or banking details on websites you do not trust.',
        warningHinglish:
          'Untrusted websites par password, OTP ya banking details kabhi enter na karein.',
      },
    ],
    relatedGuideIds: [
      'use-email-effectively',
      'identify-online-scams',
      'use-digital-payments-safely',
    ],
    sources: [
      {
        title: 'Google Search Help',
        url: 'https://support.google.com/websearch/',
        description: 'Official help for using Google Search.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'use-email-effectively',
    slug: 'use-email-effectively',
    title: 'How to Use Email',
    titleHinglish: 'Email Kaise Use Karein',
    description:
      'Learn the basics of sending, receiving, replying to, and organizing emails.',
    descriptionHinglish:
      'Email bhejna, receive karna, reply dena aur emails ko organize karna seekhein.',
    categoryId: 'digital-skills',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'email-basics-cover',
      type: 'cover',
      alt: 'Email inbox displayed on a digital device',
    },
    searchKeywords: [
      'email tutorial',
      'how to send email',
      'Gmail basics',
      'email for beginners',
      'email kaise bheje',
      'Gmail kaise use kare',
      'email reply kaise kare',
      'email attachment',
    ],
    prerequisites: [
      'A smartphone or computer',
      'An email account',
      'Internet connection',
    ],
    prerequisitesHinglish: [
      'Smartphone ya computer',
      'Ek email account',
      'Internet connection',
    ],
    steps: [
      {
        id: 'email-open-inbox',
        title: 'Open Your Email Account',
        titleHinglish: 'Apna Email Account Open Karein',
        description:
          'Open your email app or provider website and sign in to your account.',
        descriptionHinglish:
          'Apna email app ya provider ki website open karein aur account mein sign in karein.',
        image: {
          key: 'email-open-step',
          type: 'step',
          alt: 'Opening an email inbox',
        },
        tip: 'Use only the official email app or website.',
        tipHinglish: 'Sirf official email app ya website use karein.',
      },
      {
        id: 'email-compose',
        title: 'Write a New Email',
        titleHinglish: 'Naya Email Likhein',
        description:
          'Tap Compose or New Email. Enter the recipient’s email address and write a clear subject line.',
        descriptionHinglish:
          'Compose ya New Email par tap karein. Receiver ka email address daalein aur subject mein email ka purpose clearly likhein.',
        image: {
          key: 'email-compose-step',
          type: 'step',
          alt: 'Composing a new email with recipient and subject',
        },
        tip: 'Check the recipient address carefully before sending.',
        tipHinglish:
          'Email bhejne se pehle receiver ka address dhyan se check karein.',
      },
      {
        id: 'email-write-message',
        title: 'Write Your Message',
        titleHinglish: 'Apna Message Likhein',
        description:
          'Write your message politely and clearly. Include the important details and review spelling before sending.',
        descriptionHinglish:
          'Apna message politely aur clearly likhein. Zaroori details add karein aur send karne se pehle spelling check karein.',
        image: {
          key: 'email-message-step',
          type: 'step',
          alt: 'Writing a clear email message',
        },
        tip: 'Use a greeting, a short message, and a suitable closing.',
        tipHinglish: 'Greeting, short message aur suitable closing use karein.',
      },
      {
        id: 'email-attachment',
        title: 'Attach a File',
        titleHinglish: 'File Attach Karein',
        description:
          'If needed, use the attachment icon to add a document or image. Wait for the upload to finish.',
        descriptionHinglish:
          'Zaroorat ho to attachment icon se document ya image add karein. Upload complete hone ka wait karein.',
        image: {
          key: 'email-attachment-step',
          type: 'step',
          alt: 'Attaching a document to an email',
        },
        tip: 'Check that you attached the correct file.',
        tipHinglish: 'Check karein ki sahi file attach hui hai.',
      },
      {
        id: 'email-send-reply',
        title: 'Send and Reply',
        titleHinglish: 'Email Send Karein Aur Reply Dein',
        description:
          'Review the email and tap Send. To respond to an email you received, open it and choose Reply.',
        descriptionHinglish:
          'Email review karke Send par tap karein. Kisi received email ka jawab dene ke liye use open karein aur Reply choose karein.',
        image: {
          key: 'email-send-step',
          type: 'step',
          alt: 'Sending an email and replying to a received message',
        },
        warning:
          'Check recipients and attachments before sending confidential information.',
        warningHinglish:
          'Confidential information bhejne se pehle recipients aur attachments check karein.',
      },
    ],
    relatedGuideIds: [
      'use-google-search-effectively',
      'identify-online-scams',
      'use-digital-payments-safely',
    ],
    sources: [
      {
        title: 'Gmail Help',
        url: 'https://support.google.com/mail/',
        description: 'Official Gmail help and instructions.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'identify-online-scams',
    slug: 'identify-online-scams',
    title: 'How to Identify Online Scams',
    titleHinglish: 'Online Scams Ko Kaise Pehchanein',
    description:
      'Learn to recognize suspicious messages, fake websites, phishing attempts, and common online fraud tactics.',
    descriptionHinglish:
      'Suspicious messages, fake websites, phishing aur common online fraud ko pehchanna seekhein.',
    categoryId: 'digital-skills',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'online-safety-cover',
      type: 'cover',
      alt: 'Recognizing a suspicious online message',
    },
    searchKeywords: [
      'online scam',
      'internet safety',
      'phishing',
      'fake website',
      'online fraud prevention',
      'online fraud kaise pehchane',
      'fake message',
      'OTP scam',
      'cyber safety basics',
    ],
    prerequisites: ['A smartphone or computer'],
    prerequisitesHinglish: ['Smartphone ya computer'],
    steps: [
      {
        id: 'scam-urgent-message',
        title: 'Watch for Urgent Messages',
        titleHinglish: 'Urgent Messages Se Savdhan Rahein',
        description:
          'Be careful with messages claiming your account will be blocked or a prize will expire unless you act immediately.',
        descriptionHinglish:
          'Aise messages se savdhan rahein jo kehte hain ki turant action nahi liya to account block ho jayega ya prize chala jayega.',
        image: {
          key: 'scam-urgent-message-step',
          type: 'step',
          alt: 'Recognizing a suspicious urgent message',
        },
        tip: 'Pause and verify the claim independently before doing anything.',
        tipHinglish:
          'Koi action lene se pehle ruk kar claim ko independently verify karein.',
      },
      {
        id: 'scam-check-links',
        title: 'Check Links and Websites',
        titleHinglish: 'Links Aur Websites Check Karein',
        description:
          'Look carefully at the website address. Scammers may use misspelled names or addresses that imitate trusted brands.',
        descriptionHinglish:
          'Website ka address dhyan se dekhein. Scammers trusted brands jaise dikhne wale misspelled names ya fake addresses use kar sakte hain.',
        image: {
          key: 'scam-check-link-step',
          type: 'step',
          alt: 'Inspecting a suspicious website address',
        },
        tip: 'Open the official website yourself instead of relying on an unexpected message link.',
        tipHinglish:
          'Unknown message ke link par click karne ke bajaye official website khud open karein.',
      },
      {
        id: 'scam-protect-otp',
        title: 'Never Share OTPs or PINs',
        titleHinglish: 'OTP Ya PIN Kabhi Share Na Karein',
        description:
          'Never disclose your OTP, UPI PIN, banking password, or card security code to someone who contacts you unexpectedly.',
        descriptionHinglish:
          'Kisi unknown caller ya message karne wale ko OTP, UPI PIN, banking password ya card security code na batayein.',
        image: {
          key: 'scam-protect-otp-step',
          type: 'step',
          alt: 'Protecting sensitive authentication information',
        },
        warning:
          'Never enter your UPI PIN to receive money. A PIN is used to authorize certain payments.',
        warningHinglish:
          'Paise receive karne ke liye UPI PIN enter na karein. PIN kuch payments authorize karne ke liye use hota hai.',
      },
      {
        id: 'scam-verify-identity',
        title: 'Verify the Person or Company',
        titleHinglish: 'Person Ya Company Verify Karein',
        description:
          'If someone claims to represent a bank, government office, delivery company, or support team, contact the organization through its official channel.',
        descriptionHinglish:
          'Agar koi bank, government office, delivery company ya support team se hone ka claim kare, to organization ke official channel se contact karke verify karein.',
        image: {
          key: 'scam-verify-identity-step',
          type: 'step',
          alt: 'Verifying a company through an official contact channel',
        },
        tip: 'Do not trust a phone number or link only because it appears in the suspicious message.',
        tipHinglish:
          'Sirf suspicious message mein diya gaya phone number ya link dekh kar bharosa na karein.',
      },
      {
        id: 'scam-report',
        title: 'Report Suspicious Activity',
        titleHinglish: 'Suspicious Activity Report Karein',
        description:
          'Do not send more money or information if you suspect fraud. Save relevant evidence and report the incident through the appropriate official channel.',
        descriptionHinglish:
          'Fraud ka shak ho to aur paise ya information na bhejein. Relevant evidence save karein aur appropriate official channel par report karein.',
        image: {
          key: 'scam-report-step',
          type: 'step',
          alt: 'Reporting suspicious online activity',
        },
        tip: 'In India, suspected cyber financial fraud can be reported through the official cybercrime portal or helpline 1930.',
        tipHinglish:
          'India mein suspected cyber financial fraud ko official cybercrime portal ya helpline 1930 par report kiya ja sakta hai.',
      },
    ],
    relatedGuideIds: [
      'use-google-search-effectively',
      'use-email-effectively',
      'use-digital-payments-safely',
    ],
    sources: [
      {
        title: 'Indian Cyber Crime Portal',
        url: 'https://cybercrime.gov.in/',
        description: 'Official portal for reporting cybercrime in India.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'use-digital-payments-safely',
    slug: 'use-digital-payments-safely',
    title: 'How to Use Digital Payments Safely',
    titleHinglish: 'Digital Payments Safe Tarike Se Kaise Karein',
    description:
      'Understand basic digital payment steps, verify payment details, and avoid common payment mistakes.',
    descriptionHinglish:
      'Digital payment ke basic steps samjhein, payment details verify karein aur common mistakes se bachein.',
    categoryId: 'digital-skills',
    difficulty: 'beginner',
    estimatedMinutes: 7,
    coverImage: {
      key: 'digital-payments-cover',
      type: 'cover',
      alt: 'Making a digital payment using a smartphone',
    },
    searchKeywords: [
      'digital payments',
      'UPI safety',
      'online payment',
      'how to use UPI',
      'digital payment safety',
      'UPI kaise use kare',
      'online payment kaise kare',
      'UPI PIN safety',
      'safe money transfer',
    ],
    prerequisites: [
      'A smartphone',
      'A supported payment app',
      'A bank account configured for the payment service',
    ],
    prerequisitesHinglish: [
      'Smartphone',
      'Supported payment app',
      'Payment service ke liye configured bank account',
    ],
    steps: [
      {
        id: 'payment-open-app',
        title: 'Open Your Payment App',
        titleHinglish: 'Payment App Open Karein',
        description:
          'Open your trusted payment app and sign in or unlock it using its supported security method.',
        descriptionHinglish:
          'Apna trusted payment app open karein aur supported security method se sign in ya unlock karein.',
        image: {
          key: 'payment-open-app-step',
          type: 'step',
          alt: 'Opening a trusted digital payment app',
        },
        tip: 'Install payment apps from official app stores and keep them updated.',
        tipHinglish:
          'Payment apps official app store se install karein aur updated rakhein.',
      },
      {
        id: 'payment-select-recipient',
        title: 'Choose the Correct Recipient',
        titleHinglish: 'Sahi Receiver Choose Karein',
        description:
          'Select the recipient or enter their payment details. Confirm the recipient name and other details before proceeding.',
        descriptionHinglish:
          'Receiver select karein ya payment details enter karein. Aage badhne se pehle receiver ka naam aur baaki details confirm karein.',
        image: {
          key: 'payment-recipient-step',
          type: 'step',
          alt: 'Selecting and verifying a payment recipient',
        },
        tip: 'For a new recipient, verify their details before transferring money.',
        tipHinglish:
          'Naye receiver ko paise bhejne se pehle unki details verify karein.',
      },
      {
        id: 'payment-enter-amount',
        title: 'Enter and Check the Amount',
        titleHinglish: 'Amount Enter Karke Check Karein',
        description:
          'Enter the amount you intend to pay. Review the amount, recipient, and payment purpose carefully.',
        descriptionHinglish:
          'Jitne paise bhejne hain, woh amount enter karein. Amount, receiver aur payment ka purpose dhyan se check karein.',
        image: {
          key: 'payment-amount-step',
          type: 'step',
          alt: 'Entering and checking a digital payment amount',
        },
        tip: 'Double-check the amount before confirming the transaction.',
        tipHinglish:
          'Transaction confirm karne se pehle amount dobara check karein.',
      },
      {
        id: 'payment-authorize',
        title: 'Authorize the Payment Securely',
        titleHinglish: 'Payment Securely Authorize Karein',
        description:
          'Follow the payment app instructions. Enter your UPI PIN only inside the trusted payment app when authorizing a payment.',
        descriptionHinglish:
          'Payment app ke instructions follow karein. Payment authorize karte waqt UPI PIN sirf trusted payment app ke andar enter karein.',
        image: {
          key: 'payment-authorize-step',
          type: 'step',
          alt: 'Securely authorizing a digital payment',
        },
        warning:
          'Never share your UPI PIN or OTP with anyone. You do not need to enter your UPI PIN to receive money.',
        warningHinglish:
          'Apna UPI PIN ya OTP kisi ko na batayein. Paise receive karne ke liye UPI PIN enter karne ki zaroorat nahi hoti.',
      },
      {
        id: 'payment-check-status',
        title: 'Confirm the Payment Status',
        titleHinglish: 'Payment Status Confirm Karein',
        description:
          'Check the app transaction status and save the transaction reference when needed. If the status is pending, verify it before trying again.',
        descriptionHinglish:
          'App mein transaction status check karein aur zaroorat par reference number save karein. Agar status pending ho, to dobara payment karne se pehle verify karein.',
        image: {
          key: 'payment-status-step',
          type: 'step',
          alt: 'Checking a digital payment transaction status',
        },
        tip: 'If money is debited but the payment fails, follow your payment app or bank’s official support process.',
        tipHinglish:
          'Agar paise debit ho gaye lekin payment fail hui, to payment app ya bank ke official support process ko follow karein.',
      },
    ],
    relatedGuideIds: [
      'identify-online-scams',
      'use-email-effectively',
      'use-google-search-effectively',
    ],
    sources: [
      {
        title: 'Reserve Bank of India',
        url: 'https://www.rbi.org.in/',
        description: 'Official banking and payment safety information.',
      },
      {
        title: 'National Cyber Crime Reporting Portal',
        url: 'https://cybercrime.gov.in/',
        description: 'Official cybercrime reporting portal in India.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },
];
