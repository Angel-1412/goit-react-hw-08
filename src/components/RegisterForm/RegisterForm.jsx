import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.fieldGroup}>
          <label htmlFor="name">Name</label>
          <Field
            className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <label htmlFor="email">Email</label>
          <Field
            className={css.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <label htmlFor="password">Password</label>
          <Field
            className={css.input}
            type="password"
            id="password"
            name="password"
            placeholder="Create password"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

// Обов'язково додайте default export
export default RegisterForm;
