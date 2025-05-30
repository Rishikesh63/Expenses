import React,{useState} from "react";
import styles from './ExpenseForm.module.css';
const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
        // console.log(enteredTitle)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)

    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)


    }
    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData={
            tittle:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onsaveExpenseData(expenseData);
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    
      return(
        <form onSubmit={submitHandler}>
        <div className={styles['new-expense_controls']}>
            <div className={styles['new-expense_control']}>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className={styles['new-expense_control']}>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min={0.01} step={0.01} onChange={amountChangeHandler}></input>
            </div>
            <div className={styles['new-expense_control']}>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            </div>
            <div className={styles['new-expense_actions']}>
                <button type="submit" > Add Expense</button>
            </div>
        </form>
      )
}

export default ExpenseForm;