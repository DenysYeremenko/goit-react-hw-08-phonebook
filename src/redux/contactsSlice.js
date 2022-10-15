import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [
    {
      name: 'Denys',
      number: '523523535',
      id: 56436,
    },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number, id }) {
        return {
          payload: {
            name,
            number,
            id,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
