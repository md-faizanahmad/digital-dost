import type { Guide } from '../types/guide';
import { GUIDE_CATEGORIES } from '../data/categories';
import { GUIDES } from '../data/guides';

export interface GuideSearchResult {
  results: Guide[];
  suggestions: Guide[];
  hasExactMatch: boolean;
}

interface ScoredGuide {
  guide: Guide;
  score: number;
}

const MAX_SEARCH_RESULTS = 10;
const MAX_SUGGESTIONS = 3;

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ');
}

function getCategoryName(categoryId: string): string {
  return (
    GUIDE_CATEGORIES.find(category => category.id === categoryId)?.name ?? ''
  );
}

function scoreGuide(guide: Guide, query: string): number {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return 0;
  }

  const title = normalizeText(guide.title);
  const description = normalizeText(guide.description);
  const category = normalizeText(getCategoryName(guide.categoryId));
  const keywords = guide.searchKeywords.map(normalizeText);
  const queryWords = normalizedQuery.split(' ');

  let score = 0;

  // Give the highest priority to title matches.
  if (title === normalizedQuery) {
    score += 100;
  } else if (title.includes(normalizedQuery)) {
    score += 60;
  }

  // Match searchable keywords.
  for (const keyword of keywords) {
    if (keyword === normalizedQuery) {
      score += 50;
    } else if (keyword.includes(normalizedQuery)) {
      score += 30;
    } else if (normalizedQuery.includes(keyword)) {
      score += 15;
    }
  }

  // Match the description and category.
  if (description.includes(normalizedQuery)) {
    score += 20;
  }

  if (category.includes(normalizedQuery)) {
    score += 15;
  }

  // Reward guides matching multiple query words.
  const searchableText = normalizeText(
    `${guide.title} ${guide.description} ${category} ${keywords.join(' ')}`,
  );

  const matchedWords = queryWords.filter(word => searchableText.includes(word));

  score += matchedWords.length * 5;

  // Slightly prioritize featured guides when relevance is equal.
  if (guide.isFeatured) {
    score += 1;
  }

  return score;
}

function getPublishedGuides(): Guide[] {
  return GUIDES.filter(guide => guide.status === 'published');
}

function getScoredGuides(query: string): ScoredGuide[] {
  return getPublishedGuides()
    .map(guide => ({
      guide,
      score: scoreGuide(guide, query),
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item);
}

/**
 * Searches published guides using titles, descriptions, keywords, and categories.
 *
 * If no relevant match is found, returns up to three featured guides
 * as fallback suggestions.
 */
export function searchGuides(query: string): GuideSearchResult {
  const normalizedQuery = normalizeText(query);
  const publishedGuides = getPublishedGuides();

  if (!normalizedQuery) {
    const popularGuides = publishedGuides
      .filter(guide => guide.isFeatured)
      .slice(0, MAX_SUGGESTIONS);

    return {
      results: [],
      suggestions: popularGuides,
      hasExactMatch: false,
    };
  }

  const scoredGuides = getScoredGuides(normalizedQuery);

  const matchedGuides = scoredGuides
    .filter(item => item.score >= 10)
    .slice(0, MAX_SEARCH_RESULTS)
    .map(item => item.guide);

  if (matchedGuides.length > 0) {
    return {
      results: matchedGuides,
      suggestions: [],
      hasExactMatch: true,
    };
  }

  // No relevant match: suggest existing guides instead of inventing results.
  const suggestions = publishedGuides
    .filter(guide => guide.isFeatured)
    .slice(0, MAX_SUGGESTIONS);

  return {
    results: [],
    suggestions,
    hasExactMatch: false,
  };
}
