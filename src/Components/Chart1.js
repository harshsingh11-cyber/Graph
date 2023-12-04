import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "x",
    "-0.25%",
    "-0.50%",
    "-0.75%",
    "-1%",
    "-2%",
    "-5%",
    "-10%",
    "-20%",
    "+0.25%",
    "+0.50%",
    "+0.75%",
    "+1%",
    "+2%",
    "+5%",
    "+10%",
    "+20%",
  ],
  [0, 0, 0, 0.6, 2, 5, 8, 3, 8, 0, 3, 7, 5, 9, 10, 15, 17],
  [1, 10, 5, 15, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5],
  [2, 23, 15, 20, 2, 3, 54, 6, 7, 5, 43, 3, 2, 12, 3, 5,14],

];

export const options = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export function Chart1() {
  return (
    <>
       <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </>
 
  );
}

export default Chart1;
