import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";
import TaskForm from "../pure/forms/TaskForm";

const TaskList = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  useEffect(() => {
    console.log("Task State has been modified");
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log("Detele this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("Detele this Task:", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h5>Your Tasks:</h5>
      <div data-mdb-perfect-scrollbar="true">
        {/* TODO: Add Loading Spinner */}
        <Table />
      </div>
      <TaskForm add={addTask} length={tasks.length} />
    </>
  );
};

export default TaskList;
