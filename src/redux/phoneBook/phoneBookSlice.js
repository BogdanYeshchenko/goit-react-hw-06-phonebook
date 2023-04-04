import { createSlice } from '@reduxjs/toolkit';

const initialPhoneBookState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: initialPhoneBookState,
  reducers: {
    addContacts(state, { payload }) {
      state.contacts.push(payload);
    },
    chengeFilter(state, { payload }) {
      state.filter = payload;
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

// Генератори екшенів
export const { addContacts, chengeFilter, deleteContact } =
  phoneBookSlice.actions;
// Редюсер слайсу
export default phoneBookSlice.reducer;
