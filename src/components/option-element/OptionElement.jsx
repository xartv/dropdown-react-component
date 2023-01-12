import classes from './OptionElement.module.css';

const OptionElement = ({option, setIsActive, selected, setSelected, showFlags, multiselect}) => {
  let checkbox;

  // customize checkbox display
  if (multiselect) {
    checkbox = selected.includes(option.title) ? <img src="./svg/checked.svg" alt="checkbox"/> : <div className={classes.checkbox}></div>
  } else {
    checkbox = null;
  }

  // depending on the multiselect prop we working with array or string at state
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
      setIsActive(false);
    }
  }

  // depending on the showFlags prop img is showed or hided
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
      {checkbox}
    </div>
  )
}

export default OptionElement;