import { createSlice } from '@reduxjs/toolkit';

const localContact = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = localContact
  ? {
      items: localContact,
      filter: '',
    }
  : {
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
        if (
          state.items.findIndex(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          ) >= 0
        ) {
          alert(`${action.payload.name} is already in contacts.`);
          return;
        } else {
          state.items.push(action.payload);
        }
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
