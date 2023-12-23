import React from "react";
import Chart from "./Chart";

function ExpenseChart(props) {
  let chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "fev", value: 0 },
    { label: "mar", value: 0 },
    { label: "avr", value: 0 },
    { label: "mai", value: 0 },
    { label: "jun", value: 0 },
    { label: "jui", value: 0 },
    { label: "aou", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const exp of props.expList) {
    const expMonth = exp.date_d.getMonth();
    chartDataPoints[expMonth].value += exp.amount;
  }
  console.log(props.expList);
  console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints}></Chart>;
}

export default ExpenseChart;
