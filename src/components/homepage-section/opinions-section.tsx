import { useTranslation } from "react-i18next";
import { MarqueeDemo } from "../magicui/components/marquee";

/*function OpinionCard({ name, feedback }: Opinion): JSX.Element {
  return (
    <div className="sm:w-[300px] sm:h-[300px] w-[250px] rounded-md bg-black">
      <div className="flex flex-col items-start p-6 gap-2">
        <CircleUserRound size={40} color="white" />
        <h2 className="text-white font-bold text-xl">{name}</h2>
        <p className="text-white/65">{feedback}</p>
      </div>
    </div>
  );
}*/

function OpinionsSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="bg-white sm:h-[100vh] md:h-[400px] flex items-center flex-col justify-center py-8">
      <h2 className="sm:text-4xl text-black sm:pb-8 text-2xl">
        {t("titleOpinions")}
      </h2>

      <MarqueeDemo />
    </section>
  );
}

export default OpinionsSection;
