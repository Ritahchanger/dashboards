import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayFilterTable: false,
  data: null,
};

const FilterTableSlice = createSlice({
  name: "filterModal",
  initialState,
  reducers: {
    showFilterTable(state, action) {
      state.data = action.payload;
      state.displayFilterTable = true;
    },
    hideFilterTable(state) {
      state.displayFilterTable = false;
    },
  },
});

export const { showFilterTable, hideFilterTable } = FilterTableSlice.actions;

export default FilterTableSlice;
