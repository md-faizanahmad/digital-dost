import { GUIDE_IMAGES } from './guideImages';

export const getGuideImage = (key: string) => {
  return GUIDE_IMAGES[key as keyof typeof GUIDE_IMAGES] ?? null;
};
