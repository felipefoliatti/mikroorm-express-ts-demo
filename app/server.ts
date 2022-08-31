import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';

import { AuthorController, BookController } from './controllers';
import { Author, Book } from './entities';
import { MySqlDriver } from '@mikro-orm/mysql';

export const GLOBAL = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager
};

export const app = express();
const port = 8080;

export const init = (async () => {

  //create global variable 
  GLOBAL.orm = await MikroORM.init<MySqlDriver>();
  GLOBAL.em = GLOBAL.orm.em;

  //run the migrations
  await GLOBAL.orm.getMigrator().up()

  app.use(express.json());
  app.use((req, res, next) => RequestContext.create(GLOBAL.orm.em, next));
  
  app.get('/', (_, res) => res.json({ message: 'hello, world!' }));
  
  app.use('/authors', AuthorController);
  app.use('/books', BookController);

  app.use((_, res) => res.status(404).json({ message: 'route not found' }));

  GLOBAL.server = app.listen(port, () => {
    console.log(`server listening at port ${port}`);
  });
})();
