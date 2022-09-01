import { Migration } from '@mikro-orm/migrations';

export class Migration0001 extends Migration {
  async up(): Promise<void> {

    this.addSql(`
      CREATE TABLE author (
        id      INT NOT NULL AUTO_INCREMENT,
        name    VARCHAR(127) NOT NULL,
        email   VARCHAR(64) NOT NULL,

        PRIMARY KEY (id)
      )
      CHARACTER SET utf8 COLLATE utf8_general_ci;
    `);

    this.addSql(`
      CREATE TABLE book (
        id         INT NOT NULL AUTO_INCREMENT,
        title      VARCHAR(127) NOT NULL,
        author_id  INT NOT NULL,

        PRIMARY KEY (id),
        CONSTRAINT fk_book_author FOREIGN KEY (author_id) REFERENCES author(id)        
      )
      CHARACTER SET utf8 COLLATE utf8_general_ci;
    `);
  }
}
