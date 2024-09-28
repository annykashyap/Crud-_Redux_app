import React from "react";

const Buttonsection = ({onDelete,onUpdate}) => {

  return (
    <>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
    </>
  );
};

export default Buttonsection;
