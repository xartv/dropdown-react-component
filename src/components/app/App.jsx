import { useState } from "react";

import Dropdown from "../dropdown/Dropdown";
import "./App.css";

function App() {
  // all data is here and drilled down in <Dropdown/>
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
      <Dropdown
        filteredOptions={filteredOptions}
        setOptions={setOptions}
        selected={selected}
        setSelected={setSelected}
        term={term}
        setTerm={setTerm}
        isActive={isActive}
        setIsActive={setIsActive}
        showFlags={true}
        multiselect={true}
      />
    </div>
  );
}

export default App;
