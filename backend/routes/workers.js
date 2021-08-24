
const router = require('express').Router();
const workerModel = require('../models/workerModel');

router.get('/getworkers', async (req, res) => {
  let workers = await workerModel.find().lean();
  let taxValue = 0.13;
  // console.log(allWorkers);
  const currentTime = new Date(); // текущая дата
  for (let i=0; i < workers.length; i++) {
    workers[i].dateBirth = Math.floor((currentTime - workers[i].dateBirth) / 31536000000);
    workers[i].tax = parseInt(workers[i].salary) * taxValue;
    workers[i].salary = parseInt(workers[i].salary) + 'р';
  }
  // console.log(workers);
  res.json({ workers });
});
router.post('/add', async(req, res) => {
  const { nameState: name, dateState, salaryState: salary } = req.body;
  const parts = dateState.split('-');
  const dateBirth = new Date(parts[0], parts[1] - 1, parts[2]); 
  const worker = await new workerModel({ name, dateBirth, salary });
  await worker.save();
  let workers = await workerModel.find().lean();
  let taxValue = 0.13;
  // console.log(allWorkers);
  const currentTime = new Date(); // текущая дата
  for (let i=0; i < workers.length; i++) {
    workers[i].dateBirth = Math.floor((currentTime - workers[i].dateBirth) / 31536000000);
    workers[i].tax = parseInt(workers[i].salary) * taxValue;
    workers[i].salary = parseInt(workers[i].salary) + 'р';
  }
  // console.log(workers);
  res.json({ workers });
})

router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await workerModel.findByIdAndDelete(_id);
    res.json({ removed: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



module.exports = router;
