import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
      <span>{expense.amount}</span>
      <span>{expense.category}</span>
      <span>{expense.date}</span>
      <button onClick={() => onEdit(expense.id)}>
        <FaEdit />
      </button>
      <button onClick={() => onDelete(expense.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default ExpenseItem;
