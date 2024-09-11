import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    displaySearchModal:true,

};

const searchModalSlice = createSlice({


    name:"searchModal",

    initialState,

    reducers:{


        showSearchModal(state){


            state.displaySearchModal = true;

        },

        hideSearchModal(state){


            state.displaySearchModal = false;

        },

        toggleSearchModal(state){

            state.displaySearchModal = !state.displaySearchModal;

        }


    }


});

export const { showSearchModal,hideSearchModal,toggleSearchModal } = searchModalSlice.actions;


export default searchModalSlice;