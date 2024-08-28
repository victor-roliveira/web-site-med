import CapaCursoHemogasometria from "../../assets/Captura de tela 2024-08-15 121352.webp";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function MainSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black/90 h-[100vh] flex items-center justify-center gap-44">
      <img
        src={CapaCursoHemogasometria}
        alt="Capa do Curso Hemogasometria"
        loading="lazy"
        className="w-[300px] h-[400px] rounded-md"
      />

      <div className="flex flex-col items-center gap-4 w-[400px] text-white">
        <p className="text-white/65 text-lg">
          {t("subtitleCourseHemogasometria")}
        </p>
        <h2 className="text-3xl font-bold pb-2">{t("titleHemogasometria")}</h2>

        <p className="text-white/65 text-xl text-center">
          {t("textCourseHemogasometria")}
        </p>
        <Button className="w-44 h-10 rounded-full bg-transparent border-2 border-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all">
          {t("buttonSubscribe")}
        </Button>
      </div>
    </section>
  );
}

export default MainSection;
