import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Descomplicando | Sobre Nós</title>
        <meta
          name="description"
          content="Explore os nossos profissionais e conheça mais sobre a nossa empresa"
        />
        <meta
          name="keywords"
          content="sobre, empresa, informação, profissionais"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/about" />

        <meta property="og:title" content="Descomplicando | Sobre Nós" />
        <meta
          property="og:description"
          content="Explore os nossos profissionais e conheça mais sobre a nossa empresa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.descomplicando.com.br/about"
        />
        <meta property="og:image" content="/logo-descomplicando.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Descomplicando" />

        <meta name="twitter:card" content="/logo-descomplicando.png" />
        <meta name="twitter:title" content="Descomplicando: Sobre Nós" />
        <meta
          name="twitter:description"
          content="Explore os nossos profissionais e conheça mais sobre a nossa empresa"
        />
        <meta name="twitter:image" content="/logo-descomplicando" />
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
