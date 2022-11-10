export default class RadixSort {
  times = [];

  sort(arr, min, max) {
    console.log("Radix Sort");
    const maxNum = max * 10;
    let divisor = 10;
    while (divisor < maxNum) {
      let buckets = [...Array(10)].map(() => []);
      for (let num of arr) {
        buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      }
      arr = [].concat.apply([], buckets);
      divisor *= 10;
    }
    return arr;
  }
}
