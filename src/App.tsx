
import { Route, Routes, Navigate } from 'react-router-dom';

// localization config file
import './i18n';

import Landing from './screens/Landing';

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Navigate to="/landing" />} />
    </Routes>
  ); 
}

export default App;
