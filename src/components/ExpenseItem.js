import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 1);
  const expenseTitle = 'House Rent';
  const expenseAmount = 20000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs. {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;