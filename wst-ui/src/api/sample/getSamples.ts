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
  createdAt: string;
}

const getSamples = async () => {
  try {
    const response = await api.get<Sample[]>('/samples');
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default getSamples;
