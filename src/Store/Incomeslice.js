import { createSlice } from "@reduxjs/toolkit";

const IncomeSlice = createSlice({
  name: "income",
  initialState: [],
  reducers: {
    AddtoIncome: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const IncomeAction = IncomeSlice.actions;
export default IncomeSlice;
