const Task = require('../model/task');
const asyncWrapper = require('../middleware/asynnc');
const {createCustomError} = require("../error/customError");


const getTasks = asyncWrapper (async (req, res) => { 
    const tasks = await Task.find({});
    res.status(200).json({tasks,amount:tasks.length})
})


const createTask = asyncWrapper( async (req, res) => {
      const task = await Task.create(req.body)
    res.status(201).json({ task })
 
})


  const getTaskById = asyncWrapper( async (req, res,next) => { 
    
      const {id:taskID} = req.params;
      const task = await Task.findOne({_id:taskID});
      if(!task){
        return next(createCustomError(`No task with id : ${taskID}`,404))}
      
      res.json({task}).status(200);

})


const updateTask = asyncWrapper( async (req, res,next) => {
  
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID} ,req.body, {new:true,
      runValidators:true
    });
    if(task.nModified === 0){
      return next(createCustomError(`No task with id : ${taskID}`,404))
    };
    res.status(200).json({task,status:'success'})  
   })


  const deleteTask = asyncWrapper( async (req, res,next) => {
    
      const {id:taskID} = req.params;
      const task = await Task.deleteOne({_id:taskID});
      
      if(task.deletedCount === 0 ){
        return next(createCustomError(`No task with id : ${taskID}`,404))
      }
      res.status(200).json({task:null,status:'success'})
    }
)

module.exports = {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask 
};