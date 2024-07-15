import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WalletBalance from './components/WalletBalance';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import AddExpenseModal from './components/AddExpenseModal';
import { ExpenseProvider } from './context/ExpenseContext';
import './index.css';

const App = () => {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  return (
    <ExpenseProvider>
      <div className="App">
        <Navbar />
        <WalletBalance />
        <button className="add-expense" onClick={() => setIsExpenseModalOpen(true)}>+ Add Expense</button>
        <AddExpenseModal
          isOpen={isExpenseModalOpen}
          onRequestClose={() => setIsExpenseModalOpen(false)}
        />
        <ExpenseList />
        <ExpenseSummary />
      </div>
    </ExpenseProvider>
  );
};

export default App;
