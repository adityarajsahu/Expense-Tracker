import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'MSI Katana GF66',
    amount: 84990,
    date: new Date(2022, 11, 17)
  },
  {
    id: 'e2',
    title: 'iPhone 13',
    amount: 55168,
    date: new Date(2023, 2, 10)
  },
  {
    id: 'e3',
    title: 'Boat Stone 350',
    amount: 1699,
    date: new Date(2023, 2, 19)
  },
  {
    id: 'e4',
    title: 'Sony Alpha 7M2K',
    amount: 86791,
    date: new Date(2023, 3, 5)
  },
  {
    id: 'e5',
    title: 'HP V236w',
    amount: 397,
    date: new Date(2023, 5, 10)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;