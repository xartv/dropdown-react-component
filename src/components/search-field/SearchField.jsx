import classes from './SearchField.module.css';

const SearchField = ({term, setTerm}) => {
	return (
		<div className={classes.searchField}>
			<img src="./svg/search.svg" alt="search"/>
			<input type="text" placeholder="Поиск" value={term} onChange={(e) => setTerm(e.target.value)}/>
		</div>
	)
}

export default SearchField;