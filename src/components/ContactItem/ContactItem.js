import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button">Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
