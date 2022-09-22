import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import style from './App.module.css';

export const App = () => {
  return (
    <>
      <h1 className={style.phonebookHeader}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.contactsHeader}>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </>
  );
};
