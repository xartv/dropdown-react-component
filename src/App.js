import { useState } from 'react';

import Dropdown from './Dropdown';

import './App.css';

function App() {
	const [selected, setSelected] = useState('');
	const options = [
		{id: 1, title: 'Русский', img: './svg/rus.svg', isChecked: false},
		{id: 2, title: 'Английский', img: './svg/uk.svg'},
		{id: 3, title: 'Испанский', img: './svg/spain.svg'},
		{id: 4, title: 'Немецкий', img: './svg/ger.svg'},
		{id: 5, title: 'Итальянский', img: './svg/italy.svg'},
		{id: 6, title: 'Польский', img: './svg/pol.svg'},
	]

  return (
    <div className="App">
      <Dropdown options={options} selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
