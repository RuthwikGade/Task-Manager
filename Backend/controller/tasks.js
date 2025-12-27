const tasks = require('../model/Task')
const getAllTasks = async (req,res)=>{
    try {
        const tas =await tasks.find()
        res.status(200).json(tas);
    }
    catch (error){
        console.log("Error in Roding All Tasks",error);
        res.status(500).json({error : error.message})
    }
}

const AddTask = async (req,res) =>{
    try {
        await tasks.create(req.body);
       res.status(201).json({message : "Sucess"})
    }
    catch(error){
        console.log("Error in Insertin the Task",error)
        res.status(400).json({error : error.message})
    }
}

const getTask = async (req,res) =>{
    const {id} = req.params;
    try {
        const obj = await tasks.findById(id);
        if(!obj){
            return res.status(404).json({message : "Task Not Found"})
        }
        res.status(200).json(obj);
    }
    catch (error){
        res.status(404).json({message : "Invalid Id",error : error.message})
    }
}

const UpdateTask = async (req,res) =>{
     try {    
    const updatedTask = await tasks.findByIdAndUpdate(
      req.params.id,
      req.body,                      
      { new: true, runValidators: true }
    )

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" })
    }

    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const DeleteTask = async (req,res) =>{
    try {
    const task = await tasks.findByIdAndDelete(req.params.id)

    if (!task) {
      return res.status(404).json({ message: "Task not found" })
    }

    res.status(200).json({ message: "Task deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {getAllTasks,AddTask,getTask,UpdateTask,DeleteTask}
