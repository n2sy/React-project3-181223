import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Layout/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate d={props.depense.date_d}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.depense.title}</h2>
      </div>
      <div className="expense-item__price">{props.depense.amount} $</div>
    </Card>
  );
}

export default ExpenseItem;
