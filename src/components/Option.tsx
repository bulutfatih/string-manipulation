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
		<label className={`option-container${isSelected ? ' selected' : ''}`}>
			<input type="radio" value={value} checked={isSelected} onChange={() => setCheckedValue(value)} style={{ display: 'none' }} />
			<Info example={infoSample} />
			{label}
		</label>
	);
};

export default Option;
