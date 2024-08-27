import { useTranslation } from "react-i18next";

function MainSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-black/90 h-[100vh] flex items-center flex-col">
      <h1 className="text-2xl w-[300px] text-white pt-28 pb-20 sm:text-4xl sm:w-full sm:flex justify-center">
        {t("title")}
      </h1>
      <div className="bg-black w-full h-[300px] flex items-center justify-center sm:w-[900px] sm:h-[400px]">
        <p className="text-white text-5xl">VÍDEO</p>
      </div>
    </section>
  );
}

export default MainSection;
