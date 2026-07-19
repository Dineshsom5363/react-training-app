import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Abc from "./Pages/Abc";

function App() {
  return (
    <Router>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/abc"
          element={<Abc />}
        />

      </Routes>

    </Router>
  );
}

export default App;