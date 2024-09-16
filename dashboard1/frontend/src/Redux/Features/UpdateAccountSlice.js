import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayUpdateModal: false,
};

const UpdateAccountSlice = createSlice({
  name: "updateModal",
  initialState,
  reducers: {
    showUpdateModal(state) {
      state.displayUpdateModal = true;
    },
    hideUpdateModal(state) {
      state.displayUpdateModal = false;
    },
    toggleUpdateModal(state) {
      state.displayUpdateModal = !state.displayUpdateModal;
    },
  },
});

export const { showUpdateModal, hideUpdateModal, toggleUpdateModal } =
  UpdateAccountSlice.actions;

export default UpdateAccountSlice;
