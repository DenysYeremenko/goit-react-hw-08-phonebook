import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsView = props => {
  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>

      <ContactFilter />
      <ContactList />
    </div>
  );
};
