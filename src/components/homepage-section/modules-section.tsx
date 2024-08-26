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
      <h2 className="text-4xl text-white pt-16 pb-8">
        {t("titleModules")}
      </h2>
      <Button className="w-44 h-10 rounded-full bg-white border-none text-black hover:bg-black hover:text-white transition-all">
        {t("buttonModules")}
      </Button>

      <Carousel className="w-[850px] py-8">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 cursor-pointer">
              <img
                src={image}
                alt={`Módulo ${index + 1}`}
                className="h-[450px] w-[400px] rounded-md"
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
