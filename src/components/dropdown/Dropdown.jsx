import TriggerButton from "../trigger-button/TriggerButton";
import SearchField from "../search-field/SearchField";
import OptionElement from "../option-element/OptionElement";

import classes from './Dropdown.module.css'

function Dropdown ({filteredOptions, selected, setSelected, term, setTerm, isActive, setIsActive, showFlags, multiselect}) {
	const toggleActive = () => {
		setIsActive(!isActive);
		setTerm('');
	};

	return (
		<div className={classes.dropdown}>
			{isActive && <div onClick={toggleActive} className={classes.cover}></div>}
			<div className={classes.label}>Язык</div>
			<TriggerButton 
				selected={selected} 
				setSelected={setSelected} 
				setIsActive={setIsActive} 
				isActive={isActive} 
				multiselect={multiselect} 
				toggleActive={toggleActive}
			/>
			{isActive && (
				<div className={classes.content}>
					<SearchField 
						term={term} 
						setTerm={setTerm} 
						isActive={isActive}
					/>
					{filteredOptions.length > 0 ? filteredOptions.map(option => (
																																				<OptionElement 
																																					key={option.id} 
																																					option={option} 
																																					selected={selected} 
																																					setSelected={setSelected} 
																																					showFlags={showFlags} 
																																					multiselect={multiselect}
																																					setIsActive={setIsActive}
																																				/>
																																			)
																													 ) : <div className={classes.notMatches}>Нет совпадений 😞</div>}
				</div>
			)}
		</div>
	)
}

export default Dropdown;