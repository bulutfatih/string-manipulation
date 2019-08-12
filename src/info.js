import React from "react";

const Info = props => {
  const { example } = props;
  // there will be a tooltip that shows original and result
  return (
    <>
      <button className="info-button" disabled>
        ?
      </button>
    </>
  );
};

export default Info;
