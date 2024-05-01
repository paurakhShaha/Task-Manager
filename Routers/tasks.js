const express = require('express');

const {getTasks,createTask,updateTask,deleteTask, getTaskById} = require('../Controllers/tasks');

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);



module.exports = router;