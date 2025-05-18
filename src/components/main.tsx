import type React from "react";
import { useEffect, useRef, useState } from "react";

import TakeAction from "../functions";
import Tooltip from "./Tooltip";
import Option from "./Option";

import CloseIcon from "../images/close-button.svg";
import CopyIcon from "../images/copy.svg";
import GitHubIcon from "../images/github.png";
import LeftArrowIcon from "../images/left-arrow.svg";

const SAMPLE_INPUT = "i AM a CrAzy StrINg, MAkE mE nORMal!";

const Main: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState<string>("");
  const [inputText, setInputText] = useState<string>(SAMPLE_INPUT);
  const [outputText, setOutputText] = useState<string>("");
  const outputTextRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = (e: React.MouseEvent<HTMLImageElement>) => {
    if (outputTextRef.current) {
      outputTextRef.current.select();
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
  };

  useEffect(() => {
    if (inputText && checkedValue) {
      const result = TakeAction({
        str: inputText,
        checkedRadioId: checkedValue,
      });
      setOutputText(result);
    } else setOutputText("");
  }, [inputText, checkedValue]);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <span className="title">Original text</span>
          <div className="wrapper">
            <div className="wrapper__left">
              <textarea
                className="wrapper__textarea"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="wrapper__right">
              <div className="wrapper__close-button">
                <Tooltip content="Clear" placement="bottom">
                  <img
                    alt=""
                    src={CloseIcon}
                    onClick={() => setInputText("")}
                  />
                </Tooltip>
              </div>
              <div className="wrapper__transfer-button">
                <Tooltip
                  content="Transfer the result to the input"
                  placement="bottom"
                >
                  <img
                    alt=""
                    src={LeftArrowIcon}
                    onClick={() => setInputText(outputText)}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <span className="title">Converted text</span>
          <div className="wrapper">
            <div className="wrapper__left gray-bg">
              <textarea
                className="wrapper__textarea gray-bg"
                value={outputText}
                ref={outputTextRef}
                readOnly
              />
            </div>
            <div className="wrapper__right">
              <div className="wrapper__copy-button">
                <Tooltip content="Copy to clipboard" placement="bottom">
                  <img alt="" src={CopyIcon} onClick={copyToClipboard} />
                </Tooltip>
              </div>
              <div className="wrapper__transfer-button">
                <Tooltip
                  content="Transfer the result to the input"
                  placement="bottom"
                >
                  <img
                    alt=""
                    src={LeftArrowIcon}
                    onClick={() => setInputText(outputText)}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="options-form">
        <Option
          label="Upper case"
          value="upperCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "eXaMpLe TeXt", result: "EXAMPLE TEXT" }}
        />

        <Option
          label="Lower case"
          value="lowerCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "eXaMpLe TeXt", result: "example text" }}
        />

        <Option
          label="Title case"
          value="titleCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "eXaMpLe TeXt", result: "Example Text" }}
        />

        <Option
          label="Sentence case"
          value="sentenceCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "eXaMpLe TeXt", result: "Example text" }}
        />

        <Option
          label="Invert case"
          value="invertCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "eXaMpLe TeXt", result: "ExAmPlE tExT" }}
        />

        <Option
          label="Point to comma"
          value="pointToComma"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "12.345", result: "12,345" }}
        />

        <Option
          label="Comma to point"
          value="commaToPoint"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "12,345", result: "12.345" }}
        />

        <Option
          label="Remove numbers"
          value="removeNumbers"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "Example1234Text", result: "ExampleText" }}
        />

        <Option
          label="Remove non-numbers"
          value="removeNonNumeric"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{
            original: "+(48) 123-456-789",
            result: "48123456789",
          }}
        />

        <Option
          label="Remove spaces"
          value="removeSpaces"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "E x amp le", result: "Example" }}
        />

        <Option
          label="Reverse text"
          value="reverseText"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "Example", result: "elpmaxE" }}
        />

        <Option
          label="Remove duplicate words (divided by comma)"
          value="removeDuplicateWordsDividedByComma"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{ original: "a,b,b,c,d,d", result: "a,b,c,d" }}
        />

        <Option
          label="Remove duplicate lines"
          value="removeDuplicateLines"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{
            original: "example\nexample\ntext",
            result: "example\ntext",
          }}
        />

        <Option
          label="Single line to multiple lines"
          value="toMultipleLines"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{
            original: "example, text",
            result: "example\ntext",
          }}
        />

        <Option
          label="Multiple lines to single line"
          value="toSingleLine"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          infoSample={{
            original: "example\ntext",
            result: "example, text",
          }}
        />
      </form>
      <div className="github">
        <a
          href="https://github.com/bulutfatih/string-manipulation"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={GitHubIcon} />
        </a>
      </div>
    </>
  );
};

export default Main;
