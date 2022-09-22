import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const deleteHandler = () => {
    dispatch(deleteContact(contact.id));
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(({ id }) => id !== contact.id))
    );
  };

  return (
    <li className={style.contactItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={style.deleteButton}
        onClick={deleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
