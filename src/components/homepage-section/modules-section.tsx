import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Modulo1 from "../../assets/Captura de tela 2024-08-15 170518.webp";
import Modulo2 from "../../assets/Captura de tela 2024-08-15 121338.webp";
import Modulo3 from "../../assets/Captura de tela 2024-08-15 121303.webp";
import Modulo4 from "../../assets/Captura-de-tela-2024-08-19-190512.webp";
import Modulo5 from "../../assets/Captura-de-tela-2024-08-19-190529_1.webp";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Particles } from "../magicui/particles";

const images = [Modulo1, Modulo2, Modulo3, Modulo4, Modulo5];

function ModulesSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="bg-white sm:h-[100vh] flex items-center flex-col relative">
      <h2 className="sm:text-4xl text-black sm:pt-16 sm:pb-8 text-2xl pt-10 pb-4">
        {t("titleModules")}
      </h2>
      <Button className="w-44 h-10 rounded-full bg-black border-none text-white hover:bg-black/85 transition-all">
        <Link to="/cursos/hemogasometria">{t("buttonModules")}</Link>
      </Button>

      <Carousel className="sm:w-[850px] sm:py-8 py-10 w-[250px] z-50">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 cursor-pointer basis-1/1"
            >
              <img
                src={image}
                alt={`Módulo ${index + 1}`}
                loading="lazy"
                className="sm:h-[450px] sm:w-[400px] rounded-md w-[250px] h-[400px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-black hover:text-white hover:border-black transition-all" />
        <CarouselNext className="hover:bg-black hover:text-white hover:border-black transition-all" />
      </Carousel>
      <Particles
        className="absolute inset-0 z-10"
        quantity={400}
        ease={50}
        color="black"
        refresh
      />
    </section>
  );
}

export default ModulesSection;
