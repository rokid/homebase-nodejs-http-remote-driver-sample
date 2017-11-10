const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/list', (req, res) => {
  logger.info(JSON.stringify(req.body, null, 4));
  res.send({
    status: 2,
    errorName: 'E_SOME_ERROR'
  });
});

app.post('/execute', (req, res) => res.send({
  status: 2
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
