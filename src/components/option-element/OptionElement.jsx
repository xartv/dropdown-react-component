import classes from './OptionElement.module.css';

const OptionElement = ({option, selected, setSelected, showFlags}) => {

	const onClickHandler = () => {
		if(selected === option.title) {
			setSelected('');
		} else {
			setSelected(option.title);
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
				{option.title === selected ? <img src="./svg/checked.svg" alt="checkbox"/> : <div className={classes.checkbox}></div>}
				
		</div>
	)
}

export default OptionElement;