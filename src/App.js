import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Compare from "./Compare";
import Weather from "./Weather";
import Settings from "./Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="icon-container">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="settings-icon" />
          </Link>
          <Link to="/settings">
            <FontAwesomeIcon icon={faGear} className="settings-icon" />{" "}
          </Link>
        </div>

        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Weather />
              </>
            }
          />
          <Route
            path="/compare"
            element={
              <>
                <Navbar />
                <Compare />
              </>
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
