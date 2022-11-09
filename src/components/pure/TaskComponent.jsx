import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import { BsToggleOff, BsToggleOn, BsTrash } from "react-icons/bs";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**
   * Function that returns a Badge
   * depending on the level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  /**
   * Function that returns icon depending on completion of the task
   */

  const taskCompletedIcon = () =>
    task.completed ? (
      <BsToggleOn
        className="task-action"
        onClick={() => complete(task)}
        style={{ color: "green" }}
      />
    ) : (
      <BsToggleOff
        className="task-action"
        onClick={() => complete(task)}
        style={{ color: "grey" }}
      />
    );

  return (
    <tr>
      <th>
        <span>{task.name}</span>
      </th>
      <td>
        <span>{task.description}</span>
      </td>
      <td>
        {/* Execution of function to return badge element */}
        {taskLevelBadge()}
      </td>
      <td>
        {/* Execution of function to return icon depending on completion */}
        {taskCompletedIcon()}
        <BsTrash
          className="task-action"
          onClick={() => remove(task)}
          style={{ color: "red" }}
        />
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
