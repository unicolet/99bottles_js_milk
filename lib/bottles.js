import { downTo } from './helpers';

class Bottles {
  constructor() {}

  verse(count) {
    return `${count} ${this._noun(count)} of milk on the wall, ${count} ${this._noun(count)} of milk.\n`
        + `Take one down and pass it around, ${count-1} ${this._noun(count-1)} of milk on the wall.\n`;
  }

  _noun(count) {
    if (count==1) {
      return 'bottle';
    }
    return 'bottles';
  }
}

module.exports = {
  Bottles: Bottles
}
