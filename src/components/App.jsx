import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import style from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      <h1 className={style.phonebookHeader}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.contactsHeader}>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </>
  );
};
