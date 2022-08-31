import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { QueryOrder, wrap } from '@mikro-orm/core';
import { GLOBAL } from '../server';
import { Author, Book } from '../entities';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const books = await GLOBAL.em.getRepository(Book).findAll({
    populate: ['author'],
    orderBy: { title: QueryOrder.DESC },
    limit: 20,
  });
  res.json(books);
});


router.post('/', async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.author) {
    res.status(400);
    return res.json({ message: 'fields not valid' });
  }

  try {
    const author = await GLOBAL.em.getRepository(Author).findOneOrFail({id: req.body.author})
    const book = GLOBAL.em.create(Book, new Book(req.body.title, author));
    await GLOBAL.em.getRepository(Book).persist(book).flush();
    res.json(book);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

export const BookController = router;
