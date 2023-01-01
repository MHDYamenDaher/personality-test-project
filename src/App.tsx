
import { Route, Routes, Navigate } from 'react-router-dom';

// localization config file
import './i18n';

import Landing from './screens/Landing';
import Test from './screens/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  ); 
}

export default App;
