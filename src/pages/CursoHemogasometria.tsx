import MainSection from "@/components/course-hemo-section/main-section";
import ResourcesSection from "@/components/course-hemo-section/resources-section";
import PaymentSection from "@/components/course-hemo-section/payment-section";
import { Helmet } from "react-helmet-async";

function CursoHemogasometria() {
  return (
    <>
      <Helmet>
        <title>Descomplicando | Hemogasometria</title>

        <meta name="description" content="Curso de Hemogasometria, liderado e aplicado por especialistas na área, feito para estudantes e profissionais de saúde." />
        <meta name="keywords" content="Curso de medicina, curso de hemogasometria, aprender sobre hemogasometria" />

        <meta property="og:title" content="Descomplicando | Curso de Hemogasometria" />
        <meta property="og:description" content="Curso de Hemogasometria, liderado e aplicado por especialistas na área, feito para estudantes e profissionais de saúde." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br" />
        <meta property="og:image" content="/logo-descomplicando.png" />

        <meta name="twitter:card" content="/logo-descomplicando" />
        <meta name="twitter:title" content="Descomplicando | Curso de Hemogasometria" />
        <meta name="twitter:description" content="Curso de Hemogasometria, liderado e aplicado por especialistas na área, feito para estudantes e profissionais de saúde." />
        <meta name="twitter:image" content="/logo-descomplicando.png" />

        <link rel="canonical" href="https://www.descomplicando.com.br" />
      </Helmet>
      
      <MainSection />

      <ResourcesSection />

      <PaymentSection />
    </>
  );
}

export default CursoHemogasometria;
