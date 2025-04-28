import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Mentors = lazy(() => import("./pages/Mentors"));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-8 max-w-7xl mx-auto">
        {/* Suspense wraps lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
