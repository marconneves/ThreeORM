import getMetadataArgsStorage from '../store';
import { ColumnType } from '../types/ColumnTypes';
import { ColumnOptions } from './options/ColumnOptions';

function Column(
  typeOrOptions?: ((type?: any) => Function) | ColumnType | ColumnOptions,
  options?: ColumnOptions
) {
  return function (target: Object, propertyName: string) {
    let type: ColumnType | undefined;
    if (
      typeof typeOrOptions === 'string' ||
      typeof typeOrOptions === 'function'
    ) {
      type = <ColumnType>typeOrOptions;
    } else {
      type = typeOrOptions ? (<any>typeOrOptions).type : undefined;
      options = typeOrOptions ? (<any>typeOrOptions).options : undefined;
    }

    const reflectMetadataType = Reflect.getMetadata(
      'design:type',
      target,
      propertyName
    );

    if (!type && reflectMetadataType) {
      type = reflectMetadataType;
    }

    if (options && options.unique) {
      getMetadataArgsStorage().uniques.push({
        target: target.constructor,
        columns: [propertyName]
      });
    }

    getMetadataArgsStorage().columns.push({
      target: target.constructor,
      propertyName,
      mode: 'regular',
      type: type || reflectMetadataType
    });
  };
}

export default Column;
