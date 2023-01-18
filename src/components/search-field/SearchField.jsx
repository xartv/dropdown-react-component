import classes from "./SearchField.module.css";

const SearchField = ({ term, setTerm }) => {
  const onChangeHandler = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div className={classes.searchField}>
      <img src="./svg/search.svg" alt="search" />
      <input
        type="text"
        placeholder="Поиск"
        value={term}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchField;