import { useState } from 'react';

import Dropdown from '../dropdown/Dropdown';

import './App.css';

function App() {
	const [selected, setSelected] = useState('');
	const [term, setTerm] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [options, setOptions] = useState([
		{id: 1, title: 'Русский', img: './svg/rus.svg', isSelected: false},
		{id: 2, title: 'Английский', img: './svg/uk.svg', isSelected: false},
		{id: 3, title: 'Испанский', img: './svg/spain.svg', isSelected: false},
		{id: 4, title: 'Немецкий', img: './svg/ger.svg', isSelected: false},
		{id: 5, title: 'Итальянский', img: './svg/italy.svg', isSelected: false},
		{id: 6, title: 'Польский', img: './svg/pol.svg', isSelected: false},
	]);

	const searchLang = (items, term) => {
		if (term.length === 0) return items;

		return items.filter(item => item.title.includes(term));
	}

	const filteredOptions = searchLang(options, term);

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
				/>
    </div>
  );
}

export default App;
