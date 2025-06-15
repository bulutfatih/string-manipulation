import type React from "react";
import ConvertIcon from "../images/convert.svg";
import Tooltip from "./Tooltip";

type InfoTemplateProps = {
	original: string;
	result: string;
};

const InfoTemplate: React.FC<InfoTemplateProps> = ({ original, result }) => (
	<div className="info__template">
		<div className="info__template-left">
			<span className="info__template-text">{original}</span>
		</div>
		<div className="info__template-middle">
			<img className="info__template-icon" alt="" src={ConvertIcon} />
		</div>
		<div className="info__template-right">
			<span className="info__template-text">{result}</span>
		</div>
	</div>
);

type InfoProps = {
	example: InfoTemplateProps;
};

const Info: React.FC<InfoProps> = ({ example }) => (
	<Tooltip content={<InfoTemplate {...example} />} placement="bottom">
		<i className="info__button">i</i>
	</Tooltip>
);

export default Info;
