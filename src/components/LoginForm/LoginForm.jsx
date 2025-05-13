import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
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
            placeholder="Enter password"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>

        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
