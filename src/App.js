import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Router>
      <header className="header">
        <h1>Expense Tracker</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/chart">
            <button>Show Chart</button>
          </Link>
        </nav>
      </header>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <AddExpense addExpense={addExpense} />
              <ExpenseList expenses={expenses} />
            </>
          } />
          <Route path="/chart" element={<ExpenseChart expenses={expenses} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
