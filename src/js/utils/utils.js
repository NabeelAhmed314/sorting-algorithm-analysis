import BubbleSort from "../algorithms/bubbleSort";
import CountingSort from "../algorithms/countingSort";
import InsertionSort from "../algorithms/insertionSort";
import MergeSort from "../algorithms/mergeSort";
import QuickSort from "../algorithms/quickSort";
import SelectionSort from "../algorithms/selectionSort";

export function getSortType(type) {
  switch (type) {
    case 0:
      return new InsertionSort();
    case 1:
      return new MergeSort();
    case 2:
      return new CountingSort();
    case 3:
      return new BubbleSort();
    case 4:
      return new SelectionSort();
    case 5:
      return new QuickSort();
    default:
      return new InsertionSort();
  }
}

export function getSortTypeTitle(type) {
  switch (type) {
    case 0:
      return "Insertion Sort";
    case 1:
      return "Merge Sort";
    case 2:
      return "Counting Sort";
    case 3:
      return "Bubble Sort";
    case 4:
      return "Selection Sort";
    case 5:
      return "Quick Sort";
    default:
      return "Instertion Sort";
  }
}

export function getSortDifficulty(difficulty) {
  switch (difficulty) {
    case 0:
      return "easy";
    case 1:
      return "medium";
    case 2:
      return "hard";
    case 3:
      return "expert";
    case 4:
      return "advanced";
    default:
      return "easy";
  }
}

export function getSortDifficultyItems(difficulty) {
  switch (difficulty) {
    case 0:
      return "10 items";
    case 1:
      return "100 items";
    case 2:
      return "1000 items";
    case 3:
      return "10000 items";
    case 4:
      return "100000 items";
    case 5:
      return "1000000 items";
    default:
      return "10 items";
  }
}
