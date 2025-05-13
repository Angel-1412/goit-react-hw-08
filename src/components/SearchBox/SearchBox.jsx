import { useSelector, useDispatch } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
