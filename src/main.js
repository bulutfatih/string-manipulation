import React, { useState, useEffect, useRef } from "react";
import TakeAction from "./functions";
import CloseIcon from "./images/close-button.svg";
import LeftArrowIcon from "./images/left-arrow.svg";
import CopyIcon from "./images/copy.svg";
import Tooltip from "react-tooltip-lite";
import Option from "./option";

const Main = () => {
  const [checkedValue, setCheckedValue] = useState("");
  const [inputText, setInputText] = useState(
    "i AM a CrAzy StrINg, MAkE mE nORMal!"
  );
  const [outputText, setOutputText] = useState("");
  const outputTextRef = useRef(null);

  const copyToClipboard = e => {
    outputTextRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  useEffect(() => {
    if (inputText && checkedValue) {
      const result = TakeAction({
        str: inputText,
        checkedRadioId: checkedValue
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
                onChange={e => setInputText(e.target.value)}
              />
            </div>
            <div className="wrapper__right">
              <div className="wrapper__close-button">
                <Tooltip content="Clear" direction="down">
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
                  direction="down"
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
                <Tooltip content="Copy to clipboard" direction="down">
                  <img alt="" src={CopyIcon} onClick={copyToClipboard} />
                </Tooltip>
              </div>
              <div className="wrapper__transfer-button">
                <Tooltip
                  content="Transfer the result to the input"
                  direction="down"
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
          label="UPPER CASE"
          value="upperCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          info_example={{ original: "eXaMpLe TeXt", result: "EXAMPLE TEXT" }}
        />
        <Option
          label="lower case"
          value="lowerCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          info_example={{ original: "eXaMpLe TeXt", result: "example text" }}
        />

        <Option
          label="Title Case"
          value="titleCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          info_example={{ original: "eXaMpLe TeXt", result: "Example Text" }}
        />

        <Option
          label="Sentence case"
          value="sentenceCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          info_example={{ original: "eXaMpLe TeXt", result: "Example text" }}
        />

        <Option
          label="iNVERT cASE"
          value="invertCase"
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          info_example={{ original: "eXaMpLe TeXt", result: "ExAmPlE tExT" }}
        />
      </form>
    </>
  );
};

export default Main;
