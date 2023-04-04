import { deleteContact } from 'redux/phoneBook/phoneBookSlice';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(store => store.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);
  const filteredContscts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  function hendleDeleteContact(id, name) {
    const notify = () =>
      toast.warn(`${name} was delete.`, {
        theme: 'dark',
      });

    notify();
    dispatch(deleteContact(id));
  }

  return (
    <ul className={css.contactList}>
      {filteredContscts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={css.contact}>
            {name}: {number}{' '}
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => hendleDeleteContact(id, name)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
