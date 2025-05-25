import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Expenses from "@/Components/Expenses/Expenses";
import NewExpense from "@/Components/NewExpense/NewExpense";
import { useState } from "react";

let dummy_expense=[
    {
        id:"e1",
        tittle:"school fee",
        amount:250,
        date:new Date(2023,2,12)
    },
    {
        id:"e2",
        tittle:"book fee",
        amount:220,
        date:new Date(2023,2,4)
    },
    {
        id:"e3",
        tittle:"food fee",
        amount:200,
        date:new Date(2023,2,8)
    },
    {
        id:"e4",
        tittle:"room fee",
        amount:2500,
        date:new Date(2023,2,10)
    }
    ]

export default function Home() {
      const [expenses,setexpenses]=useState(dummy_expense);
  
 
   const addExpenseHandler=(expense)=>{
       const updatedExpense=[expense,...expenses]
       setexpenses(updatedExpense)
    }
  return (
        <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses item={expenses}/>
        </div>
    );
}
