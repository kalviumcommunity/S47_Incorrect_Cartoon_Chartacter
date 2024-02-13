require('dotenv').config()

const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose')

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Modal = require('./Scheme');
const { validateInput } = require('./validator');
const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(cors())
app.use(express.json());

const users = require('./users.json')

mongoose.connect('mongodb+srv://ishita_naraniya:ishhMongodb@cluster1.ponxmip.mongodb.net/ASAP', {
  dbName: "ASAP"
})


app.get('/data', (req, res) => {
  Modal.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

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

const SECRET_KEY = '1733060872e4a77a956a920d83de08b3a4e51cc1ecc0e1ba35f3c73df5ed9a2cc9467b2248cec1fad302697d4546aff441c5d21e05ecdd67ce096f0d27e8e5fa';


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.send({ token });
});


app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});
