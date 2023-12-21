import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate d={props.depense.date_d}></ExpenseDate>
        <h2>{props.depense.title}</h2>
      </div>
      <div className="expense-item__price">{props.depense.amount} $</div>
    </div>
  );
}

export default ExpenseItem;
