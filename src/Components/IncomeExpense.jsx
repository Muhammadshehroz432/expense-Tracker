import React from "react";
import { useSelector } from "react-redux";

const IncomeExpense = () => {
  // Retrieve income and expense arrays from the Redux store
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  // Calculate total income from the income array
  const Incomeval = income.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue[1] || 0), // Ensure currentValue[1] exists
    0
  );
  console.log(Incomeval);

  // Calculate total expense from the expense array
  const Expenseval = expense.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue[1] || 0), // Ensure currentValue[1] exists
    0
  );
  console.log(Expenseval);

  return (
    <div>
      <center>
        <div className="income-expense-container m-4 p-3">
          <div className="row income-expense-wrapper p-4">
            <div className="col-lg-6 text-success income">
              <h2 className="fw-bold">Income</h2>
              <p className="fs-1 fw-bold">Rs {Incomeval}</p>
            </div>
            <div className="col-lg-6 text-danger expense">
              <h2 className="fw-bold">Expense</h2>
              <p className="fs-1 fw-bold">Rs {Expenseval}</p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default IncomeExpense;
