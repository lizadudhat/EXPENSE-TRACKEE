import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description && date && category && paymentMethod) {
      addExpense({
        id: uuidv4(),
        amount: parseFloat(amount),
        description,
        date,
        category,
        paymentMethod,
      });
      setAmount('');
      setDescription('');
      setDate('');
      setCategory('');
      setPaymentMethod('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder='Ammount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        required
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Cash">Cash</option>
        <option value="Online Transfer">Online Transfer</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
