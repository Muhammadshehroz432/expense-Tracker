import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { IncomeAction } from "../../Store/Incomeslice";
import { ExpenseAction } from "../../Store/ExpenseSlice";
const AddtransactionInput = () => {
  const Nameref = useRef();
  const Amountref = useRef();
  const dispatch = useDispatch();

  const handleAddtoincome = () => {
    const name = Nameref.current.value;
    const amount = Amountref.current.value;
    dispatch(IncomeAction.AddtoIncome([name, amount]));
    Nameref.current.value = "";
    Amountref.current.value = "";
  };
  const handleAddtoexpense = () => {
    const name = Nameref.current.value;
    const amount = Amountref.current.value;
    dispatch(ExpenseAction.AddtoExpense([name, amount]));
    Nameref.current.value = "";
    Amountref.current.value = "";
  };
  return (
    <div>
      <div className="add-transaction-input ">
        <input
          type="text"
          className="add-input fs-3 p-2 mb-3"
          required
          placeholder="Name"
          ref={Nameref}
        />

        <input
          type="number"
          className="add-input fs-3 p-2"
          required
          placeholder="Amount"
          ref={Amountref}
        />
      </div>
      <button
        type="button"
        class="btn btn-success fs-3 mt-4 "
        onClick={handleAddtoincome}
      >
        Add income
      </button>
      <button
        type="button"
        class="btn btn-danger fs-3 mt-4 ms-2 "
        onClick={handleAddtoexpense}
      >
        Add Expense
      </button>
    </div>
  );
};

export default AddtransactionInput;
