export default class BubbleSort {
  times = [];

  sort(arr) {
    console.log('Bubble Sort');
    let n = arr.length;
    let sorted = false;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
          let t = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = t;
          sorted = false;
        }
      }
    }
    return arr;
  }
}
