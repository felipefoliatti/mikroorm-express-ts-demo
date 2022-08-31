import { Cascade, Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Author } from './index';

@Entity()
export class Book {

  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }

}
