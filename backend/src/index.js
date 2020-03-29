const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
// FAZ COM QUE O BODY SEJA TRATADO COMO JSON AUTOMATICAMENTE
app.use(express.json());
app.use(routes);
app.use(errors());


app.listen(3333);