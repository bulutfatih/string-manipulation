import React from "react";
import Info from "./info";

const Option = (props) => {
  const { value, label, checkedValue, setCheckedValue, infoSample } = props;
  return (
    <div className="option-container">
      <label>
        <input
          type="radio"
          value={value}
          checked={checkedValue === value}
          onChange={() => setCheckedValue(value)}
        />
        <Info example={infoSample} />
        {label}
      </label>
    </div>
  );
};

export default Option;
