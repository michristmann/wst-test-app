import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';

import SampleSubmissions from '../pages/sample-submissions';
import SendSample from '../pages/send-sample';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="sample-submissions" element={<SampleSubmissions />} />
      <Route path="send-sample" element={<SendSample />} />

      <Route path="/*" element={<Navigate to="sample-submissions" replace />} />
    </ReactRoutes>
  );
}
