import MainSection from "@/components/course-hemo-section/main-section";
import ResourcesSection from "@/components/course-hemo-section/resources-section";
import PaymentSection from "@/components/course-hemo-section/payment-section";
import { Helmet } from "react-helmet-async";

function CursoHemogasometria() {
  return (
    <>
      <Helmet>
        <title>Cursos | Hemogasometria</title>
        <meta
          name="description"
          content="Bem vindo ao curso de Hemogasometria."
        />
        <meta
          name="keywords"
          content="hemogasometria, curso, aprendizado, educação"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Curso | Hemogasometria" />
        <meta
          property="og:description"
          content="Curso de Hemogasometria, aprenda tudo sobre o assunto com a maior qualidade do mercado"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br/" />
        <meta property="og:image" content="/logo-descomplicando" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Descomplicando" />

        <meta name="twitter:card" content="/logo-descomplicando" />
        <meta name="twitter:title" content="Curso: Hemogasometria" />
        <meta
          name="twitter:description"
          content="Explore nosso curso de Hemogasometria, utilize materias de alta qualidade e aprovação por parte dos assinantes"
        />
        <meta name="twitter:image" content="/logo-descomplicando" />
      </Helmet>
      <MainSection />

      <ResourcesSection />

      <PaymentSection />
    </>
  );
}

export default CursoHemogasometria;
