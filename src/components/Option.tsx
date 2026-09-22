import type React from "react";
import type { TransformationId } from "../functions";
import Info from "./Info";

type OptionProps = {
	label: string;
	infoSample: { original: string; result: string };
	value: TransformationId;
	checkedValue: string;
	setCheckedValue: (value: TransformationId) => void;
};

const Option: React.FC<OptionProps> = ({ label, value, checkedValue, setCheckedValue, infoSample }) => {
	const isSelected = checkedValue === value;
	return (
		<label className={`option ${isSelected ? "option--selected" : ""}`}>
			<input
				type="radio"
				name="transformation"
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
