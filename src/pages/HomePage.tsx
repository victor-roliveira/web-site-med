import Footer from "@/components/footer";
import MainSection from "@/components/homepage-section/main-section";
import ModulesSection from "@/components/homepage-section/modules-section";
import OpinionsSection from "@/components/homepage-section/opinions-section";
import ReasonsSection from "@/components/homepage-section/reasons-section";

function HomePage() {
  return (
    <>
      <MainSection />

      <ModulesSection />

      <ReasonsSection />

      <OpinionsSection />

      <Footer />
    </>
  );
}

export default HomePage;