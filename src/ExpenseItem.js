import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <div>
        <strong>Description:</strong> {expense.description} <br />
        <strong>Amount:</strong> ${expense.amount.toFixed(2)} <br />
        <strong>Date:</strong> {new Date(expense.date).toLocaleDateString()} <br />
        <strong>Category:</strong> {expense.category} <br />
        <strong>Payment Method:</strong> {expense.paymentMethod} <br />
      </div>
    </li>
  );
};

export default ExpenseItem;
