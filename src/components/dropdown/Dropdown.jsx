import TriggerButton from "../trigger-button/TriggerButton";
import SearchField from "../search-field/SearchField";
import OptionElement from "../option-element/OptionElement";

import classes from './Dropdown.module.css'

function Dropdown ({filteredOptions, selected, setSelected, term, setTerm, isActive, setIsActive, showFlags}) {

	return (
		<div className={classes.dropdown}>
			{isActive && <div onClick={() => setIsActive(!isActive)} className={classes.cover}></div>}
			<div className={classes.label}>Язык</div>
			<TriggerButton selected={selected} setSelected={setSelected} setIsActive={setIsActive} isActive={isActive}/>
			{isActive && (
				<div className={classes.content}>
					<SearchField term={term} setTerm={setTerm}/>
					{filteredOptions.map(option => (
						<OptionElement key={option.id} option={option} selected={selected} setSelected={setSelected} showFlags={showFlags}/>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown;