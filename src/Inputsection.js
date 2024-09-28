import React from "react";

const Inputsection = ({value,onChange}) => {
  return (
    <>
      {" "}
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Inputsection;
