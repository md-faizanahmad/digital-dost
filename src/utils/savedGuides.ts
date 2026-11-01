import { database, initializeDatabase } from '../data';
import type { DatabaseInitialization, SavedGuide } from '../types/savedGuides';

/**
 * Stores the database initialization promise.
 * Prevents multiple initialization attempts during concurrent operations.
 */
let initializationPromise: DatabaseInitialization = null;

/**
 * Ensures the SQLite database and required tables are initialized
 * before executing any saved guide operation.
 */
const ensureDatabaseInitialized = async (): Promise<void> => {
  if (initializationPromise === null) {
    initializationPromise = initializeDatabase().catch((error: unknown) => {
      // Allow initialization to be retried if the previous attempt failed.
      initializationPromise = null;
      throw error;
    });
  }

  await initializationPromise;
};

/**
 * Saves a guide to the user's local bookmarks.
 *
 * INSERT OR IGNORE prevents duplicate bookmarks because guide_id
 * is the primary key.
 */
export const saveGuide = async (guideId: string): Promise<void> => {
  await ensureDatabaseInitialized();

  await database.executeAsync(
    `INSERT OR IGNORE INTO saved_guides (guide_id, saved_at)
     VALUES (?, ?)`,
    [guideId, Date.now()],
  );
};

/**
 * Removes a guide from the user's saved bookmarks.
 */
export const removeSavedGuide = async (guideId: string): Promise<void> => {
  await ensureDatabaseInitialized();

  await database.executeAsync('DELETE FROM saved_guides WHERE guide_id = ?', [
    guideId,
  ]);
};

/**
 * Checks whether a specific guide exists in the saved_guides table.
 */
export const isGuideSaved = async (guideId: string): Promise<boolean> => {
  await ensureDatabaseInitialized();

  const result = await database.executeAsync<SavedGuide>(
    `SELECT guide_id, saved_at
     FROM saved_guides
     WHERE guide_id = ?
     LIMIT 1`,
    [guideId],
  );

  return result.rows.length > 0;
};

/**
 * Retrieves all saved guides, ordered by most recently saved.
 * Returns guide IDs for matching against the existing GUIDES array.
 */
export const getSavedGuides = async (): Promise<string[]> => {
  await ensureDatabaseInitialized();

  const result = await database.executeAsync<SavedGuide>(
    `SELECT guide_id, saved_at
     FROM saved_guides
     ORDER BY saved_at DESC`,
  );

  return result.rows._array.map(
    (savedGuide: SavedGuide) => savedGuide.guide_id,
  );
};
