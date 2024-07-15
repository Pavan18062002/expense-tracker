import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpenseModal = ({ isOpen, onRequestClose }) => {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    const expense = {
      id: new Date().getTime(),
      title,
      amount: Number(amount),
      category,
      date,
    };
    addExpense(expense);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Expenses</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Select Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        placeholder="dd/mm/yyyy"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="add" onClick={handleSubmit}>Add Expense</button>
      <button className="cancel" onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default AddExpenseModal;
