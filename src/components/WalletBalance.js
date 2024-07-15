import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import Modal from 'react-modal';

const WalletBalance = () => {
  const { walletBalance, addIncome } = useContext(ExpenseContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState('500');

  const handleAddIncome = () => {
    addIncome(Number(amount));
    setModalIsOpen(false);
  };

  return (
    <div className="WalletBalance">
      <h2>Wallet Balance: ₹{walletBalance}</h2>
      <button onClick={() => setModalIsOpen(true)}>+ Add Income</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Add Income</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="add" onClick={handleAddIncome}>Add</button>
        <button className="cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default WalletBalance;
