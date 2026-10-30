export type RootStackParamList = {
  MainTabs: undefined;
  GuideContent:
    | { guideId: string; categoryId?: never }
    | { categoryId: string; guideId?: never };
};
