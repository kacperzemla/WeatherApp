import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Compare from './Compare';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path ='/' />
            <Route path ='/compare' element={<Compare/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
