import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Author, Book } from './entities';

const options: Options = {
  type: 'mysql',
  entities: [Author, Book],
  dbName: 'sys',
  highlighter: new SqlHighlighter(),
  debug: true,
  connect: true,
  host: '0.0.0.0',
  port: 3306,
  user: 'root',
  password: '12345678',
  migrations: {
    transactional: true,
    path: './dist/migrations',
    pathTs: './dist/migrations'
  }
};

export default options;
