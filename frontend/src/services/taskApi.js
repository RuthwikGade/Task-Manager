import axios from "axios"

const API = "http://localhost:5000/app/api"

export const getTasks = () => axios.get(`${API}/Tasks`)
export const addTask = (data) => axios.post(`${API}/Add`, data)
export const updateTask = (id, data) =>
  axios.patch(`${API}/update/${id}`, data)
export const deleteTask = (id) =>
  axios.delete(`${API}/delete/${id}`)
