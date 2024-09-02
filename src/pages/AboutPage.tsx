import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";

function AboutPage() {
  return (
    <>
     <Helmet>
        <title>Sobre Nós | Descomplicando</title>
        <meta name="description" content="Conheça mais sobre nós e nossa equipe." />
        <meta name="keywords" content="about, company, information" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/about" />

        <meta property="og:title" content="Sobre Nós | Descomplicando" />
        <meta property="og:description" content="Conheça mais sobre nós e nossa equipe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.descomplicando.com.br/about" />
        <meta property="og:image" content="../assets/logo-descomplicando.png" />
      </Helmet>
      <section className="bg-black/90 h-[100vh] sm:flex items-center justify-center gap-44">
        <div className="flex flex-col items-start gap-4 sm:w-[400px] w-full text-white pt-20 pb-5 px-11">
          <div>
            <h2 className="sm:text-4xl font-bold sm:pb-2 text-2xl">Quem somos?</h2>
            <div className="border-b-2 bg-white w-[140px]"></div>
          </div>
          <p className="text-white/65 text-xl">
            Bem-vindo ao grupo Descomplicando. Antes de embarcar nessa jornada,
            iremos te apresentar nossos profissionais...
          </p>
          <p>CERTIFICAÇÕES</p>
        </div>

        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center bg-black text-white w-[350px] h-[400px] rounded-md">
                FOTO CLEIBER
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
