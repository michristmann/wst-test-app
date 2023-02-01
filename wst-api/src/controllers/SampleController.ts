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
    const { payload: sampleData } = req.body;
    const requiredFields = ['cidade', 'estado', 'ph', 'condutividade', 'turbidez', 'dbo', 'dqo', 'fe', 'mg', 'ca'];
    const lowerCasedKeysSample = Object.keys(sampleData).reduce((acc, key) => {
      acc[key.toLowerCase()] = sampleData[key];
      return acc;
    }, {});
    const sampleDataAttributes = Object.keys(lowerCasedKeysSample);
    const hasAllRequiredFields = requiredFields.every(key => sampleDataAttributes.includes(key));

    if (!hasAllRequiredFields) {
      return res.status(400).send({ error: 'Missing Required Fields' });
    }

    const sample = new Sample({ ...lowerCasedKeysSample });

    try {
      sample.save();
      res.status(201).send({
        sample,
      });
    } catch (error) {
      res.status(400).send({ error: 'There was an error while saving the data' });
    }
  }
}
