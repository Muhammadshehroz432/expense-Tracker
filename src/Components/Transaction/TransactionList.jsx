import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const TransactionList = ({ yourvalue }) => {
  return (
    <div className=" transaction-list container mb-4 mt-4 ">
      <div className="card-body pt-4">
        <h5 className="card-title fs-1 fw-bold">{yourvalue[0]}</h5>
        <p className="fs-2 ">Rs {yourvalue[1]}</p>
      </div>
    </div>
  );
};

export default TransactionList;

/*

<div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>


*/
