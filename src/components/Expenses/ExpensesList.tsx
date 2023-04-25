import React from "react";
import ExpenseItem from "./ExpenseItem";
import IExpenseData from "../../interfaces/IExpenseData";
import './ExpensesList.css'

type ExpensesListProps = {
    items: IExpenseData[]
}

const ExpensesList = (props:ExpensesListProps) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))}
        </ul>
    );
}


export default ExpensesList;