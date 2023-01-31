const express = require('express');
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middelware Setup
app.use(cors());
app.use(express.json());

// require dot env
require('dotenv').config();

// Connect MongoDB

const uri = `${process.env.DB_URI}`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      const database = client.db('databaseName').collection('databaseCollection')
  
      console.log('Database Connected...')
    } finally {
    
    }
  }
  
  run().catch(err => console.error(err))
  

app.get("/", (req, res)=>{
    res.send('[Project Name] Server is Running')
})

app.listen(port, () =>{
    console.log(`The Server Running Port is ${port}`)
})
