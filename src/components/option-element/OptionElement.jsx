import classes from './OptionElement.module.css';

const OptionElement = ({option, selected, setSelected, showFlags, multiselect}) => {

	const onClickHandler = () => {
		if(multiselect) {
			if(selected.includes(option.title)) {
				setSelected(selected.filter(item => item !== option.title));
			} else {
				const newSelected = [...selected];

				newSelected.push(option.title);

				setSelected(newSelected);
			}
		} else {
			if(selected === option.title) {
				setSelected('');
			} else {
				setSelected(option.title);
			}
		}
		
	}

	return (
		<div
			id={option.id} 
			className={classes.item}
			onClick={onClickHandler}
			>
				<div className={classes.wrapper}>
					{showFlags ? <img src={option.img} alt='language'/> : null}
					<div className={classes.title}>
						{option.title}
					</div>
					
				</div>
				{selected.includes(option.title) ? <img src="./svg/checked.svg" alt="checkbox"/> : <div className={classes.checkbox}></div>}
				
		</div>
	)
}

export default OptionElement;