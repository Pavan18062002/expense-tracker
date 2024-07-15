import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses, deleteExpense, editExpense } = useContext(ExpenseContext);

  return (
    <div className="ExpenseList">
      <h2>Recent Transactions</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={deleteExpense}
          onEdit={editExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
