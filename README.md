# ThreeORM - _WORK IN PROGRESS_

ThreeORM is a unique Object-Relational Mapping (ORM) library that implements a three-tier caching system to optimize data retrieval and manipulation.

## Description

ThreeORM is designed with performance in mind. It uses a three-level caching system to ensure that your data is always readily available and your database operations are as efficient as possible.

The first level of cache is in-memory, providing the fastest access to frequently used data. If the data is not found in the in-memory cache, ThreeORM will then look in the second level of cache, which is implemented using Redis. Redis provides a balance between speed and persistence, ensuring that your data is still available even if your application restarts.

If the data is not found in the Redis cache, ThreeORM will then retrieve the data from the persistent database. ThreeORM supports both MySQL and PostgreSQL databases, providing you with the flexibility to choose the database that best suits your needs.

## Installation

To install ThreeORM, use the following command:

\```bash
npm install threeorm
\```

## Usage

Here is a basic example of how to use ThreeORM:

\```javascript
const ThreeORM = require('threeorm');

// Initialize ThreeORM
const orm = new ThreeORM({
  mysql: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  },
  redis: {
    host: 'localhost',
    port: 6379
  }
});

// Use ThreeORM
const user = await orm.User.findOne({ where: { id: 1 } });
\```

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) for more information.

## License

ThreeORM is [MIT licensed](LICENSE).
