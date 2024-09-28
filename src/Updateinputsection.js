import React from "react";

const Updateinputsection = ({ value, onChange,onSavebtn }) => {
  return (
    <>
      {" "}
      <input type="text" value={value} onChange={onChange} />
      {/* <button onClick={onSavebtn}>Save</button> */}
    </>
  );
};

export default Updateinputsection;
