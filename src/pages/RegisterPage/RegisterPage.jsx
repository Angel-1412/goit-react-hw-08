import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
