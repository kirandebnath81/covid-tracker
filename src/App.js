import "./App.css";

//context
import { CovidProvider } from "./context/Context";

//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CovidTable from "./pages/CovidTable";
import Graph from "./pages/Graph";
import IndiaStates from "./pages/india/IndiaStates";
import IndiaDistricts from "./pages/india/IndiaDistricts";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CovidProvider>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid-19/table" element={<CovidTable />} />
            <Route path="/covid-19/graph" element={<Graph />} />
            <Route path="/covid-19/india/states" element={<IndiaStates />} />
            <Route
              path="/covid-19/india/districts/:name"
              element={<IndiaDistricts />}
            />
          </Routes>
        </Router>
      </div>
    </CovidProvider>
  );
}

export default App;
