# A simple demo!

This is a very simple demonstration of how to use [MikroORM](https://mikro-orm.io/) with [Express](https://github.com/expressjs/express) using Typescript.
This demo was created with the intetion of being very simple, so tests were proposely left out.

# Files

This project has a simple strucuture, having only necessary strucutre to keep it organized. In this project, we have **controllers**, **entities** and **migrations**.

## Folder structure

All source-files are located inside **app** folder. Inside the folder, there are three componentes: **controllers**, **entities** and **migrations**.

## MikroORM 

For this project, the version 5.3.1 was used. The main configuration is located in _mikro-orm.config.ts_ file.
The config file has the database connection settings and also the entity and migrations location.

## Database

The database used for this demonstration is MySQL 5.7. A _docker-compose.yml_ file is responsible for configure the database image.
Before run the project, you need to start the database using **docker-compose**.

```
$ docker-compose --project-name demo up;
```

The command above will bring the database up and running on the port 3306.

## Migrations

The project also have an example of migrations. This project used the package shipped with MikroORM.
The migration uses the SQL command using plain string.

```
this.addSql(`
  CREATE TABLE author (
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(127) NOT NULL,
     email VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
   )
   CHARACTER SET utf8 COLLATE utf8_general_ci;`
);
``` 


## Running the project

To run this project, you need to run the following command.

``` 
$ npm run start
``` 
PS: don't forget running docker-compose to start the database before :) 

# Conclusion
This project is intended to demonstrate de usage of the tecnology. I was kept as simple as possible.