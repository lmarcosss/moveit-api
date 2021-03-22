import { createConnection, Connection } from 'typeorm';
import config from '../ormconfig'

export default async (name = 'default'): Promise<Connection> => {

  return createConnection(
    Object.assign(config, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? 'moveit'
          : config.database,
    }),
  );
};
