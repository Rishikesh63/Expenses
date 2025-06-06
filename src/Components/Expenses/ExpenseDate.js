
import  styles from './ExpenseDate.module.css';
import React from 'react';
const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString("en-US",{month:'long'});
    const year= props.date.getFullYear();
    const day= props.date.toLocaleString("en-US",{day:'2-digit'});
    return(
        <div className={styles['expense-date']}>
        <div className = {styles['expense-date_day']}>{   day  }</div>
        <div className = {styles['expense-date_month']}>{ month }</div>
        <div className = {styles['expense-date_year']}>{  year }</div>
        </div>
    )
 }
export default ExpenseDate;