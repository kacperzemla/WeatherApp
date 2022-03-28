import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Compare from './Compare';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path ='/' element = {<Weather/>} />
            <Route path ='/compare' element={<Compare/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
