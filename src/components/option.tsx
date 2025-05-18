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
	return (
		<label className="option-container">
			<input type="radio" value={value} checked={checkedValue === value} onChange={() => setCheckedValue(value)} />
			<Info example={infoSample} />
			{label}
		</label>
	);
};

export default Option;
