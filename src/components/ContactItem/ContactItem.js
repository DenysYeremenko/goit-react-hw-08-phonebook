import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(contact.id));
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
