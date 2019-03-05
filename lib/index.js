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
  console.log('Example Homebase Skill started.')
  console.log('Endpoint: http://' + ip.address() + ':3000')
  console.log('or use: http://localhost:3000')
  console.log('v1:')
  console.log('  Endpoint: http://localhost:3000/v1')
  console.log('  List: http://localhost:3000/v1/list/')
  console.log('  Execute: http://localhost:3000/v1/list/')
  console.log('v2:')
  console.log('  Endpoint: http://localhost:3000/v2/')
  console.log('自定义接入配置:')
  console.log(`  远程驱动地址: http://${ip.address()}:3000/v1`)
  console.log('  userAuth 自行填写')
})
