/**
 * Digital Dost — Guide Types
 *
 * Defines the structure of learning guides and their content.
 */

/** Difficulty level of a guide. */
export type GuideDifficulty = 'beginner' | 'intermediate' | 'advanced';
/** Publication status of a guide. */
export type GuideStatus = 'draft' | 'published' | 'archived';
/** Type of image used in a guide. */
export type GuideImageType = 'cover' | 'step' | 'illustration';

/** Image asset used in a guide or one of its steps. */
export interface GuideImage {
  /** Key used to resolve a bundled image or remote image. */
  key: string;
  /** Image type: cover, step, or illustration. */
  type: GuideImageType;
  /** Accessible description of the image. */
  alt: string;
  /** Optional caption displayed below the image. */
  caption?: string;
}

/** External resource associated with a guide. */
export interface GuideSource {
  /** Human-readable resource title. */
  title: string;
  /** External resource URL. */
  url: string;
  /** Optional description of the resource. */
  description?: string;
}

/** A single step in a step-by-step guide. */
export interface GuideStep {
  /** Unique identifier within the guide. */
  id: string;
  /** English step heading. */
  title: string;
  /** Hinglish step heading in Roman script. */
  titleHinglish: string;
  /** English instructions. */
  description: string;
  /** Hinglish instructions in Roman script. */
  descriptionHinglish: string;
  /** Optional image illustrating this step. */
  image?: GuideImage;
  /** Optional helpful tip in English. */
  tip?: string;
  /** Optional helpful tip in Hinglish. */
  tipHinglish?: string;
  /** Optional warning or important caution in English. */
  warning?: string;
  /** Optional warning or important caution in Hinglish. */
  warningHinglish?: string;
  /** Optional external link for additional instructions. */
  externalLink?: GuideSource;
}

/** A learning guide category. */
export interface GuideCategory {
  /** Unique category identifier. */
  id: string;

  /** Display name, such as Social Media or AI Tools. */
  name: string;

  /** Short description of the category. */
  description: string;

  /** Optional category thumbnail. */
  image?: GuideImage;

  /** Whether this category should appear in featured sections. */
  isFeatured?: boolean;

  /** Display order in the category list. */
  order: number;
}

/** Complete learning guide. */
export interface Guide {
  /** Unique guide identifier. */
  id: string;

  /** URL-friendly identifier. */
  slug: string;

  /** Guide title in English. */
  title: string;

  /** Guide title in Hinglish (Roman script). */
  titleHinglish: string;

  /** Short English summary for cards and search results. */
  description: string;

  /** Short Hinglish summary for cards and search results. */
  descriptionHinglish: string;

  /** ID of the guide's category. */
  categoryId: string;

  /** Difficulty level. */
  difficulty: GuideDifficulty;

  /** Estimated completion time in minutes. */
  estimatedMinutes: number;

  /** Cover image for guide cards and detail screens. */
  coverImage: GuideImage;

  /** Search terms, alternate phrases, and common spellings. */
  searchKeywords: string[];

  /** Requirements or items needed before starting (English). */
  prerequisites?: string[];

  /** Requirements or items needed before starting (Hinglish). */
  prerequisitesHinglish?: string[];

  /** Ordered tutorial instructions in English and Hinglish. */
  steps: GuideStep[];

  /** IDs of related guides. */
  relatedGuideIds?: string[];

  /** Official documentation or other useful resources. */
  sources?: GuideSource[];

  /** Whether this guide should appear in featured sections. */
  isFeatured?: boolean;

  /** Current publication status. */
  status: GuideStatus;

  /** ISO 8601 date when the guide was created. */
  createdAt: string;

  /** ISO 8601 date when the guide was last updated. */
  updatedAt: string;
}
