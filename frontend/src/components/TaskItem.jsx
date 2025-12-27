import { deleteTask, updateTask } from "../services/taskApi"

const TaskItem = ({ task, refresh }) => {
  const toggleComplete = async () => {
    await updateTask(task._id, { completed: !task.completed })
    refresh()
  }

  const removeTask = async () => {
    await deleteTask(task._id)
    refresh()
  }

  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={toggleComplete}>
        {task.description}
      </span>

      {}
      <button className="delete-btn" onClick={removeTask}>
        Delete
      </button>
    </li>
  )
}

export default TaskItem
