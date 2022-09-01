import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { QueryOrder, wrap } from '@mikro-orm/core';

import { GLOBAL } from '../server';
import { Author } from '../entities';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const authors = await GLOBAL.em.getRepository(Author).findAll({
    populate: ['books'],
    orderBy: { name: QueryOrder.DESC },
    limit: 20,
  });

  res.json(authors);
});

router.post('/', async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email) {
    res.status(400);
    return res.json({ message: 'fields not valid' });
  }

  try {
    const author = GLOBAL.em.create(Author, new Author(req.body.name, req.body.email));
    await GLOBAL.em.getRepository(Author).persist(author).flush();
    res.json(author);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});


export const AuthorController = router;
