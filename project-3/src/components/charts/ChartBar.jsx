import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  //console.log(props);
  let barHeight = Math.round((props.data.value / props.maxValue) * 100) + "%";
  console.log(barHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.data.label}</div>
    </div>
  );
}

export default ChartBar;
