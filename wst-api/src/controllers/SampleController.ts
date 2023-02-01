import { Request, Response } from 'express';
import Sample from '../models/Sample';

export default class SampleController {
  constructor() {}

  static async index(req: Request, res: Response) {
    try {
      const samples = await Sample.findAll();
      res.json(samples);
    } catch (error) {
      res.status(404).send({ error: 'Failed to fetch data' });
    }
  }

  static async create(req: Request, res: Response) {
    const sampleData = req.body;
    const requiredFields = ['cidade', 'estado', 'ph', 'condutividade', 'dbo', 'dqo', 'fe', 'mg', 'ca'];
    const sampleDataAttributes = Object.keys(sampleData);
    const hasAllRequiredFields = requiredFields.every(key =>
      sampleDataAttributes.map(att => att.toLowerCase()).includes(key),
    );

    if (!hasAllRequiredFields) {
      return res.status(400).send({ error: 'Missing Required fields' });
    }

    const sample = new Sample({ ...sampleData });

    sample
      .save()
      .then(sample => {
        res.status(201).send({
          message: `Success. Sample ${sample.id} saved in the data base`,
        });
      })
      .catch(err => {
        res.status(400).send({ error: 'There was an error while saving the data' });
      });
  }
}
