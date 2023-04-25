import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {IExpenseData, INewExpenseProps} from "../../interfaces/IExpenseData"

const NewExpense = (props: INewExpenseProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
        props.onAddExpense(enteredExpenseData);
    };

    const showNewExpenseForm = () => {
        setIsClicked(true);
    };

    const closeNewExpenseForm = () => {
        setIsClicked(false);
    };

    const content = isClicked ? <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCloseForm={closeNewExpenseForm} /> : <button onClick={showNewExpenseForm}>Add New Expense</button>;

    return (
        <div className='new-expense'>
            {content}
        </div>
        
    );
}

export default NewExpense;