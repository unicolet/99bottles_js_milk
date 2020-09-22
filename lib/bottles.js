import { downTo } from './helpers';

class Bottles {
  constructor() {}

  verse(count) {
    return `${this._count(count)} ${this._noun(count)} of milk on the wall, ${this._count(count)} ${this._noun(count)} of milk.\n`
        + `Take ${this._remainder(count)} down and pass it around, ${this._count(count-1)} ${this._noun(count-1)} of milk on the wall.\n`;
  }

  _noun(count) {
    if (count === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  _count(count) {
    if (count === 0) {
      return 'no more';
    }
    return count;  
  }

  _remainder(count) {
    if (count === 1) {
      return 'it';
    }
    return 'one';
  }
}

module.exports = {
  Bottles: Bottles
}
