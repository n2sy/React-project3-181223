import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const DATA = [
    {
      id: "d1",
      title: "Assurance",
      amount: 342.5,
      date_d: new Date(2022, 0, 4),
    },
    {
      id: "d2",
      title: "Courses",
      amount: 72.5,
      date_d: new Date(2023, 6, 10),
    },
    {
      id: "d3",
      title: "Meubles",
      amount: 572.5,
      date_d: new Date(2023, 2, 30),
    },
    {
      id: "d4",
      title: "voyage",
      amount: 1072.5,
      date_d: new Date(2023, 11, 10),
    },
  ];
  const [listDep, setListDep] = useState(DATA);

  function addExpense(newExpense) {
    setListDep((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toString(),
          ...newExpense,
        },
      ];
    });
  }
  return (
    <div>
      <NewExpense addExpense={addExpense}></NewExpense>
      <Expenses expList={listDep}></Expenses>
    </div>
  );
}

export default App;
