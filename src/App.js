import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home';
import Pricing from './pages/Pricing';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
