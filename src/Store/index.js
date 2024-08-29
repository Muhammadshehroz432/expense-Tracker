import { configureStore } from "@reduxjs/toolkit";
import IncomeSlice from "./Incomeslice";
import ExpenseSlice from "./ExpenseSlice";
const Trackerstore = configureStore({
  reducer: {
    income: IncomeSlice.reducer,
    expense: ExpenseSlice.reducer,
  },
});

export default Trackerstore;
