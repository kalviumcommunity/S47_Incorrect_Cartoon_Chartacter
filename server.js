require('dotenv').config();

const cors = require('cors')
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

const uri = 'mongodb+srv://ishita_naraniya:ishhMongodb@cluster1.ponxmip.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('ASAP');
    const collection = database.collection('Incorrect Cartoon character');

    app.get('/data', async (req,res)=>{
    const result = await collection.find({}).toArray();
      res.json(result);
    })

    app.post('/data', async (req, res) => {
      const { serialNumber, seriesOrMovieName, villainName, actions, villainImgLink, posterLink } = req.body;
      const result = await collection.insertOne({ serialNumber, seriesOrMovieName, villainName, actions, villainImgLink, posterLink });
      res.json(result);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.get('/ping', (req, res) =>{
    res.send('Hello World')
})


app.listen(port, ()=>{
         console.log(`🚀 server running on PORT: ${port}`);
        });
