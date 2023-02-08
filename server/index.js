const express = require('express');
require('dotenv').config();

const productRoutes = require('./routes/product')

const app = express();
const PORT = process.env.PORT || 5005;

//middelware
app.use('/api', productRoutes)

//DB connection
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a BBDD', mongoose.connection.name));


//Cors
const cors = require('cors')
app.use(cors());

const whiteList = ['http://localhost:5173','http://localhost:5005'];

let corsOptions = {
  origin: function (origin, callback){
    if(whiteList.indexOf(origin) != -1){
      callback(null, true);
    } else {
      callback(new Error('Not alloweb by CORS'))
    }
  }
};

app.get('/', cors(corsOptions), (req, res) => {
  res.json({mensaje : 'ok'})
})


app.listen(PORT, () => console.log(`Servidor levantado en 
http://localhost:${PORT}`))