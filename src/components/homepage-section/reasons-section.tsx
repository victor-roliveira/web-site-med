import { BadgeCheck, BookText, HeartPulse, Target, Users } from "lucide-react";

import { useTranslation } from "react-i18next";

function ReasonsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black/90 sm:h-[94vh] flex items-center flex-col sm:pb-0 pb-8">
      <h2 className="sm:text-4xl text-white sm:pt-16 sm:pb-8 text-2xl w-[300px] sm:w-full text-center pt-8 pb-8">
        {t("titleReasons")}
      </h2>

      <div className="flex items-center justify-center flex-wrap sm:w-[1000px] gap-10">
        <div className="flex items-start flex-col w-[300px] gap-2">
          <Users size={30} color="white" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR1")}</h2>
          <p className="text-base text-white/65">{t("textReason1")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <HeartPulse size={30} color="white" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR2")}</h2>
          <p className="text-base text-white/65">{t("textReason2")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <BookText size={30} color="white" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR3")}</h2>
          <p className="text-base text-white/65">{t("textReason3")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <Target size={30} color="white" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR4")}</h2>
          <p className="text-base text-white/65">{t("textReason4")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <BadgeCheck size={30} color="white" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR5")}</h2>
          <p className="text-base text-white/65">{t("textReason5")}</p>
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
