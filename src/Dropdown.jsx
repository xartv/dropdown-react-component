import { useState, useRef, useEffect } from "react";

function Dropdown ({options, selected, setSelected}) {
	const [isActive, setIsActive] = useState(false);
	
	const btnRef = useRef();
	const contentRef = useRef();

	const onActiveToggle = () => {
		setIsActive(!isActive)
	}

	const onActiveFalse = (e) => {
		if(e.target !== btnRef.current && e.target !== contentRef.current) {
			setIsActive(false);
		}
	}
	
	useEffect(() => {
		window.addEventListener('click', onActiveFalse);

		return () => {
			window.removeEventListener('click', onActiveFalse);
		} 
	}, [])

	

	return (
		<div className="dropdown">
			<div className="label">Язык</div>
			<div ref={btnRef} className="btn" onClick={onActiveToggle}>
				{selected}
				<div class="arrow">
					<span class="arrow-left"></span>
					<span class="arrow-right"></span>
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
									<img src={option.img} alt='language'></img>
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