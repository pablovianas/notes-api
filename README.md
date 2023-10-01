
# NOTES API

This API was made on backend course of Explorer - RocketSeat.



## Features

- Create/Update User
- Create/List/Delete Notes
- Create/List Tags



# API Documentation

## Base Routes

- /users: Users routes
- /notes: Notes routes
- /tags: Tags routes

# UserController

#### Create user

```http
  POST /users
```

| Params   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | User name |
| `email` | `string` | User email |
| `password` | `string` | User password |

#### Update user information 

```http
  PUT users/${id}
```

| Params   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `string` | User name |
| `email` | `string` | User email |
| `password` | `string` | User password |
| `old_password` | `string` | User old password |

#

# NotesController

#### Create note

```http
  POST /notes/${user_id}
```


|Parâmetro |	Tipo	| Descrição |
| :---------- | :--------- | :---------------------------------- |
| `user_id`	| `int`	| **Required**. User ID  |
| `title`	| `string`	| **Required**. Note title |
| `description` |	`string` |	**Required**. Note description |
| `tags` |	`String array` |	**Required**. Note related tags |
| `links` |	`String array`|	**Required**. Note related links |

#### List note

```http
  GET /notes/${id}
```

|Parâmetro |	Tipo	| Descrição |
| :---------- | :--------- | :---------------------------------- |
| `id`	| `int`	| **Required**. List note from ID |

#### List user notes with query

```http
  GET /notes/${user_id}&=title=${text}&tags=${text}
```

|Parâmetro |	Tipo	| Descrição |
| :---------- | :--------- | :---------------------------------- |
| `user_id`	| `int`	| **Required**. User ID |
| `title`	| `string`	| **Optional**. Can search a note using title |
| `tags`	| `string`	| **Optional**. Can search a note using tags |

#### Delete a note

```http
  DELETE /notes/${id}
```

|Parâmetro |	Tipo	| Descrição |
| :---------- | :--------- | :---------------------------------- |
| `id`	| `int`	| **Required**. Note ID |

# TagsController

#### List user tags

```http
  GET /tags/${user_id}
```

|Parâmetro |	Tipo	| Descrição |
| :---------- | :--------- | :---------------------------------- |
| `user_id`	| `int`	| **Required**. User ID |


## Stacks used

**Back-end:** Node, Express, Bcryptjs, KnexJS, Nodemon, Sqlite3


## Local Run

Project clone 

```bash
  git clone https://github.com/pablovianas/notes-api.git
```

Change directory

```bash
  cd my-project
```

Dependencies

```bash
  npm install
```

Starting server 

```bash
  npm run dev
```

Creating migration

```bash
  npx knex migrate:make "tableName"
```

Run migrations
```bash
  npm run migrate
```
