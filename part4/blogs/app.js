const http = require('http')
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/post');
const routers = require('./controllers/routers');
const userRouters = require('./controllers/userRouters');
const loginRouter = require('./controllers/loginRouter');

const mongoUrl = process.env.NODE_ENV == "test" ? config.TEST_URL : config.URL;
mongoose.connect(mongoUrl).then(result => console.log('Connected')).catch(error => console.log("Not connected"));


app.use(cors());
app.use(express.json())
app.use('/api/', routers);
app.use('/api/', userRouters);
app.use('/api/', loginRouter);
const server = app.listen(config.PORT || 3001);

module.exports = {
server
}
