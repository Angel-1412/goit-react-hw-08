import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
