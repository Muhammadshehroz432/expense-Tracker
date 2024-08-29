import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const Incomeval = income.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue[1] || 0), // Ensure currentValue[1] exists
    0
  );
  console.log(Incomeval);
  const Expenseval = expense.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue[1] || 0), // Ensure currentValue[1] exists
    0
  );
  console.log(Expenseval);

  const Totalbalance = Incomeval - Expenseval;
  const balanceClass = Totalbalance > 0 ? "text-success" : "text-danger";
  // // Get the values from index 1 of both arrays
  // const Incomeval = Array.isArray(income) && income.length > 1 ? income[1] : 0;
  // const Expenseval =
  //   Array.isArray(expense) && expense.length > 1 ? expense[1] : 0;

  // console.log(`Income Value: ${Incomeval}`);
  // console.log(`Expense Value: ${Expenseval}`);

  // Calculate total balance
  // const totalBalance = parseFloat(Incomeval) - parseFloat(Expenseval);

  return (
    <div className="mt-4">
      <h1 className="display-4 fw-bold"> Your Balance</h1>

      <p className={`fs-1 fw-bold ${balanceClass}`}>{Totalbalance}</p>
    </div>
  );
};

export default Balance;
