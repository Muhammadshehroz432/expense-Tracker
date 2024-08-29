import React, { useRef } from "react";
import AddTransactionHeading from "./AddTransactionHeading";
import AddtransactionInput from "./AddtransactionInput";
const Addtransaction = () => {
  return (
    <div className=" p-2">
      <AddTransactionHeading />
      <AddtransactionInput />
    </div>
  );
};

export default Addtransaction;
