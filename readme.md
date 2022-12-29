
# Roles and permissions template

**Description**\
Micro service template for permissions and roles control.
Created using [nodejs](https://nodejs.org), [express](https://expressjs.com) and [sequelize](https://sequelize.org).


## Installation

Clone the repository

```bash
git clone https://github.com/Totem-Incinerator/sequelize-templete.git
```

Then run 
```bash
npm install
```

Rename the **.example.env** files to __.env__ and __config.example.json__
to __config.json__.\
Inside them configure your environment variables.

## Migrations
To run the migrations you need to first 
create a database with the name you specified in 
your environment variables.

After that run the following command:
```bash
npm run migrations
```
This will create the following entities in your database:
* permissions
* roles
* permissions-roles 
* sequelizemeta 
* users

**Explanation of the database:** 
There are roles and permissions, a role can have many permissions and a permission can have many roles. This is a many-to-many (n:n) relationship. Solved by using the permissions_role entity.\
For the entity users we add the foreign key "role_id" which refers to the role entity.

## More migrations commands
If you wat to undo all migrations run:
```bash
npm run migrations-undo-all
```

or for the latest migration
```bash
npm run migrations-undo
```
Create migration
```bash
npm run create-migration name
```