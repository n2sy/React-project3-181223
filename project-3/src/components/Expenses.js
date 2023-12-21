import React from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  let tabYear = props.expList.map((exp) => {
    return exp.date_d.getFullYear();
  });
  //console.log(tabYear);
  let s = new Set(tabYear);
  tabYear = [...s];
  //console.log(tabYear);
  return (
    <div className="expenses">
      <ExpensesFilter allYears={tabYear}></ExpensesFilter>
      <ExpensesList expList={props.expList}></ExpensesList>
    </div>
  );
}

export default Expenses;
