// TodoContext.js
import React, { createContext, useState } from "react";

// Create a context for the Todo state
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [task, settask] = useState([]);
  const [tdata, setdata] = useState("");
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateValue, setUpdateValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    settask((prevtask) => [...prevtask, tdata]);
    setdata("");
  };

  const handleDelete = (value) => {
    const updatedata = task.filter((curtask) => curtask !== value);
    settask(updatedata);
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setUpdateValue(task[index]);
  };

  const saveUpdate = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index] = updateValue;
    settask(updatedTasks);
    setUpdateIndex(null);
    setUpdateValue("");
  };

  return (
    <TodoContext.Provider
      value={{
        task,
        tdata,
        updateIndex,
        updateValue,
        settask,
        setdata,
        setUpdateIndex,
        setUpdateValue,
        handleChange,
        handleDelete,
        handleUpdate,
        saveUpdate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
