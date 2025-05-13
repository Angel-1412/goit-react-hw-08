import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.fieldGroup}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <Field
            className={css.input}
            type="tel"
            name="number"
            placeholder="Phone number"
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
