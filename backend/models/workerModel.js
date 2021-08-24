const mongoose = require('mongoose');
const Schema = require('mongoose');

const workerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateBirth:{
    type: Date,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  
},
{
  timestamps: true,
})


const WorkerModel = mongoose.model('Workers', workerSchema);
module.exports = WorkerModel;


