import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState(2022);
  let tabYear = props.expList.map((exp) => {
    return exp.date_d.getFullYear();
  });

  let s = new Set(tabYear);
  tabYear = [...s];

  return (
    <div className="expenses">
      <ExpensesFilter
        allYears={tabYear}
        changeFiltredYear={setFiltredYear}
      ></ExpensesFilter>
      <ExpensesList
        expList={props.expList.filter(
          (expense) => expense.date_d.getFullYear() == filtredYear
        )}
      ></ExpensesList>
    </div>
  );
}

export default Expenses;
