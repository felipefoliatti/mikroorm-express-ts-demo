# A simple demo!

This is a very simple demonstration of how to use [MikroORM](https://mikro-orm.io/) with [Express](https://github.com/expressjs/express) using Typescript.
This demo was created with the intention of being very simple, so tests were proposely left out.

# Files

This project has a simple strucuture, having only necessary structure to keep it organized. In this project, the files are organized in **controllers**, **entities** and **migrations**.

## Folder structure

All source files are located inside **app** folder, and therefore, in three different components: **controllers**, **entities** and **migrations**.


## MikroORM 

For this project, the version 5.3.1 was used. The main configuration is located in _mikro-orm.config.ts_ file.
The config file is responsible for the all MikroORM configuration, including the database connection settings, the entity and migrations location.

## Database

The database used for this demonstration is MySQL 5.7. A _docker-compose.yml_ file was also created to configure the database image.
Before run the project, you need to start the database using **docker-compose**.

```
$ docker-compose --project-name demo up;
```

The command above will bring the database up and running on the port 3306.

## Migrations

The project also have an example of migrations, using the package shipped with MikroORM.
SQL DDL commands are wrote in plain string to set up the database, and they are similar to the snipped bellow.

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
PS: don't forget to run docker-compose to start the database before :) 

# Conclusion
This project is intended to demonstrate de usage of the tecnology. I was kept as simple as possible.