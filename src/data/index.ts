import { open } from 'react-native-nitro-sqlite';

const DATABASE_NAME = 'digitaldost.db';

export const database = open({
  name: DATABASE_NAME,
});

export const initializeDatabase = async (): Promise<void> => {
  await database.executeAsync(`
    CREATE TABLE IF NOT EXISTS saved_guides (
      guide_id TEXT PRIMARY KEY NOT NULL,
      saved_at INTEGER NOT NULL
    )
  `);
};
