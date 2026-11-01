export type DatabaseInitialization = Promise<void> | null;

export type SavedGuide = {
  guide_id: string;
  saved_at: number;
};
