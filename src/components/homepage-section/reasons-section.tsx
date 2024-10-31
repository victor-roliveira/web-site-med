import doctorIcon from "../../assets/doctor-icon.svg";
import heartIcon from "../../assets/heart-icon.svg";
import bookIcon from "../../assets/book-icon.svg";
import targetIcon from "../../assets/target-icon.svg";
import checkIcon from "../../assets/check-icon.svg";

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
          <img src={doctorIcon} alt="Ícone Medicina" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR1")}</h2>
          <p className="text-base text-white/65">{t("textReason1")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <img src={heartIcon} alt="Ícone Coração" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR2")}</h2>
          <p className="text-base text-white/65">{t("textReason2")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <img src={bookIcon} alt="Ícone Livro" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR3")}</h2>
          <p className="text-base text-white/65">{t("textReason3")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <img src={targetIcon} alt="Ícone Alvo" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR4")}</h2>
          <p className="text-base text-white/65">{t("textReason4")}</p>
        </div>

        <div className="flex items-start flex-col w-[300px] gap-2">
          <img src={checkIcon} alt="Ícone Check" />
          <h2 className="text-lg text-white font-bold">{t("subTitleR5")}</h2>
          <p className="text-base text-white/65">{t("textReason5")}</p>
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
