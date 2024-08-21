import { useTranslation } from "react-i18next";

function MainSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-black/90 h-[100vh] flex items-center flex-col">
      <h1 className="text-4xl text-white pt-28 pb-20">
        {t("title")}
      </h1>
      <div className="bg-black w-[900px] h-[350px] flex items-center justify-center">
        <p className="text-white text-5xl">VÍDEO</p>
      </div>
    </section>
  );
}

export default MainSection;
