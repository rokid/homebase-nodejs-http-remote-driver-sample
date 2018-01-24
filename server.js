const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/list', (req, res) => {
  console.log('设备列表');
  console.log(JSON.stringify(req.body));
  console.log('------');
  const devices = [];
  // 我们创建 10 个灯泡
  for(let i = 0; i < 10; i++) {
    devices.push({
      name: 'YE' + i,
      roomName: '客厅',
      deviceId: 'abc' + i,
      deviceInfo: { foo: 'bar', id: i},
      type: 'light',
      actions: {
        switch: ['on', 'off'],
        color: ['num']
      },
      state: {
        swith: 'on',
        color: 0xff0000
      }
    });
  }
  res.send({
    status: 0,
    data: devices,
  });
});

app.post('/execute', (req, res) => {
  console.log('执行控制');
  console.log(JSON.stringify(req.body));
  console.log('------');
  res.send({
    status: 0,
  })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
