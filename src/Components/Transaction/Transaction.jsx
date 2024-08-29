import React from "react";
import TransactionHeading from "./TransactionHeading";
import TransactionList from "./TransactionList";
import { useSelector } from "react-redux";
const Transaction = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const Total = [...income, ...expense];
  const newArray = [...Total];

  return (
    <div>
      <TransactionHeading />
      {newArray.map((item, index) => {
        return <TransactionList key={index} yourvalue={item} />;
      })}
    </div>
  );
};

export default Transaction;
