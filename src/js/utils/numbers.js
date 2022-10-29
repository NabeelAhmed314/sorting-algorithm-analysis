export default class NumberGenerator {
  // 1 element
  vEasy = [];
  // 10 element
  easy = [];
  // 100 element
  medium = [];
  // 1000 element
  hard = [];
  // 10000 element
  expert = [];
  // 100000 element
  advanced = [];
  // 100 sorted element
  sorted = [];

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  initialize() {
    for (let i = 0; i < 100000; i++) {
      const a =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      if (i < 1) this.vEasy.push(a);
      if (i < 10) this.easy.push(a);
      if (i < 100) {
        this.medium.push(a);
        this.sorted.push(i + 1);
      }
      if (i < 1000) this.hard.push(a);
      if (i < 10000) this.expert.push(a);
      if (i < 100000) this.advanced.push(a);
    }
  }
}
