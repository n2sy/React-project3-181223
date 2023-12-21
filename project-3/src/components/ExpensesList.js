import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  return (
    <div className="expenses-list">
      {props.expList.map((depense) => {
        return <ExpenseItem key={depense.id} depense={depense}></ExpenseItem>;
      })}
    </div>
  );
}

export default ExpensesList;
