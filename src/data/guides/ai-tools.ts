import { Guide } from '../../types/guide';

/**
 * Digital Dost — AI Tools Guides
 *
 * Guides for choosing AI tools, writing prompts,
 * practical prompt examples, and generating images with AI.
 * Supports English and Hinglish (Roman script).
 */
export const AI_TOOLS_GUIDES: Guide[] = [
  // ─────────────────────────────────────────────
  // How to Choose AI
  // ─────────────────────────────────────────────

  {
    id: 'getting-started-with-ai-tools',
    slug: 'getting-started-with-ai-tools',
    title: 'How to Get Started with AI Tools',
    titleHinglish: 'AI Tools Use Karna Kaise Shuru Karein',
    description:
      'Learn what AI tools can do, how to choose the right tool, write prompts, improve results, and use AI safely for everyday tasks.',
    descriptionHinglish:
      'AI tools kya kar sakte hain, sahi tool kaise choose karein, prompts kaise likhein, results improve karein aur daily tasks ke liye AI safely use karna seekhein.',
    categoryId: 'ai-choose-tools',
    difficulty: 'beginner',
    estimatedMinutes: 9,
    coverImage: {
      key: 'getting-started-ai-cover',
      type: 'cover',
      alt: 'Beginner using an AI assistant on a laptop and smartphone',
    },
    searchKeywords: [
      'how to use ai',
      'getting started with ai',
      'ai tools for beginners',
      'choose ai tools',
      'best ai tool for my work',
      'artificial intelligence tutorial',
      'chatgpt tutorial',
      'ai tools kaise use karein',
      'ai tools kaise choose karein',
      'chatgpt kaise chalaye',
      'ai se kaam kaise kare',
    ],
    whatyouneed: [
      'A smartphone or computer',
      'An internet connection',
      'Access to an AI tool',
      'A task you want help with',
    ],
    whatyouneedHinglish: [
      'Smartphone ya computer',
      'Internet connection',
      'Kisi AI tool ka access',
      'Ek kaam jismein AI ki help chahiye',
    ],
    steps: [
      {
        id: 'ai-understand-capabilities',
        title: 'Understand What AI Can Do',
        titleHinglish: 'Samjhein AI Kya Kar Sakta Hai',
        description:
          'AI tools can help with many tasks, such as writing content, learning new topics, researching information, creating images, generating videos, and coding. First identify the type of task you need help with.',
        descriptionHinglish:
          'AI tools kai kaamon mein help kar sakte hain, jaise content likhna, naye topics seekhna, information research karna, images banana, videos generate karna aur coding. Sabse pehle decide karein ki aapko kis kaam mein help chahiye.',
        image: {
          key: 'ai-understand-tools-step',
          type: 'step',
          alt: 'Different tasks that AI tools can help with',
        },
        tip: 'AI is a tool to assist your work, not a replacement for your own judgment.',
        tipHinglish:
          'AI aapke kaam mein help karne wala tool hai, aapki khud ki soch ka replacement nahi.',
      },
      {
        id: 'ai-choose-right-tool',
        title: 'Choose the Right AI Tool',
        titleHinglish: 'Sahi AI Tool Choose Karein',
        description:
          'Choose a tool based on your task. General AI assistants can help with questions and writing, while specialised tools may be better for image generation, video creation, audio, or coding. Compare features, ease of use, language support, and free usage limits.',
        descriptionHinglish:
          'Apne task ke hisaab se tool choose karein. General AI assistants questions aur writing mein help karte hain, jabki image generation, video creation, audio ya coding ke liye specialised tools useful ho sakte hain. Features, use karne ki aasani, language support aur free limits compare karein.',
        image: {
          key: 'ai-choose-tool-step',
          type: 'step',
          alt: 'Choosing an AI tool based on the required task',
        },
        tip: 'Try the free version first when available. You do not need several tools for the same task.',
        tipHinglish:
          'Free version available ho toh pehle use try karein. Ek hi kaam ke liye kai tools ki zaroorat nahi hai.',
      },
      {
        id: 'ai-open-tool',
        title: 'Open and Set Up the Tool',
        titleHinglish: 'Tool Open Aur Set Up Karein',
        description:
          'Visit the official website or install the official app of your chosen AI tool. Create an account or sign in if required. Check the available features and understand any usage limits before starting.',
        descriptionHinglish:
          'Apne chosen AI tool ki official website visit karein ya official app install karein. Zaroorat ho toh account banayein ya sign in karein. Start karne se pehle available features aur usage limits samjhein.',
        image: {
          key: 'ai-create-account-step',
          type: 'step',
          alt: 'Opening and setting up an AI tool',
        },
        tip: 'Always check the website address or app publisher before signing in.',
        tipHinglish:
          'Sign in karne se pehle website address ya app publisher zaroor check karein.',
      },
      {
        id: 'ai-write-first-prompt',
        title: 'Write Your First Prompt',
        titleHinglish: 'Apna Pehla Prompt Likhein',
        description:
          'Find the chat or prompt box and clearly explain what you need. Mention your task and add useful details. Example: “Explain digital marketing to a beginner using simple English and three practical examples.”',
        descriptionHinglish:
          'Chat ya prompt box mein apni requirement clearly likhein. Apna task batayein aur zaroori details add karein. Example: “Mujhe beginner ke liye digital marketing simple Hinglish mein 3 practical examples ke saath samjhao.”',
        image: {
          key: 'ai-write-prompt-step',
          type: 'step',
          alt: 'Writing a first prompt in an AI assistant',
        },
        tip: 'A clear prompt usually gives more useful results than a vague question.',
        tipHinglish:
          'Clear prompt se usually vague question ke comparison mein zyada useful result milta hai.',
      },
      {
        id: 'ai-review-response',
        title: 'Review the AI Response',
        titleHinglish: 'AI Response Check Karein',
        description:
          'Read the complete response and check whether it answers your question. If the answer is too long, difficult, or incomplete, identify what needs to change.',
        descriptionHinglish:
          'Poora response padhein aur check karein ki aapke question ka answer mila hai ya nahi. Agar answer bahut long, difficult ya incomplete hai, toh identify karein ki kya change karna hai.',
        image: {
          key: 'ai-improve-results-step',
          type: 'step',
          alt: 'Reviewing an AI-generated response',
        },
        tip: 'Do not accept an answer without checking whether it meets your requirements.',
        tipHinglish:
          'Bina check kiye answer accept na karein. Dekhein ki woh aapki requirements poori karta hai ya nahi.',
      },
      {
        id: 'ai-improve-results',
        title: 'Improve the Result',
        titleHinglish: 'Result Improve Karein',
        description:
          'Continue the conversation with follow-up instructions. You can ask the AI to add examples, explain something in more detail, make the answer shorter, change the tone, or show the process step by step.',
        descriptionHinglish:
          'Follow-up instructions dekar conversation continue karein. AI se examples add karne, kisi topic ko detail mein samjhane, answer short karne, tone change karne ya process step by step batane ko keh sakte hain.',
        image: {
          key: 'ai-add-context-step',
          type: 'step',
          alt: 'Improving an AI response with follow-up instructions',
        },
        tip: 'Change one thing at a time so you can understand how each instruction affects the result.',
        tipHinglish:
          'Ek baar mein ek hi cheez change karein, taaki samajh sakein ki har instruction result ko kaise affect karta hai.',
      },
      {
        id: 'ai-verify-information',
        title: 'Verify Information and Use AI Safely',
        titleHinglish: 'Information Verify Karein Aur AI Safely Use Karein',
        description:
          'AI can sometimes provide incorrect or outdated information. Verify important facts, dates, prices, and instructions using reliable sources. Never share passwords, OTPs, banking details, or sensitive personal information with AI tools.',
        descriptionHinglish:
          'AI kabhi-kabhi galat ya purani information de sakta hai. Important facts, dates, prices aur instructions ko reliable sources se verify karein. AI tools ke saath password, OTP, banking details ya sensitive personal information kabhi share na karein.',
        image: {
          key: 'ai-verify-information-step',
          type: 'step',
          alt: 'Verifying AI information and using tools safely',
        },
        tip: 'Use AI for assistance, but verify important information before making decisions.',
        tipHinglish:
          'AI ki help lein, lekin important decisions lene se pehle information verify zaroor karein.',
        warning:
          'Do not blindly trust AI-generated information or share confidential information with AI tools.',
        warningHinglish:
          'AI ki information par bina check kiye bharosa na karein aur confidential information share na karein.',
      },
    ],
    relatedGuideIds: [
      'write-better-ai-prompts',
      'generate-images-with-ai',
      'generate-videos-with-ai',
    ],
    sources: [
      {
        title: 'OpenAI Help Center',
        url: 'https://help.openai.com/',
        description: 'Official help and guidance for using AI tools.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-11-03T00:00:00.000Z',
    updatedAt: '2026-11-03T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // PROMPT WRITING
  // ─────────────────────────────────────────────
  {
    id: 'write-better-ai-prompts',
    slug: 'write-better-ai-prompts',
    title: 'How to Write Better AI Prompts',
    titleHinglish: 'AI Ke Liye Achhe Prompts Kaise Likhein',
    description:
      'Learn how to write clear AI prompts step by step, with practical examples for learning and everyday work.',
    descriptionHinglish:
      'Step by step clear AI prompts likhna seekhein, saath hi learning aur daily work ke practical examples dekhein.',
    categoryId: 'ai-prompts',
    difficulty: 'beginner',
    estimatedMinutes: 8,
    coverImage: {
      key: 'ai-prompt-writing-cover',
      type: 'cover',
      alt: 'Writing a clear prompt for an AI assistant',
    },
    searchKeywords: [
      'prompt writing',
      'how to write prompts',
      'ai prompt formula',
      'prompt engineering basics',
      'better ai answers',
      'prompt kaise likhe',
      'chatgpt prompt',
      'prompt writing in hinglish',
      'ai prompt examples',
      'ready to use prompts',
    ],
    whatyouneed: ['Basic knowledge of using an AI tool'],
    whatyouneedHinglish: ['AI tool use karne ki basic knowledge'],
    steps: [
      {
        id: 'prompt-define-role',
        title: 'Start with Your Goal',
        titleHinglish: 'Apne Goal Se Shuru Karein',
        description:
          'First decide what result you want from AI. Do you need to learn something, write content, plan a task, solve a problem, or create an idea? A clear goal helps you write a focused prompt.',
        descriptionHinglish:
          'Sabse pehle decide karein ki AI se aapko kya result chahiye. Kuch seekhna hai, content likhna hai, task plan karna hai, problem solve karni hai ya idea banana hai? Clear goal se focused prompt likhne mein help milti hai.',
        image: {
          key: 'ai-prompt-role-step',
          type: 'step',
          alt: 'Planning the goal of an AI prompt',
        },
        tip: 'One clear goal usually works better than several unrelated requests in one prompt.',
        tipHinglish:
          'Ek clear goal dena, ek hi prompt mein kai unrelated requests dene se behtar hota hai.',
      },
      {
        id: 'prompt-state-task',
        title: 'Tell the AI What to Do',
        titleHinglish: 'AI Ko Batayein Kya Karna Hai',
        description:
          'Use a clear action word such as explain, write, compare, create, summarize, translate, or review. For example, write “Explain digital marketing to a beginner” instead of “Tell me about marketing.”',
        descriptionHinglish:
          'Explain, write, compare, create, summarize, translate ya review jaise clear action words use karein. Jaise “Marketing ke baare mein batao” ke bajaye likhein: “Digital marketing ko beginner ke liye samjhao.”',
        image: {
          key: 'ai-prompt-task-step',
          type: 'step',
          alt: 'Writing a clear task for an AI tool',
        },
        tip: 'Avoid vague requests such as “Tell me something” or “Make it better.”',
        tipHinglish:
          '“Kuch batao” ya “Isko better banao” jaise unclear requests avoid karein.',
      },
      {
        id: 'prompt-add-context',
        title: 'Add Useful Context',
        titleHinglish: 'Zaroori Details Add Karein',
        description:
          'Give details that help the AI understand your situation. Mention your skill level, audience, purpose, location, budget, or the material you want it to work with when relevant.',
        descriptionHinglish:
          'AI ko situation samjhane ke liye zaroori details dein. Zaroorat ke hisaab se apna skill level, audience, purpose, location, budget ya jis material par kaam karwana hai woh batayein.',
        image: {
          key: 'ai-prompt-context-step',
          type: 'step',
          alt: 'Adding useful context to an AI prompt',
        },
        tip: 'Include only details that are relevant to the task.',
        tipHinglish:
          'Sirf wahi details dein jo aapke task ke liye relevant hain.',
      },
      {
        id: 'prompt-set-requirements',
        title: 'Set Clear Requirements',
        titleHinglish: 'Apni Requirements Clear Rakhein',
        description:
          'Mention the language, tone, length, audience, and any limits. For example: “Use simple English, keep it under 100 words, and make it friendly.”',
        descriptionHinglish:
          'Language, tone, length, audience aur zaroori limits batayein. Example: “Simple English use karo, 100 words se kam rakho aur friendly tone rakho.”',
        image: {
          key: 'ai-prompt-requirements-step',
          type: 'step',
          alt: 'Setting clear requirements for an AI response',
        },
        tip: 'If you have a sample or reference, share it to explain what you want.',
        tipHinglish:
          'Agar aapke paas sample ya reference hai, toh apni requirement samjhane ke liye share karein.',
      },
      {
        id: 'prompt-specify-format',
        title: 'Choose the Answer Format',
        titleHinglish: 'Answer Ka Format Choose Karein',
        description:
          'Tell the AI how to present the result: numbered steps, a checklist, a table, bullet points, or a short paragraph. A useful prompt pattern is Goal + Task + Context + Requirements + Output Format.',
        descriptionHinglish:
          'AI ko batayein ki result kis format mein chahiye: numbered steps, checklist, table, bullet points ya short paragraph. Ek useful prompt pattern hai: Goal + Task + Context + Requirements + Output Format.',
        image: {
          key: 'ai-prompt-format-step',
          type: 'step',
          alt: 'Choosing an output format for an AI response',
        },
        tip: 'You do not need every part for every prompt. Include the details that help with your task.',
        tipHinglish:
          'Har prompt mein sabhi details dena zaroori nahi hai. Apne task ke liye useful details hi include karein.',
      },
      {
        id: 'prompt-example-learning',
        title: 'Example 1: Create a Learning Prompt',
        titleHinglish: 'Example 1: Seekhne Ke Liye Prompt Banayein',
        description:
          'Try this complete prompt: “Teach me the basics of digital marketing as a beginner. Use simple English, explain one concept at a time, give three examples from Indian businesses, and ask me three questions at the end.” This prompt clearly explains the goal, your level, language, teaching style, and expected result.',
        descriptionHinglish:
          'Ye complete prompt try karein: “Mujhe beginner ke level par digital marketing ki basics sikhao. Simple Hinglish use karo, ek baar mein ek concept samjhao, Indian businesses ke 3 examples do aur end mein 3 questions poochho.” Is prompt mein goal, aapka level, language, teaching style aur expected result clear hai.',
        tip: 'Replace the topic with anything you want to learn, such as English, coding, or online marketing.',
        tipHinglish:
          'Topic ko apni zaroorat ke hisaab se badal sakte hain, jaise English, coding ya online marketing.',
      },
      {
        id: 'prompt-example-writing',
        title: 'Example 2: Write a Professional Message',
        titleHinglish: 'Example 2: Professional Message Likhein',
        description:
          'Try this complete prompt: “Write a polite WhatsApp message to a customer about a delayed order. Keep it under 80 words, use a friendly professional tone, and do not make promises about a delivery date.” Notice how the task, audience, platform, length, tone, and restriction are all included.',
        descriptionHinglish:
          'Ye complete prompt try karein: “Customer ko delayed order ke baare mein ek polite WhatsApp message likho. 80 words se kam rakho, friendly professional tone use karo aur delivery date ka koi promise mat karo.” Ismein task, audience, platform, length, tone aur restriction sab clear hain.',
        tip: 'Replace the situation with your own task, such as replying to a customer or writing a business announcement.',
        tipHinglish:
          'Situation ko apne task ke hisaab se badlein, jaise customer ko reply dena ya business announcement likhna.',
      },
      {
        id: 'prompt-review-and-refine',
        title: 'Review and Improve the Result',
        titleHinglish: 'Result Check Karein Aur Improve Karein',
        description:
          'Read the AI response and identify what is missing or incorrect. Give a follow-up instruction such as “Add two examples,” “Make it shorter,” or “Explain step 2 in more detail.” Keep improving until the result meets your needs.',
        descriptionHinglish:
          'AI ka response padhein aur dekhein kya missing ya incorrect hai. Follow-up instruction dein, jaise “Do examples add karo,” “Isko short karo,” ya “Step 2 detail mein samjhao.” Jab tak result aapki zaroorat ke hisaab se na ho, improve karte rahein.',
        image: {
          key: 'ai-prompt-format-step',
          type: 'step',
          alt: 'Reviewing and improving an AI response',
        },
        tip: 'Check important facts and details. AI responses can sometimes be incorrect.',
        tipHinglish:
          'Important facts aur details check karein. AI ke responses kabhi-kabhi galat ho sakte hain.',
        warning:
          'Do not include passwords, OTPs, banking details, or sensitive personal information in your prompts.',
        warningHinglish:
          'Apne prompts mein password, OTP, banking details ya sensitive personal information include na karein.',
      },
    ],
    relatedGuideIds: ['how-to-use-ai-tools', 'generate-images-with-ai'],
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
    updatedAt: '2026-11-03T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // AI IMAGE GENERATION
  // ─────────────────────────────────────────────
  {
    id: 'generate-images-with-ai',
    slug: 'generate-images-with-ai',
    title: 'How to Generate Images with AI',
    titleHinglish: 'AI Se Images Kaise Banayein',
    description:
      'Learn how to choose an image tool, describe your idea, write an image prompt, generate a result, and refine it.',
    descriptionHinglish:
      'AI image tool choose karna, apna idea describe karna, image prompt likhna, image generate karna aur result improve karna seekhein.',
    categoryId: 'ai-image-generation',
    difficulty: 'beginner',
    estimatedMinutes: 8,
    coverImage: {
      key: 'ai-image-generation-cover',
      type: 'cover',
      alt: 'AI-generated visual artwork displayed on a screen',
    },
    searchKeywords: [
      'ai image generation',
      'image prompt',
      'ai photo generator',
      'generate images with ai',
      'product poster prompt',
      'ai image kaise banaye',
      'image prompt kaise likhe',
      'ai se poster banaye',
      'ai art for beginners',
    ],
    whatyouneed: [
      'Access to an AI image-generation tool',
      'A clear idea of the image you want',
    ],
    whatyouneedHinglish: [
      'Kisi AI image-generation tool ka access',
      'Image ka ek clear idea',
    ],
    steps: [
      {
        id: 'ai-image-choose-subject',
        title: 'Choose an AI Image Tool',
        titleHinglish: 'AI Image Tool Choose Karein',
        description:
          'Choose a tool that supports image generation. Open its official website or app and check whether image creation is available in your account and plan.',
        descriptionHinglish:
          'Aisa tool choose karein jo image generation support karta ho. Uski official website ya app open karein aur check karein ki aapke account aur plan mein image creation available hai ya nahi.',
        image: {
          key: 'ai-image-subject-step',
          type: 'step',
          alt: 'Opening an AI image-generation tool',
        },
        tip: 'Start with a tool you can access easily; you do not need several tools at once.',
        tipHinglish:
          'Aise tool se start karein jiska access aasani se mil jaye. Ek saath kai tools ki zaroorat nahi hai.',
      },
      {
        id: 'ai-image-add-style',
        title: 'Describe the Main Subject',
        titleHinglish: 'Main Subject Describe Karein',
        description:
          'Explain exactly what should appear in the image. Mention the main object, person, product, or scene. Example: “A single black travel suitcase with four wheels.”',
        descriptionHinglish:
          'Clearly batayein ki image mein kya dikhna chahiye. Main object, person, product ya scene describe karein. Example: “Chaar wheels wala ek black travel suitcase.”',
        image: {
          key: 'ai-image-style-step',
          type: 'step',
          alt: 'Describing the main subject for image generation',
        },
        tip: 'Focus on the main subject first; add extra details after that.',
        tipHinglish:
          'Pehle main subject par focus karein. Extra details baad mein add karein.',
      },
      {
        id: 'ai-image-set-scene',
        title: 'Add Style and Visual Details',
        titleHinglish: 'Style Aur Visual Details Add Karein',
        description:
          'Choose a visual style such as realistic photography, illustration, 3D render, or vector art. Then describe useful details such as material, colour, texture, and level of realism.',
        descriptionHinglish:
          'Realistic photography, illustration, 3D render ya vector art jaisa visual style choose karein. Phir material, colour, texture aur realism jaisi useful details batayein.',
        image: {
          key: 'ai-image-scene-step',
          type: 'step',
          alt: 'Choosing the visual style and details for an AI image',
        },
        tip: 'Use one clear style instead of combining styles that do not match.',
        tipHinglish:
          'Ek clear style use karein. Aise styles ko mix na karein jo ek doosre se match nahi karte.',
      },
      {
        id: 'ai-image-control-layout',
        title: 'Describe the Background and Layout',
        titleHinglish: 'Background Aur Layout Batayein',
        description:
          'Explain the background, lighting, colours, and subject position. Mention the image shape if needed: 1:1 for a square post or 16:9 for a wide banner, when supported by the tool.',
        descriptionHinglish:
          'Background, lighting, colours aur subject ki position batayein. Zaroorat ho toh image ka size bhi batayein: square post ke liye 1:1 ya wide banner ke liye 16:9, agar tool support karta ho.',
        image: {
          key: 'ai-image-layout-step',
          type: 'step',
          alt: 'Describing image background, layout, and aspect ratio',
        },
        tip: 'If you do not want text, logos, or extra objects, clearly mention that in your prompt.',
        tipHinglish:
          'Agar text, logo ya extra objects nahi chahiye, toh prompt mein clearly mention karein.',
      },
      {
        id: 'ai-image-refine-result',
        title: 'Write the Prompt and Generate',
        titleHinglish: 'Prompt Likhein Aur Image Generate Karein',
        description:
          'Combine the subject, style, visual details, background, and layout into one clear prompt. Submit it to the tool and wait for the image to generate.',
        descriptionHinglish:
          'Subject, style, visual details, background aur layout ko mila kar ek clear prompt likhein. Tool mein submit karein aur image generate hone ka wait karein.',
        image: {
          key: 'ai-image-refine-step',
          type: 'step',
          alt: 'Generating an image from a written AI prompt',
        },
        tip: 'Keep your first prompt clear and focused. You can add more details after seeing the result.',
        tipHinglish:
          'Pehla prompt clear aur focused rakhein. Result dekhne ke baad aur details add kar sakte hain.',
      },
      {
        id: 'ai-image-review-result',
        title: 'Review and Improve the Image',
        titleHinglish: 'Image Check Karein Aur Improve Karein',
        description:
          'Check whether the subject, colours, background, and layout match your idea. If something is wrong, request one specific change at a time. For example: “Keep the suitcase unchanged and remove the extra objects from the background.”',
        descriptionHinglish:
          'Check karein ki subject, colours, background aur layout aapke idea se match karte hain ya nahi. Agar kuch galat ho, toh ek baar mein ek specific change maangein. Example: “Suitcase ko unchanged rakho aur background se extra objects hata do.”',
        image: {
          key: 'ai-image-refine-step',
          type: 'step',
          alt: 'Reviewing and improving an AI-generated image',
        },
        tip: 'Check object details, hands, logos, spelling, and text before using or publishing the image.',
        tipHinglish:
          'Image use ya publish karne se pehle objects, hands, logos, spelling aur text check karein.',
        warning:
          'AI may produce inaccurate text, logos, or product details. Review the image carefully and add important text separately when needed.',
        warningHinglish:
          'AI text, logos ya product details galat bana sakta hai. Image dhyan se check karein aur zaroori text ko zaroorat padne par alag se add karein.',
      },
    ],
    relatedGuideIds: ['write-better-ai-prompts', 'generate-images-with-ai'],
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
    updatedAt: '2026-11-03T00:00:00.000Z',
  },

  // ─────────────────────────────────────────────
  // AI VIDEO GENERATION
  // ─────────────────────────────────────────────
  {
    id: 'generate-videos-with-ai',
    slug: 'generate-videos-with-ai',
    title: 'How to Generate Videos with AI',
    titleHinglish: 'AI Se Videos Kaise Banayein',
    description:
      'Learn how to choose an AI video tool, prepare an idea, write a video prompt, generate clips, and improve the final video.',
    descriptionHinglish:
      'AI video tool choose karna, idea prepare karna, video prompt likhna, clips generate karna aur final video improve karna seekhein.',
    categoryId: 'ai-video-generation',
    difficulty: 'beginner',
    estimatedMinutes: 9,
    coverImage: {
      key: 'ai-video-generation-cover',
      type: 'cover',
      alt: 'Creating a video with an AI video-generation tool',
    },
    searchKeywords: [
      'ai video generation',
      'how to make videos with ai',
      'text to video',
      'image to video',
      'ai video generator',
      'video prompt',
      'ai se video kaise banaye',
      'ai video kaise create kare',
      'text se video banana',
      'photo se video banana',
    ],
    whatyouneed: [
      'A smartphone or computer',
      'Access to an AI video-generation tool',
      'An idea, script, or image for your video',
    ],
    whatyouneedHinglish: [
      'Smartphone ya computer',
      'Kisi AI video-generation tool ka access',
      'Video ke liye ek idea, script ya image',
    ],
    steps: [
      {
        id: 'ai-video-choose-tool',
        title: 'Choose an AI Video Tool',
        titleHinglish: 'AI Video Tool Choose Karein',
        description:
          'Choose a tool that supports the type of video you want to make. Some tools create videos from text prompts, while others can animate an image or help edit existing clips. Check the features, free limits, and supported video formats.',
        descriptionHinglish:
          'Aisa tool choose karein jo aapke required video type ko support karta ho. Kuch tools text prompt se video banate hain, jabki kuch image ko animate karte hain ya existing clips edit karne mein help karte hain. Features, free limits aur supported video formats check karein.',
        tip: 'Start with one tool and check its available features before creating an account or paying.',
        tipHinglish:
          'Ek tool se start karein. Account banane ya payment karne se pehle uske available features check karein.',
      },
      {
        id: 'ai-video-plan-idea',
        title: 'Plan Your Video Idea',
        titleHinglish: 'Apne Video Ka Idea Plan Karein',
        description:
          'Decide what your video should show and why you are creating it. Note the main subject, action, location, mood, and purpose. For a longer video, prepare a short script or divide the idea into scenes.',
        descriptionHinglish:
          'Decide karein ki video mein kya dikhana hai aur video banane ka purpose kya hai. Main subject, action, location, mood aur purpose note karein. Long video ke liye short script banayein ya idea ko alag-alag scenes mein divide karein.',
        tip: 'Keep the first video simple. One subject and one clear action are easier to control.',
        tipHinglish:
          'Pehla video simple rakhein. Ek subject aur ek clear action ko control karna aasaan hota hai.',
      },
      {
        id: 'ai-video-write-prompt',
        title: 'Write a Clear Video Prompt',
        titleHinglish: 'Clear Video Prompt Likhein',
        description:
          'Describe the subject, action, setting, visual style, and camera movement. Example: “A red bicycle moving slowly along a quiet village road at sunrise, realistic cinematic style, camera tracking beside the bicycle.”',
        descriptionHinglish:
          'Subject, action, setting, visual style aur camera movement describe karein. Example: “Sunrise ke time ek red bicycle shaant village road par dheere-dheere chal rahi hai, realistic cinematic style, camera bicycle ke saath move kar raha hai.”',
        tip: 'Describe what should happen in the video, not only what the scene looks like.',
        tipHinglish:
          'Sirf scene kaisa dikhega ye nahi, balki video mein kya action hoga ye bhi batayein.',
      },
      {
        id: 'ai-video-set-format',
        title: 'Choose Video Settings',
        titleHinglish: 'Video Settings Choose Karein',
        description:
          'Choose the aspect ratio, duration, and resolution if the tool provides these options. Use a vertical format such as 9:16 for Reels or Shorts, and a horizontal format such as 16:9 for regular widescreen videos.',
        descriptionHinglish:
          'Agar tool options deta hai toh aspect ratio, duration aur resolution choose karein. Reels ya Shorts ke liye 9:16 vertical format aur normal widescreen videos ke liye 16:9 horizontal format use karein.',
        tip: 'Choose the format according to where you plan to publish the video.',
        tipHinglish:
          'Video kahan publish karna hai, uske hisaab se format choose karein.',
      },
      {
        id: 'ai-video-generate',
        title: 'Generate Your Video',
        titleHinglish: 'Apna Video Generate Karein',
        description:
          'Enter your prompt or upload an image if the tool supports image-to-video generation. Select the available settings and start generating. Some tools may create a short clip first, which you can use as one scene in a longer video.',
        descriptionHinglish:
          'Apna prompt enter karein ya image upload karein, agar tool image-to-video generation support karta hai. Available settings select karke generation start karein. Kuch tools pehle short clip banate hain, jise longer video ke ek scene ki tarah use kar sakte hain.',
        tip: 'Generation can take time and may use credits or have daily limits.',
        tipHinglish:
          'Video generate hone mein time lag sakta hai aur credits ya daily limits apply ho sakti hain.',
      },
      {
        id: 'ai-video-review-edit',
        title: 'Review and Improve the Video',
        titleHinglish: 'Video Check Karein Aur Improve Karein',
        description:
          'Watch the complete clip. Check whether the subject, movement, background, and timing match your idea. If something is wrong, change the prompt or settings and generate another version. Use a video editor to join clips, add captions, music, or voice-over when needed.',
        descriptionHinglish:
          'Poora clip dekhein. Check karein ki subject, movement, background aur timing aapke idea se match karte hain ya nahi. Agar kuch galat ho toh prompt ya settings change karke doosra version generate karein. Zaroorat ke hisaab se video editor mein clips join karein, captions, music ya voice-over add karein.',
        tip: 'Review the final video before publishing, especially faces, hands, object movement, text, and audio.',
        tipHinglish:
          'Publish karne se pehle final video check karein, khaaskar faces, hands, objects ki movement, text aur audio.',
        warning:
          'AI-generated videos can contain visual errors or misleading details. Do not present generated scenes as real events or real footage.',
        warningHinglish:
          'AI-generated videos mein visual errors ya misleading details ho sakti hain. Generated scenes ko real events ya asli footage ki tarah present na karein.',
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
        description: 'Official help and guidance for supported AI features.',
      },
    ],
    isFeatured: true,
    status: 'published',
    createdAt: '2026-11-03T00:00:00.000Z',
    updatedAt: '2026-11-03T00:00:00.000Z',
  },
];
