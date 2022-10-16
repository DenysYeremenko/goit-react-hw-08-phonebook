import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import style from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = () =>
    filter !== ''
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    contacts.length > 0 && (
      <ul className={style.contactsList}>
        {visibleContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    )
  );
};
