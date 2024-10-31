import MainSection from "@/components/homepage-section/main-section";
import ModulesSection from "@/components/homepage-section/modules-section";
import OpinionsSection from "@/components/homepage-section/opinions-section";
import ReasonsSection from "@/components/homepage-section/reasons-section";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Descomplicando</title>
        <meta name="description" content="Bem vindo ao início de tudo, conheça nossos cursos e profissionais." />
        <meta name="keywords" content="courses, education, learning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Home | Descomplicando" />
        <meta property="og:description" content="Bem vindo ao início de tudo, conheça nossos cursos e profissionais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br/" />
        <meta property="og:image" content="../assets/logo-descomplicando.png" />
      </Helmet>
      <MainSection />

      <ModulesSection />

      <ReasonsSection />

      <OpinionsSection />
    </>
  );
}

export default HomePage;
