/**
 * Column types used for @PrimaryGeneratedColumn() decorator.
 */
export type PrimaryGeneratedColumnType =
  | 'int' // mysql
  | 'int2' // postgres
  | 'int4' // postgres
  | 'int8' // postgres
  | 'integer' // postgres, mysql
  | 'tinyint' // mysql
  | 'smallint' // mysql, postgres
  | 'mediumint' // mysql
  | 'bigint' // mysql, postgres
  | 'decimal' // mysql, postgres
  | 'fixed' // mysql
  | 'numeric'; // postgres

/**
 * Column types where spatial properties are used.
 */
export type SpatialColumnType =
  | 'geometry' // postgres
  | 'geography'; // postgres

/**
 * Column types where precision and scale properties are used.
 */
export type WithPrecisionColumnType =
  | 'float' // mysql
  | 'double' // mysql
  | 'dec' // mysql
  | 'decimal' // mysql, postgres
  | 'fixed' // mysql
  | 'numeric' // postgres, mysql
  | 'real' // mysql, postgres
  | 'double precision' // postgres, mysql
  | 'datetime' // mysql
  | 'time' // mysql, postgres
  | 'time with time zone' // postgres
  | 'time without time zone' // postgres
  | 'timestamp' // mysql, postgres
  | 'timestamp without time zone' // postgres
  | 'timestamp with time zone'; // postgres

/**
 * Column types where column length is used.
 */
export type WithLengthColumnType =
  | 'character varying' // postgres
  | 'nvarchar' // mysql
  | 'national varchar' // mysql
  | 'character' // mysql, postgres
  | 'varchar' // mysql, postgres
  | 'char' // mysql, postgres
  | 'nchar' // mysql
  | 'national char'; // mysql

export type WithWidthColumnType =
  | 'tinyint' // mysql
  | 'smallint' // mysql
  | 'mediumint' // mysql
  | 'int' // mysql
  | 'bigint'; // mysql

/**
 * All other regular column types.
 */
export type SimpleColumnType =
  | 'simple-array' // typeorm-specific, automatically mapped to string
  // |"string" // typeorm-specific, automatically mapped to varchar depend on platform
  | 'simple-json' // typeorm-specific, automatically mapped to string
  | 'simple-enum' // typeorm-specific, automatically mapped to string

  // numeric types
  | 'int2' // postgres
  | 'integer' // postgres
  | 'int4' // postgres
  | 'int8' // postgres
  | 'float' // mysql
  | 'float4' // postgres
  | 'float8' // postgres
  | 'money' // postgres

  // boolean types
  | 'boolean' // postgres, mysql
  | 'bool' // postgres, mysql

  // text/binary types
  | 'tinyblob' // mysql
  | 'tinytext' // mysql
  | 'mediumblob' // mysql
  | 'mediumtext' // mysql
  | 'blob' // mysql
  | 'text' // mysql, postgres
  | 'citext' // postgres
  | 'hstore' // postgres
  | 'longblob' // mysql
  | 'longtext' // mysql
  | 'bytea' // postgres

  // date types
  | 'timetz' // postgres
  | 'timestamptz' // postgres
  | 'date' // mysql, postgres
  | 'interval' // postgres
  | 'year' // mysql

  // geometric types
  | 'point' // postgres, mysql
  | 'line' // postgres
  | 'lseg' // postgres
  | 'box' // postgres
  | 'circle' // postgres
  | 'path' // postgres
  | 'polygon' // postgres, mysql
  | 'geometry' // mysql
  | 'linestring' // mysql
  | 'multipoint' // mysql
  | 'multilinestring' // mysql
  | 'multipolygon' // mysql
  | 'geometrycollection' // mysql

  // range types
  | 'int4range' // postgres
  | 'int8range' // postgres
  | 'numrange' // postgres
  | 'tsrange' // postgres
  | 'tstzrange' // postgres
  | 'daterange' // postgres

  // other types
  | 'enum' // mysql, postgres
  | 'set' // mysql
  | 'cidr' // postgres
  | 'inet' // postgres
  | 'inet4' // mariadb
  | 'inet6' // mariadb
  | 'macaddr' // postgres
  | 'bit' // postgres
  | 'bit varying' // postgres
  | 'varbit' // postgres
  | 'tsvector' // postgres
  | 'tsquery' // postgres
  | 'uuid' // postgres, mariadb
  | 'xml' // postgres
  | 'json' // mysql, postgres
  | 'cube' // postgres
  | 'ltree'; // postgres

/**
 * Any column type column can be.
 */
export type ColumnType =
  | WithPrecisionColumnType
  | WithLengthColumnType
  | WithWidthColumnType
  | SpatialColumnType
  | SimpleColumnType
  | BooleanConstructor
  | DateConstructor
  | NumberConstructor
  | StringConstructor;
