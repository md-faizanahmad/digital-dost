import { open } from 'react-native-nitro-sqlite';

const DATABASE_NAME = 'digitaldost.db';

export const database = open({
  name: DATABASE_NAME,
});
