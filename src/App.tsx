import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Mentors = lazy(() => import("./pages/Mentors"));

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-8 max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* If URL is /, redirect to /home */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
