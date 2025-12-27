import { useEffect, useState } from "react"
import axios from "axios"
import TaskItem from "./TaskItem"
import AddTask from "./AddTask"

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/app/api/Tasks")
    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <AddTask refresh={fetchTasks} />

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            refresh={fetchTasks}
          />
        ))}
      </ul>
    </>
  )
}

export default TaskList
