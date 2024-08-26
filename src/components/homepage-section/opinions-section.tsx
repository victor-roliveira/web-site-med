import { CircleUserRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { useTranslation } from "react-i18next";

function OpinionsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#5B5B58] h-[100vh] flex items-center flex-col justify-center">
      <h2 className="text-4xl text-white pb-8">
        {t("titleOpinions")}
      </h2>

      <Carousel className="w-[1000px] py-8">
        <CarouselContent className="">
          <CarouselItem className="lg:basis-1/3 cursor-pointer">
            <div className="w-[300px] h-[300px] rounded-md bg-black">
              <div className="flex flex-col items-start p-6 gap-2">
                <CircleUserRound size={40} color="white" />
                <h2 className="text-white font-bold text-xl">Aluno nome</h2>
                <p className="text-white/65">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis ratione delectus debitis officiis, distinctio aliquam.
                  At, modi officia. Voluptatum quae minima, quis enim molestiae
                  dolorem possimus illo reprehenderit veritatis tenetur.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 cursor-pointer">
            <div className="w-[300px] h-[300px] rounded-md bg-black">
              <div className="flex flex-col items-start p-6 gap-2">
                <CircleUserRound size={40} color="white" />
                <h2 className="text-white font-bold text-xl">Aluno nome</h2>
                <p className="text-white/65">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis ratione delectus debitis officiis, distinctio aliquam.
                  At, modi officia. Voluptatum quae minima, quis enim molestiae
                  dolorem possimus illo reprehenderit veritatis tenetur.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 cursor-pointer">
            <div className="w-[300px] h-[300px] rounded-md bg-black">
              <div className="flex flex-col items-start p-6 gap-2">
                <CircleUserRound size={40} color="white" />
                <h2 className="text-white font-bold text-xl">Aluno nome</h2>
                <p className="text-white/65">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis ratione delectus debitis officiis, distinctio aliquam.
                  At, modi officia. Voluptatum quae minima, quis enim molestiae
                  dolorem possimus illo reprehenderit veritatis tenetur.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 cursor-pointer">
            <div className="w-[300px] h-[300px] rounded-md bg-black">
              <div className="flex flex-col items-start p-6 gap-2">
                <CircleUserRound size={40} color="white" />
                <h2 className="text-white font-bold text-xl">Aluno nome</h2>
                <p className="text-white/65">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis ratione delectus debitis officiis, distinctio aliquam.
                  At, modi officia. Voluptatum quae minima, quis enim molestiae
                  dolorem possimus illo reprehenderit veritatis tenetur.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 cursor-pointer">
            <div className="w-[300px] h-[300px] rounded-md bg-black">
              <div className="flex flex-col items-start p-6 gap-2">
                <CircleUserRound size={40} color="white" />
                <h2 className="text-white font-bold text-xl">Aluno nome</h2>
                <p className="text-white/65">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis ratione delectus debitis officiis, distinctio aliquam.
                  At, modi officia. Voluptatum quae minima, quis enim molestiae
                  dolorem possimus illo reprehenderit veritatis tenetur.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hover:bg-black hover:text-white hover:border-black transition-all" />
        <CarouselNext className="hover:bg-black hover:text-white hover:border-black transition-all" />
      </Carousel>
    </section>
  );
}

export default OpinionsSection;
