import { downTo } from './helpers';

class Bottles {
  constructor() {}

  song() {
    return this.verses(99, 0);
  }

  verses(from, to) {
    let result=this.verse(from);
    for(var index=from-1; index >= to; index--) {
      result = result+'\n'+this.verse(index);
    }
    return result;
  }

  verse(count) {
    if (count > 0) {
      return `${this._capitalize(this._count(count))} ${this._noun(count)} of milk on the wall, ${this._count(count)} ${this._noun(count)} of milk.\n`
        + `Take ${this._remainder(count)} down and pass it around, ${this._count(count-1)} ${this._noun(count-1)} of milk on the wall.\n`;
    }
    return `${this._capitalize(this._count(count))} ${this._noun(count)} of milk on the wall, ${this._count(count)} ${this._noun(count)} of milk.\n`
      + 'Go to the store and buy some more, 99 bottles of milk on the wall.\n';
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

  _capitalize(s) {
    if (typeof s !== 'string') return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

module.exports = {
  Bottles: Bottles
}
