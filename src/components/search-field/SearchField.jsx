import { useContext } from "react";

import { dataContext } from "../app/App";

import classes from "./SearchField.module.css";

const SearchField = () => {
  const { term, setTerm } = useContext(dataContext);

  const onChangeHandler = e => {
    setTerm(e.target.value);
  };

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
