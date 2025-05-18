import React from "react";
import Tooltip from "./Tooltip";

import ConvertIcon from "../images/convert.svg";

const InfoTemplate = (example) => {
  const { original, result } = example;
  return (
    <div className="info-template__inner-container">
      <div className="left">
        <span>{original}</span>
      </div>
      <div className="middle">
        <img alt="" src={ConvertIcon} />
      </div>
      <div className="right">
        <span>{result}</span>
      </div>
    </div>
  );
};

const Info = (props) => {
  const { example } = props;
  return (
    <div className="info-template__container">
      <Tooltip content={InfoTemplate(example)} placement="bottom">
        <button className="info-template__button" disabled>
          i
        </button>
      </Tooltip>
    </div>
  );
};

export default Info;
