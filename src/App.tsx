import NavigationBar from "./components/navigation-bar";
import "./global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CursoHemogasometria from "./pages/CursoHemogasometria";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cursos/hemogasometria"
            element={<CursoHemogasometria />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
