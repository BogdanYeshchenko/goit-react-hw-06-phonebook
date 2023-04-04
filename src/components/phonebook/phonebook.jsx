import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './phonebook.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneBook = () => {
  return (
    <div className={css.boockBox}>
      <h1 className={css.boockTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.boockTitle}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default PhoneBook;
