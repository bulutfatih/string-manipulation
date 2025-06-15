import type React from "react";
import Info from "./Info";

type OptionProps = {
	label: string;
	infoSample: { original: string; result: string };
	value: string;
	checkedValue: string;
	setCheckedValue: (value: string) => void;
};

const Option: React.FC<OptionProps> = ({ label, value, checkedValue, setCheckedValue, infoSample }) => {
	const isSelected = checkedValue === value;
	return (
		<label className={`option ${isSelected ? 'option--selected' : ''}`}>
			<input 
				type="radio" 
				className="option__input" 
				value={value} 
				checked={isSelected} 
				onChange={() => setCheckedValue(value)} 
			/>
			<div className="option__info">
				<Info example={infoSample} />
			</div>
			<span className="option__label">{label}</span>
		</label>
	);
};

export default Option;
