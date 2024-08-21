import "./global.css";

import NavigationBar from "./components/navigation-bar";

import MainSection from "./components/main-section";
import ModulesSection from "./components/modules-section";
import ReasonsSection from "./components/reasons-section";
import OpinionsSection from "./components/opinions-section";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavigationBar />

      <MainSection />

      <ModulesSection />

      <ReasonsSection />

      <OpinionsSection />

      <Footer />
    </>
  );
}

export default App;
