import * as yup from 'yup';

const createSampleFormData = yup.object().shape({
  cidade: yup.string().required('Indicar a Cidade da amostra é obrigatório'),
  estado: yup.string().max(2).required('Indicar a SIGLA do Estado da amostra é obrigatório'),
  ph: yup.number().max(4).required('É obrigatório informar o pH da Amostra'),
  condutividade: yup.number().max(4).required('É obrigatório informar a Condutividade da Amostra'),
  turbidez: yup.number().max(4).required('É obrigatório informar a Turbidez da Amostra'),
  dbo: yup.number().max(8).required('É obrigatório informar a DBO da Amostra'),
  dqo: yup.number().max(8).required('É obrigatório informar a DQO da Amostra'),
  fe: yup.number().max(4).required('É obrigatório informar a concentração de Ferro da Amostra'),
  mg: yup.number().max(4).required('É obrigatório informar a concentração de Magnésio da Amostra'),
  ca: yup.number().max(4).required('É obrigatório informar a concentração de Cálcio da Amostra'),
});

export default createSampleFormData;
