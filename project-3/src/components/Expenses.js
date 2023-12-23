import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./charts/ExpenseChart";

function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState(2022);
  let tabYear = props.expList.map((exp) => {
    return exp.date_d.getFullYear();
  });

  let s = new Set(tabYear);
  tabYear = [...s];

  const filterDepenses = props.expList.filter(
    (element) => element.date_d.getFullYear().toString() == filtredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        allYears={tabYear}
        changeFiltredYear={setFiltredYear}
      ></ExpensesFilter>
      <ExpenseChart expList={filterDepenses}></ExpenseChart>
      <ExpensesList expList={filterDepenses}></ExpensesList>
    </div>
  );
}

export default Expenses;
