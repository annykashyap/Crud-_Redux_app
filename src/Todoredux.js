import React, { useContext } from "react";
import Buttonsection from "./Buttonsection";
import Inputsection from "./Inputsection";
import Addbtn from "./Addbtn";
import Updateinputsection from "./Updateinputsection";
import { TodoContext } from "./Contextprovider";

const Todoredux = () => {
  // const [task, settask] = useState([]);

  // State to manage input field data
  // const [tdata, setdata] = useState("");
  // State to track the index of the task being updated
  // const [updateIndex, setUpdateIndex] = useState(null);
  // State to track the updated value
  // const [updateValue, setUpdateValue] = useState("");

  // Handle adding new tasks
  // const handleChange = (e) => {
  // e.preventDefault();  Prevent default form submission behavior

  // Update the task list and clear the input
  // settask((prevtask) => [...prevtask, tdata]);
  // setdata(""); Clear the input field
  // };
  // const handleDelete = (value) => {
  //   const updatedata = task.filter((curtask) => curtask !== value);
  //   settask(updatedata);
  // };
  // Handle updating tasks
  // const handleUpdate = (index) => {
  // setUpdateIndex(index); Set the index of the task to be updated
  // setUpdateValue(task[index]);  Set the current value of the task in the update input field
  // };

  // Save the updated task
  //const saveUpdate = (index) => {
  // const updatedTasks = [...task];  Create a copy of the current tasks
  // updatedTasks[index] = updateValue;  Update the specific task
  //settask(updatedTasks);  Set the new state with the updated tasks
  // setUpdateIndex(null); Clear the update index to exit update mode
  //setUpdateValue(""); Clear the update value
  // };
  const {
    task,
    tdata,
    updateIndex,
    updateValue,
    setdata,
    setUpdateValue,
    handleChange,
    handleDelete,
    handleUpdate,
    saveUpdate,
  } = useContext(TodoContext); // Use the context
  return (
    <>
      <div>
        <Inputsection value={tdata} onChange={(e) => setdata(e.target.value)} />
        <Addbtn onChange={handleChange} />
      </div>
      <div>
        <ul>
          {task.map((printdata, index) => (
            <li key={index}>
              {updateIndex === index ? (
                <>
                  <Updateinputsection
                    type="text"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                  />
                  <button onClick={() => saveUpdate(index)}>Save</button>
                </>
              ) : (
                <>
                  <span>{printdata}</span>
                  <Buttonsection
                    onDelete={() => handleDelete(printdata)}
                    onUpdate={() => handleUpdate(index)}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todoredux;
