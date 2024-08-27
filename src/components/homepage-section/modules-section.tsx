import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Modulo1 from "../../assets/Captura de tela 2024-08-15 170518.png";
import Modulo2 from "../../assets/Captura de tela 2024-08-15 121338.png";
import Modulo3 from "../../assets/Captura de tela 2024-08-15 121303.png";
import Modulo4 from "../../assets/Captura de tela 2024-08-19 190512.png";
import Modulo5 from "../../assets/Captura de tela 2024-08-19 190529.png";

import { useTranslation } from "react-i18next";

function ModulesSection() {
  const images = [Modulo1, Modulo2, Modulo3, Modulo4, Modulo5];

  const { t } = useTranslation();

  return (
    <section className="bg-[#5B5B58] h-[100vh] flex items-center flex-col">
      <h2 className="sm:text-4xl text-white sm:pt-16 sm:pb-8 text-2xl pt-10 pb-4">
        {t("titleModules")}
      </h2>
      <Button className="w-44 h-10 rounded-full bg-white border-none text-black hover:bg-black hover:text-white transition-all">
        {t("buttonModules")}
      </Button>

      <Carousel className="sm:w-[850px] sm:py-8 py-10 w-[250px]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/3 cursor-pointer basis-1/1">
              <img
                src={image}
                alt={`Módulo ${index + 1}`}
                className="sm:h-[450px] sm:w-[400px] rounded-md w-[250px] h-[400px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-black hover:text-white hover:border-black transition-all"/>
        <CarouselNext className="hover:bg-black hover:text-white hover:border-black transition-all"/>
      </Carousel>
    </section>
  );
}

export default ModulesSection;
