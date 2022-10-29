import NumberGenerator from "./utils/numbers";
import {
  getSortDifficulty,
  getSortDifficultyItems,
  getSortType,
  getSortTypeTitle,
} from "./utils/utils";
import * as echarts from "echarts";
const fs = require("fs");
import { Remarkable } from 'remarkable';

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

const sorts = [];

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initialize();
  }
};

function initialize() {

  let start = performance.now();
  const numberGenerator = new NumberGenerator(1, 1000);
  numberGenerator.initialize();
  let end = performance.now();

  let p = document.createElement("p");
  p.innerText =
    "Time taken to generate numbers => " + (end - start) + " milliseconds";
  p.classList.add("mb-2");
  document.getElementById("main").appendChild(p);

  const info = document.createElement("p");

  try {
    const infoContent = fs.readFileSync("./src/assets/info.md", "utf8");
    console.log(infoContent)
    let md = new Remarkable();
    console.log(md.render('# Remarkable rulezz!'));
    info.innerHTML = md.render(infoContent.toString());
    info.classList.add("mb-2");
    document.getElementById("main").appendChild(info);
  } catch (err) {
    console.error(err);
  }

  let table = document.createElement("table");
  table.classList.add("mb-2");

  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

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
      sort.times.push(end - start);
      row.appendChild(headingCol);
    }
    tbody.appendChild(row);
    sorts.push(sort);
  }

  document.getElementById("main").appendChild(table);
  createChart();
  document.getElementById("loading").remove();
}

function printInfo() {
  console.log("started import");
  var file = "info.txt";
  console.log(file);
  document.get(
    file,
    function (data) {
      var lines = data.split("\n");
      var id = 0;
      $.each(lines, function (n, elem) {
        parseLine(elem, id);
        id++;
      });
      console.log("done parsing.");
    },
    "text"
  );
  console.log("done getting");
}

function createChart() {
  const chartContainer = document.createElement("div");
  chartContainer.setAttribute("id", "barChart");
  chartContainer.classList.add("mb-2");
  chartContainer.style.width = "100%";
  chartContainer.style.maxWidth = "700px";
  chartContainer.style.margin = "0 auto";
  chartContainer.style.height = "600px";
  chartContainer.style.minWidth = "600px";
  // const canvas = document.createElement("canvas");
  // canvas.setAttribute("id", "barChart");
  // canvas.classList.add("mb-2");
  // canvas.style.width = "100%";
  // canvas.style.maxWidth = "700px";
  // canvas.style.margin = "0 auto";

  // document.getElementById("main").appendChild(canvas);
  document.getElementById("main").appendChild(chartContainer);

  const barChart = echarts.init(chartContainer);
  var captions = ["1", "10", "100", "1000", "10000", "100000", "100 Sorted"];

  var options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "4%",
      right: "4%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: captions,
        name: "No. of items",
        nameLocation: "center",
        nameGap: 30,
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Time Taken (Milliseconds)",
        nameLocation: "center",
        nameGap: 50,
      },
    ],
    series: [],
  };
  for (let j = 0; j < 5; j++) {
    options.series.push({
      name: getSortTypeTitle(j),
      type: "bar",
      data: sorts[j].times,
    });
  }

  barChart.setOption(options);
}