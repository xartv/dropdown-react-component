import { useRef } from "react";

function Dropdown ({filteredOptions, selected, setSelected, term, setTerm, isActive, setIsActive}) {
	const btnRef = useRef();
	const contentRef = useRef();

	const chevronStyle = isActive ? 'chevron opened' : 'chevron';

	const onActiveToggle = (e) => {
		if (e.target.classList.contains('closeBtn')) {
			setSelected('');
			return;
		}

		setIsActive(!isActive);
	}

	const selectedContent = selected ? <div className="selected">
																				<span>{selected}</span>
																					<img className="closeBtn" src="./svg/close.svg" alt="close" />
																		 </div> 
																		 : null;

	return (
		<div className="dropdown">
			{isActive && <div onClick={onActiveToggle} className="cover"></div>}
			<div className="label">Язык</div>
			<div ref={btnRef} className="btn" onClick={onActiveToggle}>
					{selectedContent}
				<div className={chevronStyle}>
					<img src="./svg/chevron.svg" alt="chevron" />
				</div>
			
			</div>
			{isActive && (
				<div ref={contentRef} className="content">
					<div className="searchField">
						<img src="./svg/search.svg" alt="search"/>
						<input type="text" placeholder="Поиск" value={term} onChange={(e) => setTerm(e.target.value)}/>
					</div>
					{filteredOptions.map(option => (
						<div
							key={option.id}
							id={option.id} 
							className="item"
							onClick={(e) => {
								if(selected === option.title) {
									setSelected('');
								} else {
									setSelected(option.title);
								}
							}}
							>
								<div className="wrapper">
									<img src={option.img} alt='language'/>
									<div className="title">
										{option.title}
									</div>
									
								</div>
								{option.title === selected ? <img src="./svg/checked.svg" alt="checkbox"/> : <div className="checkbox"></div>}
								
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown;