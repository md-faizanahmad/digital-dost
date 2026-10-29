import { SOCIAL_MEDIA_GUIDES } from './social-media';
import { AI_TOOLS_GUIDES } from './ai-tools';
import { DIGITAL_SKILLS_GUIDES } from './digital-skills';

import type { Guide } from '../../types/guide';

export const GUIDES: Guide[] = [
  ...SOCIAL_MEDIA_GUIDES,
  ...AI_TOOLS_GUIDES,
  ...DIGITAL_SKILLS_GUIDES,
];
