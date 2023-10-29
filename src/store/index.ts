import { ColumnType } from '../types/ColumnTypes';

interface TableMetadataArgs {
  target: Function;
  name: string;
  database?: string;
  schema?: string;
}

interface ColumnMetadataArgs {
  target: Function;
  propertyName: string;
  mode: 'regular';
  type: ((type?: any) => Function) | ColumnType;
}

interface UniqueMetadataArgs {
  target: Function;
  columns: string[];
}

class StorageEngine {
  public tables: TableMetadataArgs[] = [];

  public columns: ColumnMetadataArgs[] = [];

  public uniques: UniqueMetadataArgs[] = [];
}

let storage: StorageEngine;

function getMetadataArgsStorage() {
  if (!storage) {
    storage = new StorageEngine();
  }
  return storage;
}

export default getMetadataArgsStorage;
