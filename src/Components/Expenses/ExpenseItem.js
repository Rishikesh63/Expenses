import styles from './ExpenseItem.module.css';

import ExpenseDate from './ExpenseDate';
const ExpenseItem=(props)=>{
    return(
        <div  className={styles['expense-item']}>
        <ExpenseDate date={new Date(props.date)}/>
            {/* <div>{props.date.toISOString()}</div> */}
            <div  className={styles['expense-item_description']}>
              <h2> {props.tittle}</h2> </div>   
                <div className={styles['expense-item_price']}> ${props.amount}</div>              
        </div>
    )
 
} 
export default ExpenseItem; 




 

