import MainSection from "@/components/homepage-section/main-section";
import ModulesSection from "@/components/homepage-section/modules-section";
import OpinionsSection from "@/components/homepage-section/opinions-section";
import ReasonsSection from "@/components/homepage-section/reasons-section";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Descomplicando | Homepage</title>
        
        <meta
          name="description"
          content="Descomplicando oferece cursos de medicina online e detalhados para estudantes e profissionais. Aprenda com especialistas e domine o básico e avançado da medicina com flexibilidade."
        />
        
        <meta
          name="keywords"
          content="curso de medicina Descomplicando, cursos de medicina online, aprender medicina, curso de medicina para iniciantes, educação em saúde, plataforma de aprendizado de medicina"
        />
        
        <meta property="og:title" content="Descomplicando | Curso de Medicina Online" />
        <meta property="og:description" content="Descomplicando oferece cursos de medicina online acessíveis e detalhados para estudantes e profissionais. Aprenda com especialistas e domine o básico e avançado da medicina com flexibilidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br" />
        <meta property="og:image" content="/logo-descomplicando.png" />

        <meta name="twitter:card" content="/logo-descomplicando" />
        <meta name="twitter:title" content="Descomplicando | Curso de Medicina Online" />
        <meta name="twitter:description" content="Descomplicando oferece cursos de medicina online acessíveis e detalhados para estudantes e profissionais." />
        <meta name="twitter:image" content="/logo-descomplicando.png" />

        <link rel="canonical" href="https://www.descomplicando.com.br" />
      </Helmet>
      
      <MainSection />

      <ModulesSection />

      <ReasonsSection />

      <OpinionsSection />
    </>
  );
}

export default HomePage;
