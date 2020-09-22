import { downTo } from './helpers';

class Bottles {
  constructor() {}

  verse(count) {
    return `${count} bottles of milk on the wall, ${count} bottles of milk.\n`
        + `Take one down and pass it around, ${count-1} bottles of milk on the wall.\n`;
  }
}

module.exports = {
  Bottles: Bottles
}
