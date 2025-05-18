import type React from "react";
import ConvertIcon from "../images/convert.svg";
import Tooltip from "./Tooltip";

type InfoTemplateProps = {
  original: string;
  result: string;
};

const InfoTemplate: React.FC<InfoTemplateProps> = ({ original, result }) => (
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

type InfoProps = {
  example: InfoTemplateProps;
};

const Info: React.FC<InfoProps> = ({ example }) => (
  <Tooltip content={<InfoTemplate {...example} />} placement="bottom">
    <i className="info-template__button">i</i>
  </Tooltip>
);

export default Info;
