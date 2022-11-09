import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form onSubmit={addTask}>
      <input
        ref={nameRef}
        id="inputName"
        type="text"
        required
        autoFocus
        placeholder="Task Name"
      />
      <input
        ref={descriptionRef}
        id="inputDescription"
        type="text"
        required
        placeholder="Task description"
      />
      <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
        <option value={LEVELS.NORMAL}>Normal</option>
        <option value={LEVELS.URGENT}>Urgent</option>
        <option value={LEVELS.BLOCKING}>Blocking</option>
      </select>
      <button type="submit">
        {length > 0 ? "Add New Task" : "Create your First Task"}
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
