import React, { useRef } from "react";
import "./NewExpense.css";
function NewExpense(props) {
  let titleRef = useRef();
  let amountRef = useRef();
  let dateRef = useRef();
  function addHandler() {
    console.log(dateRef.current.value);
    props.addExpense({
      title: titleRef.current.value,
      amount: amountRef.current.value,
      date_d: new Date(dateRef.current.value),
    });
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  }
  return (
    <div className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleRef}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" ref={dateRef}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" ref={amountRef}></input>
        </div>
        <div className="new-expense__actions">
          <button onClick={addHandler}>Add Expense</button>
        </div>
      </div>
    </div>
  );
}

export default NewExpense;
