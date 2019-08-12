import React from "react";
import Info from "./info";

const Option = props => {
  const { value, label, checkedValue, setCheckedValue, info_example } = props;

  return (
    <div>
      <label>
        <input
          type="radio"
          value={value}
          checked={checkedValue === value}
          onChange={() => setCheckedValue(value)}
        />
        <Info example={info_example} />
        {label}
      </label>
    </div>
  );
};

export default Option;
