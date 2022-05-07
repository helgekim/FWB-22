const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/post');
const routers = require('./controllers/routers');

const mongoUrl = config.URL;
mongoose.connect(mongoUrl).then(result => console.log('Connected')).catch(error => console.log("Not connected"));


app.use(cors());
app.use(express.json())
app.use('/api/', routers);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
