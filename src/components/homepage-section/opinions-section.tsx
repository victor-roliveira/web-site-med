import { CircleUserRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { useTranslation } from "react-i18next";

interface Opinion {
  name: string;
  feedback: string;
}

const opinions: Opinion[] = [
  {
    name: "Aluno nome",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ratione delectus debitis officiis, distinctio aliquam. At, modi officia. Voluptatum quae minima, quis enim molestiae dolorem possimus illo reprehenderit veritatis tenetur.",
  },
  {
    name: "Aluno nome",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ratione delectus debitis officiis, distinctio aliquam. At, modi officia. Voluptatum quae minima, quis enim molestiae dolorem possimus illo reprehenderit veritatis tenetur.",
  },
  {
    name: "Aluno nome",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ratione delectus debitis officiis, distinctio aliquam. At, modi officia. Voluptatum quae minima, quis enim molestiae dolorem possimus illo reprehenderit veritatis tenetur.",
  },
  {
    name: "Aluno nome",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ratione delectus debitis officiis, distinctio aliquam. At, modi officia. Voluptatum quae minima, quis enim molestiae dolorem possimus illo reprehenderit veritatis tenetur.",
  },
  {
    name: "Aluno nome",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ratione delectus debitis officiis, distinctio aliquam. At, modi officia. Voluptatum quae minima, quis enim molestiae dolorem possimus illo reprehenderit veritatis tenetur.",
  },
];

function OpinionCard({ name, feedback }: Opinion): JSX.Element {
  return (
    <div className="sm:w-[300px] sm:h-[300px] w-[250px] rounded-md bg-black">
      <div className="flex flex-col items-start p-6 gap-2">
        <CircleUserRound size={40} color="white" />
        <h2 className="text-white font-bold text-xl">{name}</h2>
        <p className="text-white/65">{feedback}</p>
      </div>
    </div>
  );
}

function OpinionsSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="bg-[#5B5B58] sm:h-[100vh] flex items-center flex-col justify-center py-8">
      <h2 className="sm:text-4xl text-white sm:pb-8 text-2xl">
        {t("titleOpinions")}
      </h2>

      <Carousel className="sm:w-[1000px] w-[250px] py-8">
        <CarouselContent>
          {opinions.map((opinion, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 cursor-pointer">
              <OpinionCard {...opinion} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-black hover:text-white hover:border-black transition-all" />
        <CarouselNext className="hover:bg-black hover:text-white hover:border-black transition-all" />
      </Carousel>
    </section>
  );
}

export default OpinionsSection;
