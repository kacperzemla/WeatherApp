import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path ='/' />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
