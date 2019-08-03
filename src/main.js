import React, { useState, useEffect } from "react";
import TakeAction from "./functions";

const style = {
  inputText: {
    width: "500px",
    height: "250px",
    margin: "10px",
    borderRadius: "10px",
    outline: 0
  },
  outputText: {
    width: "500px",
    height: "250px",
    margin: "10px",
    borderRadius: "10px",
    background: "#fafafa",
    outline: 0
  },
  title: {
    margin: "15px 0 5px 10px"
  },
  textAreaDiv: {
    display: "flex",
    flexDirection: "horizontal"
  }
};

const Main = () => {
  const [checkedValue, setCheckedValue] = useState("");
  const [inputText, setInputText] = useState(
    "i AM a CrAzy StrINg, MAkE mE nORMal!"
  );
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    if (inputText && checkedValue) {
      const result = TakeAction({
        str: inputText,
        checkedRadioId: checkedValue
      });
      setOutputText(result);
    }
  }, [inputText, checkedValue]);

  return (
    <>
      <div style={style.textAreaDiv}>
        <div>
          <h2 style={style.title}>Enter text</h2>
          <textarea
            name="input"
            style={style.inputText}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
        </div>

        <div>
          <h2 style={style.title}>Converted text</h2>
          <textarea
            name="output"
            style={style.outputText}
            value={outputText}
            readOnly
          />
        </div>
      </div>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="upperCase"
              checked={checkedValue === "upperCase"}
              onChange={() => setCheckedValue("upperCase")}
            />
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
            />
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
            iNVERT cASE
          </label>
        </div>
      </form>
    </>
  );
};

export default Main;
