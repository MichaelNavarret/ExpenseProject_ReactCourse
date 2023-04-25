import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {IExpenseData} from "./interfaces/IExpenseData"
import DUMMY_EXPENSES from "./constants";
 
const App = () => {

  const [expenses, setExpenses] = useState<IExpenseData[]>(DUMMY_EXPENSES);
    
  const addExpenseHandler = (expense: IExpenseData) => {
    console.log("In App.tsx");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
