import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
