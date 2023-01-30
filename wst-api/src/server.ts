import express = require('express');

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: `Hello World!`,
  });
});

app.get('/:name', (req: express.Request, res: express.Response) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}!`,
  });
});

app.listen(PORT, HOST);
