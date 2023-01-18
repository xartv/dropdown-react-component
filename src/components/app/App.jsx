import { useState, createContext } from "react";

import Dropdown from "../dropdown/Dropdown";
import "./App.css";

//using context
export const dataContext = createContext();

function App() {
  const [selected, setSelected] = useState([]);
  const [term, setTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState([
    { id: 1, title: "Русский", img: "./svg/rus.svg" },
    { id: 2, title: "Английский", img: "./svg/uk.svg" },
    { id: 3, title: "Испанский", img: "./svg/spain.svg" },
    { id: 4, title: "Немецкий", img: "./svg/ger.svg" },
    { id: 5, title: "Итальянский", img: "./svg/italy.svg" },
    { id: 6, title: "Польский", img: "./svg/pol.svg" },
  ]);
  const showFlags = true;
  const multiselect = true;

  const toggleActive = () => {
    setIsActive(!isActive);
    setTerm("");
  };

  // searching and filtering data
  const searchLang = (items, term) => {
    if (term.length === 0) return items;

    return items.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filteredOptions = searchLang(options, term);

  // showFlags and multiselect - custom props
  return (
    <div className="App">
      <dataContext.Provider
        value={{
          selected,
          setSelected,
          term,
          setTerm,
          isActive,
          setIsActive,
          toggleActive,
          options,
          setOptions,
          filteredOptions,
          showFlags,
          multiselect,
        }}
      >
        <Dropdown />
      </dataContext.Provider>
    </div>
  );
}

export default App;
