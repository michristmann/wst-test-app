import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '../pages/home';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="home" element={<Home />} />
      {/* <Route path="send-sample" element={<SendSample />} /> */}

      <Route path="/*" element={<Navigate to="home" replace />} />
    </ReactRoutes>
  );
}
