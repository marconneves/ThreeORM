export interface EntityOptions {
  /**
   * Table name. By default is equal to class's name.
   */
  name?: string;

  /**
   * Database name. Used in Mysql.
   */
  database?: string;

  /**
   * Schema name. Used in Postgres.
   */
  schema?: string;
}
