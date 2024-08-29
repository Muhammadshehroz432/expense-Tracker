import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const TransactionList = ({ yourvalue }) => {
  return (
    <div className=" transaction-list container ">
      <div className="  transaction-list-wrapper mb-3 mt-2   ">
        <div className="transaction-content  pt-3 mt-4   ">
          <h1 className="fw-bold">{yourvalue[0]}</h1>
          <p className="fs-1 ">Rs {yourvalue[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
