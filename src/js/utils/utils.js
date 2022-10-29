import BubbleSort from "../algorithms/bubbleSort";
import InsertionSort from "../algorithms/insertionSort";
import MergeSort from "../algorithms/mergeSort";
import QuickSort from "../algorithms/quickSort";
import SelectionSort from "../algorithms/selectionSort";

export function getSortType(type) {
  switch (type) {
    case 0:
      return new InsertionSort();
    case 1:
      return new BubbleSort();
    case 2:
      return new SelectionSort();
    case 3:
      return new QuickSort();
    case 4:
      return new MergeSort();
    default:
      return new InsertionSort();
  }
}

export function getSortTypeTitle(type) {
  switch (type) {
    case 0:
      return "Insertion Sort";
    case 1:
      return "Bubble Sort";
    case 2:
      return "Selection Sort";
    case 3:
      return "Quick Sort";
    case 4:
      return "Merge Sort";
    default:
      return "Instertion Sort";
  }
}

export function getSortTypeColor(type) {
  switch (type) {
    case 0:
      return "red";
    case 1:
      return "green";
    case 2:
      return "blue";
    case 3:
      return "yellow";
    case 4:
      return "purple";
    default:
      return "red";
  }
}

export function getSortDifficulty(difficulty) {
  switch (difficulty) {
    case 0:
      return "vEasy";
    case 1:
      return "easy";
    case 2:
      return "medium";
    case 3:
      return "hard";
    case 4:
      return "expert";
    case 5:
      return "advanced";
    case 6:
      return "sorted";
    default:
      return "vEasy";
  }
}

export function getSortDifficultyItems(difficulty) {
  switch (difficulty) {
    case 0:
      return "1 item";
    case 1:
      return "10 items";
    case 2:
      return "100 items";
    case 3:
      return "1000 items";
    case 4:
      return "10000 items";
    case 5:
      return "100000 items";
    case 6:
      return "100 sorted items";
    default:
      return "vEasy";
  }
}
