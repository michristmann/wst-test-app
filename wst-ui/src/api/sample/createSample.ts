import { api } from '..';

export interface CreateSampleProps {
  cidade: string;
  estado: string;
  ph: number;
  condutividade: number;
  turbidez: number;
  dbo: number;
  dqo: number;
  fe: number;
  mg: number;
  ca: number;
}

const createSample = async (payload: CreateSampleProps) => {
  try {
    const response = await api.post('/samples', { sample: payload });
    return response.data;
  } catch (error) {
    return { message: 'Error creating sample' };
  }
};

export default createSample;
