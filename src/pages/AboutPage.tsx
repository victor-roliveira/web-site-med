import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Descomplicando | Sobre Nós</title>

        <meta name="description" content="Conheça os profissionais da empresa Descomplicando e conheça mais sobre a empresa" />
        <meta name="keywords" content="Curso de medicina, profissionais descomplicando, conhecer a empresa descomplicando, empresa de curso para medicina" />

        <meta property="og:title" content="Descomplicando | Sobre Nós" />
        <meta property="og:description" content="Conheça os profissionais da empresa Descomplicando e conheça mais sobre a empresa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br" />
        <meta property="og:image" content="/logo-descomplicando.png" />

        <meta name="twitter:card" content="/logo-descomplicando" />
        <meta name="twitter:title" content="Descomplicando | Sobre Nós" />
        <meta name="twitter:description" content="Conheça os profissionais da empresa Descomplicando e conheça mais sobre a empresa" />
        <meta name="twitter:image" content="/logo-descomplicando.png" />

        <link rel="canonical" href="https://www.descomplicando.com.br" />
      </Helmet>

      <section className="bg-black/90 h-[100vh] sm:flex items-center justify-center gap-44">
        <div className="flex flex-col items-start gap-4 sm:w-[400px] w-full text-white pt-20 pb-5 px-11">
          <div>
            <h2 className="sm:text-4xl font-bold sm:pb-2 text-2xl">
              {t("titleAboutSection")}
            </h2>
            <div className="border-b-2 bg-white w-[140px]"></div>
          </div>
          <p className="text-white/65 text-xl">{t("presentationText")}</p>
          <p>CERTIFICAÇÕES</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-black text-white w-[350px] h-[400px] rounded-md">
            FOTO CLEIBER
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
