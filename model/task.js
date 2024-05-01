const mongoose = require('mongoose');

const newTask = new mongoose.Schema({
  name:{
    type : String,
    required : [true,'Name is required'],
    trim : true,
    maxlength : [30,'Name can not be more than 20 characters']
  },
  completed:{
    type : Boolean,
    default : false
  }

})
;

module.exports = mongoose.model('Task',newTask);