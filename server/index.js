require('dotenv').config({path:'.env'});
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const handle = require('./handlers');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
//mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology:true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(handle.error);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
