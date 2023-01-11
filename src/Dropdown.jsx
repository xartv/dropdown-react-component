import { useState, useRef, useEffect } from "react";

function Dropdown ({options, selected, setSelected}) {
	const [isActive, setIsActive] = useState(false);
	const btnRef = useRef();
	const contentRef = useRef();

	const chevronStyle = isActive ? 'chevron opened' : 'chevron';

	useEffect(() => {
		window.addEventListener('click', onActiveFalse);

		return () => {
			window.removeEventListener('click', onActiveFalse);
		} 
	}, [])

	const onActiveToggle = () => {
		setIsActive(!isActive)
	}

	const onActiveFalse = (e) => {
		if(e.target !== btnRef.current && e.target !== contentRef.current) {
			console.log(e.target.classList)
			setIsActive(false);
		}
	}

	const selectedContent = selected ? <div className="selected">
																				{selected}
																				<img src="./svg/close.svg" alt="close" />
																		 </div> 
																		 : null;

	return (
		<div className="dropdown">
			<div className="label">Язык</div>
			<div ref={btnRef} className="btn" onClick={onActiveToggle}>
					{selectedContent}
				<div className={chevronStyle}>
					<img src="./svg/chevron.svg" alt="chevron" />
				</div>
			
			</div>
			{isActive && (
				<div ref={contentRef} className="content">
					{options.map(option => (
						<div
							key={option.id} 
							className="item"
							onClick={() => {
								setSelected(option.title);
								setIsActive(false);
							}}
							>
								<div className="wrapper">
									<img src={option.img} alt='language'/>
									{option.title}
								</div>
								<div className="checkbox"></div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown;