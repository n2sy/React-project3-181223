import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  return (
    <div className="expenses-filter">
      <label>Filter per year</label>
      <div className="expenses-filter__control">
        <select>
          {props.allYears.map((y) => {
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
