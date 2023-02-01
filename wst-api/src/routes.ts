import SampleController from '@controllers/SampleController';
import { Application } from 'express';

export default class Routes {
  constructor(app: Application) {
    app.get('/samples', SampleController.index);
    app.post('/samples', SampleController.create);
  }
}
