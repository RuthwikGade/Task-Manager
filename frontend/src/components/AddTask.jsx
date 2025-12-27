import { useState } from "react"
import axios from "axios"

const AddTask = ({ refresh }) => {
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!description.trim()) return

    try {
      await axios.post("http://localhost:5000/app/api/Add", {
        description
      })

      setDescription("")
      refresh() 
    } catch (error) {
      console.error("Add error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
