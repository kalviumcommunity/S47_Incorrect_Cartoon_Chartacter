const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
const Modal = require('./Scheme');
const { validateInput } = require('./validator');

mongoose.connect('mongodb+srv://ishita_naraniya:ishhMongodb@cluster1.ponxmip.mongodb.net/ASAP', {
  dbName: "ASAP"
})


app.get('/data', (req, res) => {
  Modal.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// app.post('/insert', (req, res) => {
//   Modal.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => console.log(err))

//     const { error, value } = validateInput(req.body)

//     if (error) {
//       console.log(error)
//       return res.send(error.details)
//     }
//     res.send('Successfully Added item!')
  
// })
app.post('/insert', (req, res) => {
  const { error, value } = validateInput(req.body);

  if (error) {
    console.log(error);
    return res.status(400).json(error.details);
  }

  Modal.create(value)
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

app.get('/getItem/:id', (req, res) => {
  const id = req.params.id
  Modal.findById({ _id: id })
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id
  Modal.findByIdAndUpdate({ _id: id }, {
    serialNumber: req.body.serialNumber,
    seriesOrMovieName: req.body.seriesOrMovieName,
    villainName: req.body.villainName,
    actions: req.body.actions,
    villainImgLink: req.body.villainImgLink,
    posterLink: req.body.posterLink
  }, { new: true })
    .then(data => res.json(data))
    .catch((err) => res.status(404).json(err))
})


app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Modal.findByIdAndDelete({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get('/ping', (req, res) => {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});
