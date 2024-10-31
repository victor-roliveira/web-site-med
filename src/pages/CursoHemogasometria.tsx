import MainSection from "@/components/course-hemo-section/main-section";
import ResourcesSection from "@/components/course-hemo-section/resources-section";
import PaymentSection from "@/components/course-hemo-section/payment-section";
import { Helmet } from "react-helmet-async";

function CursoHemogasometria() {
  return (
    <>
    <Helmet>
        <title>Hemogasometria | Descomplicando</title>
        <meta name="description" content="Bem vindo ao curso de Hemogasometria." />
        <meta name="keywords" content="courses, education, learning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Hemogasometria | Descomplicando" />
        <meta property="og:description" content="Bem vindo ao curso de Hemogasometria." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br/" />
        <meta property="og:image" content="../assets/logo-descomplicando.png" />
      </Helmet>
      <MainSection />

      <ResourcesSection />

      <PaymentSection />
    </>
  );
}

export default CursoHemogasometria;
