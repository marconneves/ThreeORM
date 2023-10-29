export { default as Column } from './decorators/Column';
export { default as Entity } from './decorators/Entity';

class ThreeOrm {
  constructor() {
    console.log('ThreeOrm constructor');
  }
}

export default ThreeOrm;
