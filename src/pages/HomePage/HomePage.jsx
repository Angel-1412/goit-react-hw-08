import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook App</h1>
      <p className={css.text}>Please register or log in to use the app</p>
    </div>
  );
}
