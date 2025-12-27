const express =require('express')
const router = express.Router()
const {getAllTasks,AddTask,getTask,UpdateTask,DeleteTask} = require('../controller/tasks.js');;

router.get('/Tasks',getAllTasks)
router.get('/Task/:id',getTask)
router.post('/Add',AddTask)

router.patch('/update/:id',UpdateTask)

router.delete('/delete/:id',DeleteTask)

module.exports = router;