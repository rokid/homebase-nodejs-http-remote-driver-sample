const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const ip = require('ip');

const v2 = require('./v2');
const v1 = require('./v1');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/v1/list', v1.list());

app.post('/v1/execute', v1.execute());

app.post('/v2', v2.main());

app.listen(3000, () => {
  console.log('Example Homebase Skill started.\nEndpoint: http://' + ip.address() + ':3000')
  console.log('or use: http://localhost:3000')
  console.log('v1:')
  console.log('  list: http://localhost:3000/v1/list/')
  console.log('  execute: http://localhost:3000/v1/list/')
  console.log('v2:')
  console.log('  http://localhost:3000/v2/')
})
