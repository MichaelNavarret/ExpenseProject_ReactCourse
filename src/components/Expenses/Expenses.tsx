import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import { IExpensesArrayProps } from "../../interfaces/IExpenseData";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: IExpensesArrayProps) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    


    return (
        <Card className="expenses">
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;
