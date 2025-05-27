import type React from "react";
import { useEffect, useRef, useState } from "react";

import getFunction from "../functions";
import Option from "./Option";
import Button from "./Button";

import CloseIcon from "../images/close-button.svg";
import CopyIcon from "../images/copy.svg";
import GitHubIcon from "../images/github.png";
import LeftArrowIcon from "../images/left-arrow.svg";

const SAMPLE_INPUT = "i AM a CrAzy StrINg, MAkE mE nORMal!";

const Main: React.FC = () => {
	const [selectedFunction, setSelectedFunction] = useState<string>("");
	const [input, setInput] = useState<string>(SAMPLE_INPUT);
	const [output, setOutput] = useState<string>("");
	const [showNotification, setShowNotification] = useState<boolean>(false);
	const outputRef = useRef<HTMLTextAreaElement>(null);

	const copyToClipboard = (e: React.MouseEvent) => {
		if (outputRef.current) {
			outputRef.current.select();
			document.execCommand("copy");
			window.getSelection()?.removeAllRanges();
			
			// Show notification
			setShowNotification(true);
			setTimeout(() => {
				setShowNotification(false);
			}, 2000);
		}
	};

	useEffect(() => {
		if (input && selectedFunction) {
			const result = getFunction(selectedFunction, input);
			setOutput(result);
		} else setOutput("");
	}, [input, selectedFunction]);

	return (
		<div className="main">
			{showNotification && (
				<div className="notification">
					✓ Copied to clipboard!
				</div>
			)}
			
			<div className="outer-container">
				<div className="inner-container">
					<span className="title">Original text</span>
					<div className="wrapper">
						<div className="wrapper__left">
							<textarea className="wrapper__textarea" value={input} onChange={(e) => setInput(e.target.value)} />
						</div>
						<div className="wrapper__right">
							<Button 
								tooltip="Clear" 
								className="wrapper__close-button" 
								onClick={() => setInput("")}
							>
								<img alt="" src={CloseIcon} />
							</Button>
							<Button
								tooltip="Transfer the result to the input"
								className="wrapper__transfer-button"
								onClick={() => setInput(output)}
							>
								<img alt="" src={LeftArrowIcon} />
							</Button>
						</div>
					</div>
				</div>

				<div className="inner-container">
					<span className="title">Converted text</span>
					<div className="wrapper">
						<div className="wrapper__left gray-bg">
							<textarea className="wrapper__textarea gray-bg" value={output} ref={outputRef} readOnly />
						</div>
						<div className="wrapper__right">
							<Button 
								tooltip="Copy to clipboard" 
								className="wrapper__copy-button" 
								onClick={copyToClipboard}
							>
								<img alt="" src={CopyIcon} />
							</Button>
							<Button
								tooltip="Transfer the result to the input"
								className="wrapper__transfer-button"
								onClick={() => setInput(output)}
							>
								<img alt="" src={LeftArrowIcon} />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<form className="options-form">
				<Option
					label="Upper case"
					value="upperCase"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "eXaMpLe TeXt", result: "EXAMPLE TEXT" }}
				/>

				<Option
					label="Lower case"
					value="lowerCase"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "eXaMpLe TeXt", result: "example text" }}
				/>

				<Option
					label="Title case"
					value="titleCase"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "eXaMpLe TeXt", result: "Example Text" }}
				/>

				<Option
					label="Sentence case"
					value="sentenceCase"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "eXaMpLe TeXt", result: "Example text" }}
				/>

				<Option
					label="Invert case"
					value="invertCase"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "eXaMpLe TeXt", result: "ExAmPlE tExT" }}
				/>

				<Option
					label="Point to comma"
					value="pointToComma"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "12.345", result: "12,345" }}
				/>

				<Option
					label="Comma to point"
					value="commaToPoint"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "12,345", result: "12.345" }}
				/>

				<Option
					label="Remove numbers"
					value="removeNumbers"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "Example1234Text", result: "ExampleText" }}
				/>

				<Option
					label="Remove non-numbers"
					value="removeNonNumeric"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{
						original: "+(48) 123-456-789",
						result: "48123456789",
					}}
				/>

				<Option
					label="Remove spaces"
					value="removeSpaces"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "E x amp le", result: "Example" }}
				/>

				<Option
					label="Reverse text"
					value="reverseText"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "Example", result: "elpmaxE" }}
				/>

				<Option
					label="Remove duplicate words (divided by comma)"
					value="removeDuplicateWordsDividedByComma"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{ original: "a,b,b,c,d,d", result: "a,b,c,d" }}
				/>

				<Option
					label="Remove duplicate lines"
					value="removeDuplicateLines"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{
						original: "example\nexample\ntext",
						result: "example\ntext",
					}}
				/>

				<Option
					label="Single line to multiple lines"
					value="toMultipleLines"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{
						original: "example, text",
						result: "example\ntext",
					}}
				/>

				<Option
					label="Multiple lines to single line"
					value="toSingleLine"
					checkedValue={selectedFunction}
					setCheckedValue={setSelectedFunction}
					infoSample={{
						original: "example\ntext",
						result: "example, text",
					}}
				/>
			</form>
			<div className="github">
				<a href="https://github.com/bulutfatih/string-manipulation" target="_blank" rel="noreferrer">
					<img alt="" src={GitHubIcon} />
				</a>
			</div>
		</div>
	);
};

export default Main;
