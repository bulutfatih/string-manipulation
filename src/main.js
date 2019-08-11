import React, { useState, useEffect, useRef } from "react";
import TakeAction from "./functions";
import CloseIcon from "./close-button.svg";
import LeftArrowIcon from "./left-arrow.svg";
import CopyIcon from "./copy.svg";

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
                <img alt="" src={CloseIcon} onClick={() => setInputText("")} />
              </div>
              <div className="wrapper__transfer-button">
                <img
                  alt=""
                  src={LeftArrowIcon}
                  onClick={() => setInputText(outputText)}
                />
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
                <img alt="" src={CopyIcon} onClick={copyToClipboard} />
              </div>
              <div className="wrapper__transfer-button">
                <img
                  alt=""
                  src={LeftArrowIcon}
                  onClick={() => setInputText(outputText)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="options-form">
        <div>
          <label>
            <input
              type="radio"
              value="upperCase"
              checked={checkedValue === "upperCase"}
              onChange={() => setCheckedValue("upperCase")}
            />
            <button className="info-button" disabled>
              ?
            </button>
            UPPER CASE
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="lowerCase"
              checked={checkedValue === "lowerCase"}
              onChange={() => setCheckedValue("lowerCase")}
              placeholder="place holder"
            />
            <button className="info-button" disabled>
              ?
            </button>
            lower case
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="titleCase"
              checked={checkedValue === "titleCase"}
              onChange={() => setCheckedValue("titleCase")}
            />
            <button className="info-button" disabled>
              ?
            </button>
            Title Case
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="sentenceCase"
              checked={checkedValue === "sentenceCase"}
              onChange={() => setCheckedValue("sentenceCase")}
            />
            <button className="info-button" disabled>
              ?
            </button>
            Sentence case
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="invertCase"
              checked={checkedValue === "invertCase"}
              onChange={() => setCheckedValue("invertCase")}
            />
            <button className="info-button" disabled>
              ?
            </button>
            iNVERT cASE
          </label>
        </div>
      </form>
    </>
  );
};

export default Main;
