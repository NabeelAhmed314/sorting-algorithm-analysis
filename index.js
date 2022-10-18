import NumberGenerator from "./numbers";
import {
  getSortDifficulty,
  getSortDifficultyItems,
  getSortType,
  getSortTypeTitle,
} from "./utils";

const Style = {
  base: [
    "color: #fff",
    "background-color: #444",
    "padding: 2px 4px",
    "border-radius: 2px",
    "background-color: green",
  ],
};
const log = (text) => {
  let style = Style.base.join(";") + ";";
  console.log(`%c${text}`, style);
};

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    log("Analysis Loaded");
    initialize();
  }
};

function initialize() {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("main").appendChild(table);

  let headingRow = document.createElement("tr");
  let headingCol = document.createElement("th");
  headingCol.innerHTML = "Algorithm";
  headingRow.appendChild(headingCol);
  for (let i = 0; i < 7; i++) {
    let headingCol = document.createElement("th");
    headingCol.innerHTML = getSortDifficultyItems(i);
    headingRow.appendChild(headingCol);
  }
  thead.appendChild(headingRow);

  let start = performance.now();
  const numberGenerator = new NumberGenerator(1, 1000);
  numberGenerator.initialize();
  let end = performance.now();

  for (let j = 0; j < 5; j++) {
    let sort = getSortType(j);
    let row = document.createElement("tr");
    let col = document.createElement("td");
    col.innerHTML = getSortTypeTitle(j);
    row.appendChild(col);

    for (let i = 0; i < 7; i++) {
      start = performance.now();
      const arr = numberGenerator[getSortDifficulty(i)];
      if (j === 3) {
        sort.sort(arr, 0, arr.length - 1);
      } else {
        sort.sort(arr);
      }
      end = performance.now();
      let headingCol = document.createElement("td");
      headingCol.innerHTML = `${end - start}`;
      row.appendChild(headingCol);
    }
    tbody.appendChild(row);
  }
}
