import MainSection from "@/components/homepage-section/main-section";
import ModulesSection from "@/components/homepage-section/modules-section";
import OpinionsSection from "@/components/homepage-section/opinions-section";
import ReasonsSection from "@/components/homepage-section/reasons-section";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Descomplicando | Home</title>
        <meta
          name="description"
          content="Explore nossos cursos online e aprimore suas habilidades com os melhores profissionais. Comece agora na Descomplicando!"
        />
        <meta
          name="keywords"
          content="cursos, educação, aprendizado, formação profissional"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Descomplicando | Home" />
        <meta
          property="og:description"
          content="Bem vindo ao início de tudo, conheça nossos cursos e profissionais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Descomplicando" />
        <meta property="og:url" content="https://www.descomplicando.com.br/" />
        <meta property="og:image" content="/logo-descomplicando.png" />
        
        <meta name="twitter:card" content="/logo-descomplicando.png" />
        <meta
          name="twitter:title"
          content="Descomplicando: Cursos e Artigos Online"
        />
        <meta
          name="twitter:description"
          content="Explore cursos online e aprimore suas habilidades com os melhores profissionais."
        />
        <meta
          name="twitter:image"
          content="/logo-descomplicando.png"
        />
      </Helmet>
      <MainSection />

      <ModulesSection />

      <ReasonsSection />

      <OpinionsSection />
    </>
  );
}

export default HomePage;
