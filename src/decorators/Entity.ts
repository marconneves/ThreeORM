import getMetadataArgsStorage from '../store';
import { EntityOptions } from './options/EntityOptions';

function Entity(
  nameOrOptions?: string | EntityOptions,
  maybeOptions?: EntityOptions
) {
  return function (constructor: Function) {
    let options: EntityOptions;

    if (typeof nameOrOptions === 'string') {
      options = {
        name: nameOrOptions,
        ...maybeOptions
      };
    } else {
      options = nameOrOptions || {};
    }

    getMetadataArgsStorage().tables.push({
      target: constructor,
      name: options.name || constructor.name,
      database: options.database ? options.database : undefined,
      schema: options.schema ? options.schema : undefined
    });
  };
}

export default Entity;
