import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  function filterYearHandler(e) {
    console.log(e.target.value);
    props.changeFiltredYear(e.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter per year</label>
        <select onChange={filterYearHandler}>
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
