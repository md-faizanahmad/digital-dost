import type { Guide } from '../types/guide';
import { GUIDE_CATEGORIES } from '../data/categories';
import { GUIDES } from '../data/guides';

export interface GuideSearchResult {
  results: Guide[];
  suggestions: Guide[];
  hasExactMatch: boolean;
}

type ScoredGuide = { guide: Guide; score: number };

const MAX_SEARCH_RESULTS = 10;
const MAX_SUGGESTIONS = 3;

const normalizeText = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .replace(/[-\s]+/g, ' ')
    .trim();

const getCategoryName = (categoryId: string): string =>
  GUIDE_CATEGORIES.find(({ id }) => id === categoryId)?.name ?? '';

const getSearchableText = (guide: Guide): string => {
  const {
    title,
    titleHinglish,
    description,
    descriptionHinglish,
    searchKeywords,
    prerequisites,
    prerequisitesHinglish,
    steps,
    categoryId,
  } = guide;

  return normalizeText(
    [
      title,
      titleHinglish,
      description,
      descriptionHinglish,
      getCategoryName(categoryId),
      ...searchKeywords,
      ...(prerequisites ?? []),
      ...(prerequisitesHinglish ?? []),
      ...steps.flatMap(
        ({
          title,
          titleHinglish,
          description,
          descriptionHinglish,
          tip,
          tipHinglish,
          warning,
          warningHinglish,
        }) => [
          title,
          titleHinglish,
          description,
          descriptionHinglish,
          tip ?? '',
          tipHinglish ?? '',
          warning ?? '',
          warningHinglish ?? '',
        ],
      ),
    ]
      .filter(Boolean)
      .join(' '),
  );
};

const scoreGuide = (guide: Guide, query: string): number => {
  const q = normalizeText(query);
  if (!q) return 0;

  const title = normalizeText(`${guide.title} ${guide.titleHinglish}`);
  const description = normalizeText(
    `${guide.description} ${guide.descriptionHinglish}`,
  );
  const category = normalizeText(getCategoryName(guide.categoryId));
  const keywords = guide.searchKeywords.map(normalizeText);
  const searchableText = getSearchableText(guide);
  const words = q.split(' ');
  const matchedWords = words.filter(word => searchableText.includes(word));

  let score = 0;

  if (title === q) score += 120;
  else if (title.includes(q)) score += 80;

  if (keywords.includes(q)) score += 60;
  else if (keywords.some(keyword => keyword.includes(q))) score += 40;
  else if (keywords.some(keyword => q.includes(keyword))) score += 20;

  if (description.includes(q)) score += 25;
  if (category.includes(q)) score += 20;

  score += matchedWords.length * 5;

  if (matchedWords.length === words.length) score += 15;
  if (guide.isFeatured) score += 1;

  return score;
};

const getPublishedGuides = (): Guide[] =>
  GUIDES.filter(({ status }) => status === 'published');

const getSuggestions = (guides: Guide[]): Guide[] =>
  guides.filter(({ isFeatured }) => isFeatured).slice(0, MAX_SUGGESTIONS);

export function searchGuides(query: string): GuideSearchResult {
  const normalizedQuery = normalizeText(query);
  const publishedGuides = getPublishedGuides();

  if (!normalizedQuery) {
    return {
      results: [],
      suggestions: getSuggestions(publishedGuides),
      hasExactMatch: false,
    };
  }

  const scoredGuides: ScoredGuide[] = publishedGuides
    .map(guide => ({ guide, score: scoreGuide(guide, normalizedQuery) }))
    .filter(({ score }) => score >= 10)
    .sort((a, b) => b.score - a.score);

  const results = scoredGuides
    .slice(0, MAX_SEARCH_RESULTS)
    .map(({ guide }) => guide);

  return {
    results,
    suggestions: results.length ? [] : getSuggestions(publishedGuides),
    hasExactMatch: results.length > 0,
  };
}
