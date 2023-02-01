import { api } from '..';

export interface SampleProps {
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

const createSample = async (payload: SampleProps) => {
  try {
    const response = await api.post('/samples', { payload });

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default createSample;
