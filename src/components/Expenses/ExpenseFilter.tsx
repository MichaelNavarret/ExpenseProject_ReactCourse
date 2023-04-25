import React, {useState} from 'react';
import './ExpenseFilter.css'
import {IExpenseFilterProps} from '../../interfaces/IExpenseData';


const ExpenseFilter = (props: IExpenseFilterProps) => {

    const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChangeFilter(event.target.value);
    }
   
    return(
        <div>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter by year</label>
                    <select value = {props.selected} onChange={dropdownChangeHandler}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ExpenseFilter;