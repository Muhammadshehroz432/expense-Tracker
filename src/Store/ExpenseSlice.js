import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "expense",
  initialState: [],
  reducers: {
    AddtoExpense: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const ExpenseAction = ExpenseSlice.actions;
export default ExpenseSlice;
