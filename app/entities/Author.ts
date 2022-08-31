import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne, PrimaryKey } from '@mikro-orm/core';

import { Book } from '.';

@Entity()
export class Author {

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  email: string;

  @OneToMany(() => Book, b => b.author, { cascade: [Cascade.ALL] })
  books = new Collection<Book>(this);

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

}
