import Modulo1 from "./assets/Captura de tela 2024-08-15 170518.png";
import Modulo2 from "./assets/Captura de tela 2024-08-15 121338.png";
import Modulo3 from "./assets/Captura de tela 2024-08-15 121303.png";
import Modulo4 from "./assets/Captura de tela 2024-08-19 190512.png";
import Modulo5 from "./assets/Captura de tela 2024-08-19 190529.png";

import "./global.css";

import NavigationBar from "./components/navigation-bar";
import { Button } from "./components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

function App() {
  const images = [Modulo1, Modulo2, Modulo3, Modulo4, Modulo5];

  return (
    <>
      <NavigationBar />
      <section className="bg-black/90 h-[98vh] flex items-center flex-col">
        <h1 className="text-4xl text-white py-28">
          Conheça um pouco sobre o que temos para oferecer:
        </h1>
        <div className="bg-black w-[900px] h-[350px] flex items-center justify-center">
          <p className="text-white text-5xl">VÍDEO</p>
        </div>
      </section>
      <section className="bg-[#5B5B58] h-[100vh] flex items-center flex-col">
        <h2 className="text-4xl text-white pt-20 pb-8">
          Alguns dos Nossos Módulos
        </h2>
        <Button className="w-44 h-10 rounded-full bg-white border-none text-black hover:bg-teal-900 hover:text-white">
          Ver Curso Completo
        </Button>

        <Carousel className="w-[800px] py-8">
          <CarouselContent className="space-x-5">
            {images.map((image, index) => (
              <CarouselItem className="lg:basis-1/3">
                <img
                  src={image}
                  alt={`Módulo ${index + 1}`}
                  className="h-[450px] w-[800px] rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}

export default App;
