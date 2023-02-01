import { api } from '..';

export interface Sample {
  id: number;
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

const getSamples = async () => {
  try {
    const response = await api.get<Sample[]>('/samples');
    return response.data;
  } catch (error) {
    return { message: 'Error fetching samples' };
  }
};

export default getSamples;
