import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Mission from './pages/Mission';
import Discovery from './pages/Mission';


import { Routes, Route } from 'react-router-dom';



function App() {
  return (
<Routes>
      {/* Route for Home component */}
      <Route path="/" element={<Home />} />

      <Route path="/quiz" element={<Quiz />} />

      <Route path="/mission" element={<Mission />} />

    </Routes>
  );
}

export default App;
