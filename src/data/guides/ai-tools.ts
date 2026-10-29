import type { Guide } from '../../types/guide';

export const AI_TOOLS_GUIDES: Guide[] = [
  {
    id: 'how-to-use-ai-tools',
    slug: 'how-to-use-ai-tools',
    title: 'How to Use AI Tools',
    titleHinglish: 'AI Tools Kaise Use Karein',
    description:
      'Learn how to use AI tools to ask questions, learn new skills, write content, and complete everyday tasks.',
    descriptionHinglish:
      'AI tools se questions poochhna, nayi skills seekhna, content likhna aur daily tasks complete karna seekhein.',
    categoryId: 'ai-tools',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    coverImage: {
      key: 'ai-tools-basics-cover',
      type: 'cover',
      alt: 'Person using an AI assistant on a computer',
    },
    searchKeywords: [
      'ai tools',
      'how to use ai',
      'artificial intelligence',
      'chatgpt tutorial',
      'ai for beginners',
      'AI tools kaise use kare',
      'AI kaise chalaye',
      'chatgpt kaise use kare',
      'AI se kaam kaise kare',
    ],
    prerequisites: ['A smartphone or computer', 'Internet connection'],
    prerequisitesHinglish: ['Smartphone ya computer', 'Internet connection'],
    steps: [
      {
        id: 'choose-ai-tool',
        title: 'Choose an AI Tool',
        titleHinglish: 'Ek AI Tool Choose Karein',
        description:
          'Choose an AI tool based on your task. For example, use ChatGPT to ask questions, learn topics, write content, or brainstorm ideas.',
        descriptionHinglish:
          'Apne kaam ke hisaab se AI tool choose karein. Jaise ChatGPT se questions poochh sakte hain, kuch seekh sakte hain, content likh sakte hain ya ideas le sakte hain.',
        image: {
          key: 'ai-tools-choose-step',
          type: 'step',
          alt: 'Choosing an AI assistant',
        },
        tip: 'Start with one tool and learn its basics before trying many tools.',
        tipHinglish:
          'Pehle ek tool ko achhe se use karna seekhein, phir doosre tools try karein.',
      },
      {
        id: 'open-ai-tool',
        title: 'Open the Tool',
        titleHinglish: 'AI Tool Open Karein',
        description:
          'Open the official website or app. Sign in if required, and find the message box where you can type your request.',
        descriptionHinglish:
          'AI tool ki official website ya app open karein. Agar zaroori ho to sign in karein aur message box dhoondhein jahan aap apna sawaal likh sakte hain.',
        image: {
          key: 'ai-tools-open-step',
          type: 'step',
          alt: 'Opening an AI tool and finding the message box',
        },
        tip: 'Use the official app or website to avoid fake apps and websites.',
        tipHinglish:
          'Fake apps aur websites se bachne ke liye official app ya website use karein.',
      },
      {
        id: 'ask-clear-question',
        title: 'Write a Clear Request',
        titleHinglish: 'Apni Baat Saaf Likhein',
        description:
          'Tell the AI exactly what you need. Instead of writing “business,” try “Give me five low-cost business ideas for a small shop in India.”',
        descriptionHinglish:
          'AI ko clearly batayein ki aapko kya chahiye. Sirf “business” likhne ke bajaye likhein: “India mein ek chhoti shop ke liye 5 kam budget wale business ideas batao.”',
        image: {
          key: 'ai-tools-clear-request-step',
          type: 'step',
          alt: 'Typing a clear request into an AI assistant',
        },
        tip: 'Mention your goal, relevant details, and the type of answer you want.',
        tipHinglish:
          'Apna goal, zaroori details aur kis tarah ka answer chahiye, ye batayein.',
      },
      {
        id: 'review-ai-answer',
        title: 'Read and Improve the Answer',
        titleHinglish: 'Answer Padhein Aur Behtar Banayein',
        description:
          'Read the response carefully. If it is too complicated or incomplete, ask the AI to explain it simply, give an example, or provide step-by-step instructions.',
        descriptionHinglish:
          'Answer dhyan se padhein. Agar samajh na aaye ya answer adhura ho, to AI se simple language mein samjhane, example dene ya step-by-step batane ko kahein.',
        image: {
          key: 'ai-tools-review-answer-step',
          type: 'step',
          alt: 'Reviewing and improving an AI-generated answer',
        },
        tip: 'You can ask follow-up questions instead of starting a new conversation.',
        tipHinglish:
          'Har baar nayi chat shuru karne ke bajaye usi conversation mein follow-up question poochh sakte hain.',
      },
      {
        id: 'verify-ai-information',
        title: 'Check Important Information',
        titleHinglish: 'Zaroori Information Verify Karein',
        description:
          'AI can make mistakes or provide outdated information. Verify important facts, prices, medical advice, legal information, and financial decisions using reliable sources.',
        descriptionHinglish:
          'AI kabhi-kabhi galat ya purani information de sakta hai. Important facts, prices, health, legal aur financial information ko reliable sources se verify karein.',
        image: {
          key: 'ai-tools-verify-information-step',
          type: 'step',
          alt: 'Checking AI information against a reliable source',
        },
        warning:
          'Do not share passwords, OTPs, banking details, or other sensitive personal information with an AI tool.',
        warningHinglish:
          'AI tool ke saath password, OTP, banking details ya sensitive personal information share na karein.',
      },
    ],
    relatedGuideIds: [
      'write-better-ai-prompts',
      'practical-ai-prompt-examples',
      'generate-images-with-ai',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description: 'Official help and guidance for using OpenAI products.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'write-better-ai-prompts',
    slug: 'write-better-ai-prompts',
    title: 'How to Write Better AI Prompts',
    titleHinglish: 'AI Ke Liye Achhe Prompts Kaise Likhein',
    description:
      'Learn a simple prompt-writing pattern to get clearer, more useful results from AI tools.',
    descriptionHinglish:
      'AI se clear aur useful answers paane ke liye achhe prompts likhne ka simple tareeka seekhein.',
    categoryId: 'ai-tools',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'ai-prompt-writing-cover',
      type: 'cover',
      alt: 'Writing a clear prompt for an AI assistant',
    },
    searchKeywords: [
      'prompt writing',
      'how to write prompts',
      'AI prompt formula',
      'prompt engineering basics',
      'better AI answers',
      'prompt kaise likhe',
      'AI prompt examples',
      'ChatGPT prompt',
      'prompt writing in hinglish',
    ],
    prerequisites: ['Basic knowledge of using an AI tool'],
    prerequisitesHinglish: ['AI tool ko use karne ki basic knowledge'],
    steps: [
      {
        id: 'prompt-define-role',
        title: 'Give the AI a Role',
        titleHinglish: 'AI Ko Role Batayein',
        description:
          'Tell the AI what kind of helper you need. Example: “Act as a beginner-friendly English teacher.”',
        descriptionHinglish:
          'AI ko batayein ki aapko kis tarah ki help chahiye. Example: “Ek beginner-friendly English teacher ki tarah samjhao.”',
        image: {
          key: 'ai-prompt-role-step',
          type: 'step',
          alt: 'Defining a role for an AI assistant',
        },
        tip: 'A role is useful when you need a specific style of explanation.',
        tipHinglish:
          'Jab aapko kisi particular style mein explanation chahiye, tab role dena useful hota hai.',
      },
      {
        id: 'prompt-state-task',
        title: 'Explain the Task',
        titleHinglish: 'Kaam Clearly Batayein',
        description:
          'Tell the AI exactly what to do. Example: “Teach me five common English sentences used in daily conversation.”',
        descriptionHinglish:
          'AI ko clearly batayein ki kya karna hai. Example: “Mujhe daily conversation mein use hone wale 5 common English sentences sikhao.”',
        image: {
          key: 'ai-prompt-task-step',
          type: 'step',
          alt: 'Writing a clear task for an AI tool',
        },
        tip: 'Use specific action words such as explain, compare, create, summarize, or translate.',
        tipHinglish:
          'Explain, compare, create, summarize ya translate jaise clear action words use karein.',
      },
      {
        id: 'prompt-add-context',
        title: 'Add Relevant Context',
        titleHinglish: 'Zaroori Details Add Karein',
        description:
          'Share the details that affect the answer, such as your skill level, audience, budget, location, or purpose.',
        descriptionHinglish:
          'Answer ko useful banane ke liye apna skill level, audience, budget, location ya purpose jaisi zaroori details dein.',
        image: {
          key: 'ai-prompt-context-step',
          type: 'step',
          alt: 'Adding context to an AI prompt',
        },
        tip: 'Share only information needed for the task. Avoid sensitive personal details.',
        tipHinglish:
          'Sirf kaam se related information share karein. Sensitive personal details na dein.',
      },
      {
        id: 'prompt-set-requirements',
        title: 'Mention Your Requirements',
        titleHinglish: 'Apni Requirements Batayein',
        description:
          'Specify the language, tone, length, number of examples, or other constraints. Example: “Use simple English and give three examples.”',
        descriptionHinglish:
          'Language, tone, answer ki length aur examples ki sankhya batayein. Example: “Simple English use karo aur 3 examples do.”',
        image: {
          key: 'ai-prompt-requirements-step',
          type: 'step',
          alt: 'Setting requirements for an AI-generated response',
        },
        tip: 'Clear requirements reduce unnecessary or irrelevant answers.',
        tipHinglish:
          'Clear requirements dene se faltu ya irrelevant answers kam milte hain.',
      },
      {
        id: 'prompt-specify-format',
        title: 'Choose the Output Format',
        titleHinglish: 'Answer Ka Format Batayein',
        description:
          'Tell the AI how you want the result: a checklist, table, numbered steps, short paragraph, or ready-to-use draft.',
        descriptionHinglish:
          'AI ko batayein ki answer kis format mein chahiye: checklist, table, numbered steps, short paragraph ya ready-to-use draft.',
        image: {
          key: 'ai-prompt-format-step',
          type: 'step',
          alt: 'Choosing an output format for an AI response',
        },
        tip: 'A simple pattern is Role + Task + Context + Requirements + Output Format.',
        tipHinglish:
          'Ek simple pattern yaad rakhein: Role + Task + Context + Requirements + Output Format.',
      },
    ],
    relatedGuideIds: [
      'how-to-use-ai-tools',
      'practical-ai-prompt-examples',
      'generate-images-with-ai',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description: 'Official guidance for using AI tools.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'practical-ai-prompt-examples',
    slug: 'practical-ai-prompt-examples',
    title: 'Practical AI Prompt Examples',
    titleHinglish: 'AI Prompts Ke Practical Examples',
    description:
      'Explore ready-to-use prompts for learning, writing, small businesses, resumes, and coding.',
    descriptionHinglish:
      'Learning, writing, small business, resume aur coding ke liye ready-to-use AI prompts dekhein.',
    categoryId: 'ai-tools',
    difficulty: 'beginner',
    estimatedMinutes: 6,
    coverImage: {
      key: 'ai-prompt-examples-cover',
      type: 'cover',
      alt: 'Examples of useful prompts for different everyday tasks',
    },
    searchKeywords: [
      'AI prompt examples',
      'best ChatGPT prompts',
      'AI prompts for students',
      'business prompts',
      'resume prompt',
      'coding prompts',
      'AI prompt example Hindi',
      'ChatGPT kaise pooche',
      'ready to use prompts',
    ],
    prerequisites: ['Access to an AI tool'],
    prerequisitesHinglish: ['Kisi AI tool ka access'],
    steps: [
      {
        id: 'prompt-example-learning',
        title: 'Learn a New Topic',
        titleHinglish: 'Naya Topic Seekhein',
        description:
          'Example prompt: “Explain digital marketing to a complete beginner in simple English. Give five examples from Indian businesses and finish with a short quiz.”',
        descriptionHinglish:
          'Example prompt: “Digital marketing ko ek beginner ko simple Hinglish mein samjhao. Indian businesses ke 5 examples do aur end mein ek chhota quiz lo.”',
        image: {
          key: 'ai-example-learning-step',
          type: 'step',
          alt: 'Using AI to learn a new topic',
        },
        tip: 'Ask for examples from situations you already understand.',
        tipHinglish:
          'Aise examples maangein jo aapki samajh mein aane wali situations se related hon.',
      },
      {
        id: 'prompt-example-writing',
        title: 'Write a Professional Message',
        titleHinglish: 'Professional Message Likhein',
        description:
          'Example prompt: “Write a polite WhatsApp message to a customer about a delayed order. Keep it under 80 words and use a professional, friendly tone.”',
        descriptionHinglish:
          'Example prompt: “Customer ko delayed order ke baare mein ek polite WhatsApp message likho. Message 80 words se kam ho aur professional, friendly tone mein ho.”',
        image: {
          key: 'ai-example-writing-step',
          type: 'step',
          alt: 'Using AI to draft a professional customer message',
        },
        tip: 'Review names, dates, prices, and promises before sending the message.',
        tipHinglish:
          'Message bhejne se pehle names, dates, prices aur promises check karein.',
      },
      {
        id: 'prompt-example-business',
        title: 'Get Small Business Ideas',
        titleHinglish: 'Small Business Ideas Lein',
        description:
          'Example prompt: “Suggest five ways a small luggage repair shop in India can attract more local customers. Give low-cost ideas and a simple action plan for each.”',
        descriptionHinglish:
          'Example prompt: “India mein ek chhoti luggage repair shop ke liye local customers badhane ke 5 tareeke batao. Kam budget wale ideas aur har idea ka simple action plan do.”',
        image: {
          key: 'ai-example-business-step',
          type: 'step',
          alt: 'Using AI to plan small business marketing ideas',
        },
        tip: 'Add your business type, location, and budget for more relevant ideas.',
        tipHinglish:
          'Behtar ideas ke liye business type, location aur budget batayein.',
      },
      {
        id: 'prompt-example-resume',
        title: 'Improve Your Resume',
        titleHinglish: 'Apna Resume Behtar Banayein',
        description:
          'Example prompt: “Review this resume summary for a junior frontend developer. Improve clarity and grammar without inventing experience or skills. Suggest three improvements.”',
        descriptionHinglish:
          'Example prompt: “Junior frontend developer ke is resume summary ko review karo. Experience ya skills invent kiye bina clarity aur grammar improve karo. 3 improvements suggest karo.”',
        image: {
          key: 'ai-example-resume-step',
          type: 'step',
          alt: 'Using AI to improve a resume summary',
        },
        tip: 'Remove personal contact details before sharing your resume with an AI tool.',
        tipHinglish:
          'Resume AI tool ko dene se pehle personal contact details hata dein.',
      },
      {
        id: 'prompt-example-coding',
        title: 'Understand a Coding Problem',
        titleHinglish: 'Coding Problem Samjhein',
        description:
          'Example prompt: “Explain this React error to a beginner. Identify the likely cause, show the smallest safe fix, and explain why it works. Do not rewrite the entire project.”',
        descriptionHinglish:
          'Example prompt: “Is React error ko beginner ke liye samjhao. Possible cause batao, sabse chhota safe fix dikhao aur samjhao ki ye kaise kaam karta hai. Poora project rewrite mat karo.”',
        image: {
          key: 'ai-example-coding-step',
          type: 'step',
          alt: 'Using AI to understand and fix a coding error',
        },
        tip: 'Check AI-generated code before using it, especially in production projects.',
        tipHinglish:
          'AI ke code ko use karne se pehle check karein, khaaskar production projects mein.',
      },
    ],
    relatedGuideIds: [
      'how-to-use-ai-tools',
      'write-better-ai-prompts',
      'generate-images-with-ai',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description: 'Official help for working with AI tools.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },

  {
    id: 'generate-images-with-ai',
    slug: 'generate-images-with-ai',
    title: 'How to Generate Images with AI',
    titleHinglish: 'AI Se Images Kaise Banayein',
    description:
      'Learn how to describe an image, write an image-generation prompt, review results, and improve the final image.',
    descriptionHinglish:
      'AI se image banane ke liye sahi description likhna, prompt banana, result check karna aur image improve karna seekhein.',
    categoryId: 'ai-tools',
    difficulty: 'beginner',
    estimatedMinutes: 7,
    coverImage: {
      key: 'ai-image-generation-cover',
      type: 'cover',
      alt: 'AI-generated visual artwork displayed on a screen',
    },
    searchKeywords: [
      'AI image generation',
      'image prompt',
      'AI photo generator',
      'generate images with AI',
      'product poster prompt',
      'AI image kaise banaye',
      'image prompt kaise likhe',
      'AI se poster banaye',
      'AI art for beginners',
    ],
    prerequisites: ['Access to an AI image-generation tool'],
    prerequisitesHinglish: ['Kisi AI image-generation tool ka access'],
    steps: [
      {
        id: 'ai-image-choose-subject',
        title: 'Describe the Main Subject',
        titleHinglish: 'Main Subject Batayein',
        description:
          'Start by describing exactly what should appear in the image. Example: “A single black travel suitcase with four wheels.”',
        descriptionHinglish:
          'Sabse pehle batayein ki image mein kya dikhna chahiye. Example: “Chaar wheels wala ek black travel suitcase.”',
        image: {
          key: 'ai-image-subject-step',
          type: 'step',
          alt: 'Describing the main subject for an AI-generated image',
        },
        tip: 'Be specific about the object, person, product, or scene.',
        tipHinglish:
          'Object, person, product ya scene ko clearly describe karein.',
      },
      {
        id: 'ai-image-add-style',
        title: 'Choose a Visual Style',
        titleHinglish: 'Image Ka Style Choose Karein',
        description:
          'Specify the style you want, such as realistic product photography, illustration, 3D render, or flat vector art.',
        descriptionHinglish:
          'Image ka style batayein, jaise realistic product photography, illustration, 3D render ya flat vector art.',
        image: {
          key: 'ai-image-style-step',
          type: 'step',
          alt: 'Choosing a visual style for image generation',
        },
        tip: 'Choose one clear style instead of mixing several conflicting styles.',
        tipHinglish:
          'Ek clear style choose karein; bahut saare conflicting styles ek saath na dein.',
      },
      {
        id: 'ai-image-set-scene',
        title: 'Describe Background and Lighting',
        titleHinglish: 'Background Aur Lighting Batayein',
        description:
          'Describe the background, lighting, colors, and mood. Example: “Clean white background, soft studio lighting, realistic details, and subtle shadows.”',
        descriptionHinglish:
          'Background, lighting, colors aur mood batayein. Example: “Clean white background, soft studio lighting, realistic details aur halki shadows.”',
        image: {
          key: 'ai-image-scene-step',
          type: 'step',
          alt: 'Describing background and lighting for an AI image',
        },
        tip: 'Mention whether the image is for a product listing, social post, or presentation.',
        tipHinglish:
          'Batayein ki image product listing, social media post ya presentation ke liye hai.',
      },
      {
        id: 'ai-image-control-layout',
        title: 'Specify Composition and Size',
        titleHinglish: 'Composition Aur Size Batayein',
        description:
          'Tell the AI how the subject should be positioned and choose an aspect ratio. For example, use 1:1 for a square post or 16:9 for a wide banner when supported.',
        descriptionHinglish:
          'AI ko batayein ki subject kahan hona chahiye aur aspect ratio choose karein. Jaise square post ke liye 1:1 ya wide banner ke liye 16:9, agar tool support karta ho.',
        image: {
          key: 'ai-image-layout-step',
          type: 'step',
          alt: 'Choosing image composition and aspect ratio',
        },
        tip: 'If you do not want text or extra objects, say so explicitly in the prompt.',
        tipHinglish:
          'Agar image mein text ya extra objects nahi chahiye, to prompt mein clearly likhein.',
      },
      {
        id: 'ai-image-refine-result',
        title: 'Generate and Improve the Image',
        titleHinglish: 'Image Banayein Aur Improve Karein',
        description:
          'Generate the image and review it. If something is wrong, request a focused change, such as “Keep the suitcase unchanged and remove the extra objects from the background.”',
        descriptionHinglish:
          'Image generate karein aur result check karein. Agar kuch galat ho, to ek specific change maangein, jaise “Suitcase ko unchanged rakho aur background se extra objects hata do.”',
        image: {
          key: 'ai-image-refine-step',
          type: 'step',
          alt: 'Reviewing and refining an AI-generated image',
        },
        tip: 'Check object details, hands, logos, spelling, and any text before publishing.',
        tipHinglish:
          'Publish karne se pehle objects, hands, logos, spelling aur text ko check karein.',
        warning:
          'AI may produce inaccurate text or logos. Review the result and add important text separately when necessary.',
        warningHinglish:
          'AI text ya logos galat bana sakta hai. Result check karein aur zaroori text ko zarurat padne par alag se add karein.',
      },
    ],
    relatedGuideIds: [
      'how-to-use-ai-tools',
      'write-better-ai-prompts',
      'practical-ai-prompt-examples',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description:
          'Official help for AI tools and image-generation features.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-10-29T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
  },
];
