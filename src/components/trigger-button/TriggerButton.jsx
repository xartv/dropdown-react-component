import classes from './TriggerButton.module.css';

const TriggerButton = ({selected, setSelected, isActive, setIsActive}) => {
	const chevronStyle = isActive ? `${classes.opened} ${classes.chevron}` : classes.chevron;
	const selectedContent = selected ? 
														<div className={classes.selected}>
															<span>{selected}</span>
															<img className={classes.closeBtn} src="./svg/close.svg" alt="close" />
														</div> : null;

	const onActiveToggle = (e) => {
		if (e.target.classList.contains(classes.closeBtn)) {
			setSelected('');
			return;
		}

		setIsActive(!isActive);
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