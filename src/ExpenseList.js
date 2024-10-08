import React from 'react';
import ExpenseItem from './ExpenseItem';
import './App.css'; // Import the CSS file

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="expense-list"> {/* Apply the class to the ul */}
      {expenses.map((expense) => (
        <li className="expense-item" key={expense.id}> {/* Apply the class to li */}
          <ExpenseItem expense={expense} />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
