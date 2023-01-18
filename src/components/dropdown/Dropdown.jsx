import { useContext } from "react";

import TriggerButton from "../trigger-button/TriggerButton";
import SearchField from "../search-field/SearchField";
import OptionElement from "../option-element/OptionElement";
import { dataContext } from "../app/App";

import classes from "./Dropdown.module.css";

function Dropdown() {
  const { isActive, filteredOptions, toggleActive } = useContext(dataContext);

  return (
    <div className={classes.dropdown}>
      {isActive && <div onClick={toggleActive} className={classes.cover}></div>}
      <div className={classes.label}>Язык</div>
      <TriggerButton />
      {isActive && (
        <div className={classes.content}>
          <SearchField />
          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <OptionElement key={option.id} option={option} />
            ))
          ) : (
            <div className={classes.notMatches}>Нет совпадений 😞</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
