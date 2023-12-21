import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.d.toLocaleString("fr-FR", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {props.d.toLocaleString("fr-FR", { year: "numeric" })}
      </div>
      <div className="expense-date__day">
        {props.d.toLocaleString("fr-FR", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default ExpenseDate;
