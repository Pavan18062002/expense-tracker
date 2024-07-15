import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(() => {
    const savedBalance = localStorage.getItem('walletBalance');
    return savedBalance ? parseFloat(savedBalance) : 5000;
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
  }, [walletBalance]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const addExpense = (expense) => {
    if (expense.amount > walletBalance) {
      alert('Insufficient funds!');
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find((expense) => expense.id === id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setWalletBalance(walletBalance + expenseToDelete.amount);
  };

  const editExpense = (updatedExpense) => {
    const oldExpense = expenses.find((exp) => exp.id === updatedExpense.id);
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setWalletBalance(walletBalance + oldExpense.amount - updatedExpense.amount);
  };

  return (
    <ExpenseContext.Provider
      value={{
        walletBalance,
        expenses,
        addIncome,
        addExpense,
        deleteExpense,
        editExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
