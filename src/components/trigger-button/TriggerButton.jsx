import classes from './TriggerButton.module.css';

const TriggerButton = ({selected, setSelected, isActive, multiselect, toggleActive}) => {
	const chevronStyle = isActive ? `${classes.opened} ${classes.chevron}` : classes.chevron;
	let selectedContent;
	if (multiselect) { 
		selectedContent = (selected.length > 0) ? selected.map(item => (
																																<div key={item} className={classes.selected}>
																																	<span>{item}</span>
																																	<img className={classes.closeBtn} src="./svg/close.svg" alt="close" />
																																</div>
																															)) : <div className={classes.placeholder}>Выберите язык</div>;
	} else {
		selectedContent = selected ? (
																<div className={classes.selected}>
																	<span>{selected}</span>
																	<img className={classes.closeBtn} src="./svg/close.svg" alt="close" />
																</div>
															)	: <div className={classes.placeholder}>Выберите язык</div>;
	}

	const onActiveToggle = (e) => {
		if (multiselect) {
			if (e.target.classList.contains(classes.closeBtn)) {
				setSelected(selected.filter(item => item !== e.target.previousSibling.textContent));
				return;
			}
		} else {
			if (e.target.classList.contains(classes.closeBtn)) {
				setSelected('');
				return;
			}
		}
		
		toggleActive();
}

	return (
		<div className={classes.btn} onClick={onActiveToggle}>
			{selectedContent}
			<div className={chevronStyle}>
				<img src="./svg/chevron.svg" alt="chevron" />
			</div>
		</div>
	)
}

export default TriggerButton;