import styles from './Expenses.module.css';
import React  from 'react';
import ExpenseItem from './ExpenseItem'; 
const Expenses=(props)=>{
    return(
        <div className={styles['expenses']}>
        {
            props.item.map(
                expense=>(
                    <ExpenseItem
                    key={expense.id} 
                  date ={expense.date }  
                  tittle={expense.tittle}
                  amount={expense.amount}/>
            ) 
            )
        }
        </div>
    )
}

export default Expenses;