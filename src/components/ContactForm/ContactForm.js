import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitHandler = event => {
    event.preventDefault();

    const {
      elements: { name, number },
    } = event.target;

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    dispatch(addContact(contact));
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label className={styles.name}>
        Name
        <input
          className={styles.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.number}>
        Number
        <input
          className={styles.inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Add contact
      </button>
    </form>
  );
};
