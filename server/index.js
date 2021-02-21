// TODO: Create an express server
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../client/dist')));
//Routes here//
//server.use('/api')

server.listen(port, () => {console.log(`Listening on port ${port}`)});