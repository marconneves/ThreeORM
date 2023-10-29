/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

import 'reflect-metadata';
import Column from './decorators/Column';
import Entity from './decorators/Entity';
import getMetadataArgsStorage from './store';

@Entity()
class Test {
  @Column('uuid', { unique: true })
  id: number;

  @Column()
  name: string;

  @Column()
  other: string;
}

@Entity()
class Other {
  @Column('uuid', { unique: true })
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
}

console.log(getMetadataArgsStorage().tables);
console.log(getMetadataArgsStorage().columns);
console.log(getMetadataArgsStorage().uniques);
