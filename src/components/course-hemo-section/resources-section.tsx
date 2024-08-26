import { BookOpen, Brain, CirclePlay } from "lucide-react";
import { useTranslation } from "react-i18next";

function ResourcesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black h-[80vh] flex items-center flex-col">
      <h2 className="text-4xl text-white pt-16 pb-8">
        {t("titleResourcesHemogasometria")}
      </h2>

      <div className="flex items-center justify-center flex-wrap w-full gap-10 mt-[100px]">
        <div className="flex items-start flex-col w-[300px] gap-2">
          <BookOpen size={46} color="white" />
          <h2 className="text-3xl text-white font-bold">
            {t("resourceFirstTitle")}
          </h2>
          <p className="text-base text-white/65">
            {t("resourceFirstSubtitle")}
          </p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <CirclePlay size={46} color="white" />
          <h2 className="text-3xl text-white font-bold">
            {t("resourceSecondTitle")}
          </h2>
          <p className="text-base text-white/65">
            {t("resourceSecondSubtitle")}
          </p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <Brain size={46} color="white" />
          <h2 className="text-3xl text-white font-bold">
            {t("resourceThirdTitle")}
          </h2>
          <p className="text-base text-white/65">
            {t("resourceThirdSubtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
