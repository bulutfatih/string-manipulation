import { useEffect, useRef, useState } from "react";
import getFunction, { type TransformationId, transformations } from "../functions";
import CloseIcon from "../images/close-button.svg";
import CopyIcon from "../images/copy.png";
import GitHubIcon from "../images/github.png";
import LeftArrowIcon from "../images/left-arrow.svg";
import PasteIcon from "../images/paste.png";
import Button from "./Button";
import Option from "./Option";

const SAMPLE_INPUT = "i AM a CrAzy StrINg, MAkE mE nORMal!";

const Main = () => {
	const [selectedFunction, setSelectedFunction] = useState<TransformationId | "">("");
	const [input, setInput] = useState(SAMPLE_INPUT);
	const [notification, setNotification] = useState("");
	const notificationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const outputRef = useRef<HTMLTextAreaElement>(null);
	const output = selectedFunction && input ? getFunction(selectedFunction, input) : "";

	useEffect(() => () => clearTimeout(notificationTimer.current), []);

	const notify = (message: string) => {
		clearTimeout(notificationTimer.current);
		setNotification(message);
		notificationTimer.current = setTimeout(() => setNotification(""), 2000);
	};

	const copyToClipboard = async () => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(output);
			} else if (outputRef.current) {
				outputRef.current.select();
				if (!document.execCommand("copy")) throw new Error("Copy was rejected");
				outputRef.current.setSelectionRange(0, 0);
			} else {
				throw new Error("Output is unavailable");
			}
			notify("✓ Copied to clipboard!");
		} catch {
			notify("Could not copy text");
		}
	};

	const pasteFromClipboard = async () => {
		try {
			setInput(await navigator.clipboard.readText());
		} catch {
			notify("Could not paste text");
		}
	};

	return (
		<div className="main">
			{notification && (
				<div className="notification" role="status">
					{notification}
				</div>
			)}
			<div className="outer-container">
				<div className="inner-container">
					<label className="title" htmlFor="original-text">
						Original text
					</label>
					<div className="wrapper">
						<div className="wrapper__left">
							<textarea
								id="original-text"
								className="wrapper__textarea"
								value={input}
								onChange={(event) => setInput(event.target.value)}
							/>
						</div>
						<div className="wrapper__right">
							<Button tooltip="Clear" className="wrapper__close-button" onClick={() => setInput("")}>
								<img className="button__icon" alt="" src={CloseIcon} />
							</Button>
							<Button tooltip="Paste" className="wrapper__paste-button" onClick={pasteFromClipboard}>
								<img className="button__icon" alt="" src={PasteIcon} />
							</Button>
						</div>
					</div>
				</div>
				<div className="inner-container">
					<label className="title" htmlFor="converted-text">
						Converted text
					</label>
					<div className="wrapper">
						<div className="wrapper__left gray-bg">
							<textarea
								id="converted-text"
								className="wrapper__textarea gray-bg"
								value={output}
								ref={outputRef}
								readOnly
							/>
						</div>
						<div className="wrapper__right">
							<Button
								tooltip="Transfer the result to the input"
								className="wrapper__transfer-button"
								onClick={() => setInput(output)}
							>
								<img className="button__icon" alt="" src={LeftArrowIcon} />
							</Button>
							<Button tooltip="Copy" className="wrapper__copy-button" onClick={copyToClipboard}>
								<img className="button__icon" alt="" src={CopyIcon} />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<fieldset className="options">
				<legend className="visually-hidden">Choose a text transformation</legend>
				{transformations.map(({ id, label, example }) => (
					<Option
						key={id}
						label={label}
						value={id}
						checkedValue={selectedFunction}
						setCheckedValue={setSelectedFunction}
						infoSample={example}
					/>
				))}
			</fieldset>
			<div className="github">
				<a
					href="https://github.com/bulutfatih/string-manipulation"
					target="_blank"
					rel="noreferrer"
					aria-label="View project on GitHub"
				>
					<img className="github__icon" alt="" src={GitHubIcon} />
				</a>
			</div>
		</div>
	);
};

export default Main;
