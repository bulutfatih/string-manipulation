import type React from "react";
import Info from "./info";

type OptionProps = {
	label: string;
	value: string;
	checkedValue: string;
	setCheckedValue: (value: string) => void;
	infoSample: { original: string; result: string };
};

const Option: React.FC<OptionProps> = ({ label, value, checkedValue, setCheckedValue, infoSample }) => {
	return (
		<div className="option-container">
			<label>
				<input type="radio" value={value} checked={checkedValue === value} onChange={() => setCheckedValue(value)} />
				<Info example={infoSample} />
				{label}
			</label>
		</div>
	);
};

export default Option;
