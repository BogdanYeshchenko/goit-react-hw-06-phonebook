import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/phoneBook/phoneBookSlice';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');
  const contacts = useSelector(state => state.phoneBook.contacts);

  const dispatch = useDispatch();

  const handleFormEvent = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNamber(e.target.value);
        break;

      default:
        return;
    }
  };

  const onFormSabmit = e => {
    e.preventDefault();

    const contact = { id: nanoid(), name: name, number: number };
    const isNewContactNew = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const notify = () =>
      toast.warn(`${name} is already in contacts.`, {
        theme: 'dark',
      });

    isNewContactNew ? notify() : dispatch(addContacts(contact));

    setName('');
    setNamber('');
  };

  return (
    <form onSubmit={onFormSabmit} className={`${css.contactForm} form-label`}>
      <label className="form-label">
        <span>Name: </span>
        <input
          className="form-control"
          value={name}
          onChange={handleFormEvent}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="form-label">
        <span>Number: </span>
        <input
          className="form-control"
          value={number}
          onChange={handleFormEvent}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="btn btn-dark" type="submit">
        Add contact
      </button>
    </form>
  );
};
