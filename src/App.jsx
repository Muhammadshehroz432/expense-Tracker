import React from "react";
import ExpenseHeading from "./Components/ExpenseHeading";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import Transaction from "./Components/Transaction/Transaction";
import Addtransaction from "./Components/AddTransaction/Addtransaction";

const App = () => {
  return (
    <center>
      {" "}
      <div className="container  mt-5 ">
        <div className="expense-container p-4">
          <ExpenseHeading />
          <Balance />
          <IncomeExpense />
          <Transaction />
          <Addtransaction />
        </div>
      </div>
    </center>
  );
};

export default App;
