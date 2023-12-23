import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataValues = props.dataPoints.map((d) => d["value"]);
  const maxValue = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            maxValue={maxValue}
            data={dataPoint}
          ></ChartBar>
        );
      })}
    </div>
  );
}

export default Chart;
