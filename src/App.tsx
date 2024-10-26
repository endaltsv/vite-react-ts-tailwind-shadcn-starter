import { Route, Routes } from 'react-router-dom';
import './App.css';
import OtherPage from './pages/OtherPage';
import NotFound from './pages/NotFound';
import Homepage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/other-page" element={<OtherPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
