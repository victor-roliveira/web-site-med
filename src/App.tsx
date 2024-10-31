import NavigationBar from "./components/navigation-bar";
import "./global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CursoHemogasometria from "./pages/CursoHemogasometria";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <HelmetProvider>
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
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
