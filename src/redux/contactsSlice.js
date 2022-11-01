import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts/operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   addContact: {
  //     // reducer(state, action) {
  //     //   state.items.push(action.payload);
  //     // },
  //     // prepare({ name, number, id }) {
  //     //   return {
  //     //     payload: {
  //     //       name,
  //     //       number,
  //     //       id,
  //     //     },
  //     //   };
  //     // },
  //   },
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   deleteContact(state, action) {
  //     // const index = state.items.findIndex(task => task.id === action.payload);
  //     // state.items.splice(index, 1);
  //   },

  // },
});

export const contactsReducer = contactsSlice.reducer;
