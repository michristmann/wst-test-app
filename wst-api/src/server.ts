import { Application, json, urlencoded } from 'express';
import cors = require('cors');
import express = require('express');

import Routes from './routes';

class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(cors());
    app.use(urlencoded({ extended: true }));
    app.use(json());

    app.get('/status', (req, res) => {
      return res.json({ health: 'ok' });
    });
  }
}

const app: Application = express();
const server: Server = new Server(app);
const port = 3080;
const host = '0.0.0.0';

app
  .get('/', function (_, response) {
    response.send('App is running');
  })
  .listen(port, host, function () {
    console.info(`Server running on: ${host}:${port}`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.info('server startup error: address already in use');
    } else {
      console.error(err);
    }
  });
