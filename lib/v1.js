const v1 = module.exports = {};

v1.list = function(){
  return (req, res) => {
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
  }
}

v1.execute = () => {
  return (req, res) => {
    console.log('执行控制');
    console.log(JSON.stringify(req.body));
    console.log('------');
    res.send({
      status: 0,
      data: {
        "switch": "off"
      }
    })
  }
}