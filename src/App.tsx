import Modulo1 from "./assets/Captura de tela 2024-08-15 170518.png";
import Modulo2 from "./assets/Captura de tela 2024-08-15 121338.png";
import Modulo3 from "./assets/Captura de tela 2024-08-15 121303.png";
import Modulo4 from "./assets/Captura de tela 2024-08-19 190512.png";
import Modulo5 from "./assets/Captura de tela 2024-08-19 190529.png";
import Logotipo from "./assets/logotipo-descomplicando.png";

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
import {
  BadgeCheck,
  BookText,
  CircleUserRound,
  HeartPulse,
  Target,
  Users,
} from "lucide-react";

function App() {
  const images = [Modulo1, Modulo2, Modulo3, Modulo4, Modulo5];

  return (
    <>
      <NavigationBar />

      <section className="bg-black/90 h-[100vh] flex items-center flex-col">
        <h1 className="text-4xl text-white pt-28 pb-20">
          Conheça um pouco sobre o que temos para oferecer:
        </h1>
        <div className="bg-black w-[900px] h-[350px] flex items-center justify-center">
          <p className="text-white text-5xl">VÍDEO</p>
        </div>
      </section>

      <section className="bg-[#5B5B58] h-[100vh] flex items-center flex-col">
        <h2 className="text-4xl text-white pt-16 pb-8">
          Alguns dos Nossos Módulos
        </h2>
        <Button className="w-44 h-10 rounded-full bg-white border-none text-black hover:bg-teal-900 hover:text-white">
          Ver Curso Completo
        </Button>

        <Carousel className="w-[850px] py-8">
          <CarouselContent className="">
            {images.map((image, index) => (
              <CarouselItem className="lg:basis-1/3 cursor-pointer">
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

      <section className="bg-black/90 h-[100vh] flex items-center flex-col">
        <h2 className="text-4xl text-white pt-16 pb-8">
          Por Que Escolher o Descomplicando?
        </h2>

        <div className="flex items-center justify-center flex-wrap w-[1000px] gap-10">
          <div className="flex items-start flex-col w-[300px] gap-2">
            <Users size={30} color="white" />
            <h2 className="text-lg text-white font-bold">
              Criado e gerenciado por médicos!
            </h2>
            <p className="text-base text-white/65">
              O Descomplica é uma empresa criada, organizada e gerenciada por
              médicos, te auxiliar e orientar é o nosso maior objetivo.
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <HeartPulse size={30} color="white" />
            <h2 className="text-lg text-white font-bold">
              Amor pelo que se faz...
            </h2>
            <p className="text-base text-white/65">
              Nosso time ama o que faz. Oferecemos a vocês nosso entusiasmo,
              além da nossa excelente didática, tudo isso para que você venha
              junto com a gente!
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <BookText size={30} color="white" />
            <h2 className="text-lg text-white font-bold">
              Material de alta qualidade!
            </h2>
            <p className="text-base text-white/65">
              Aulas, PDF’s e questões diretamente das provas de residências
              respondidas e explicadas. Além da inteligência artificial
              integrada, com suporte 24 horas para suas dúvidas.
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <Target size={30} color="white" />
            <h2 className="text-lg text-white font-bold">Direto ao ponto!</h2>
            <p className="text-base text-white/65">
              Nossa equipe sabe exatamente o caminho necessário para conseguir
              alcançar seus sonhos.
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <BadgeCheck size={30} color="white" />
            <h2 className="text-lg text-white font-bold">Quem usa, aprova!</h2>
            <p className="text-base text-white/65">
              Aulas, PDF’s e questões diretamente das provas de residências
              respondidas e explicadas. Além da inteligência artificial
              integrada, com suporte 24 horas para suas dúvidas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#5B5B58] h-[100vh] flex items-center flex-col justify-center">
        <h2 className="text-4xl text-white pb-8">
          Depoimentos, quem faz, aprova!
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
                    At, modi officia. Voluptatum quae minima, quis enim
                    molestiae dolorem possimus illo reprehenderit veritatis
                    tenetur.
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
                    At, modi officia. Voluptatum quae minima, quis enim
                    molestiae dolorem possimus illo reprehenderit veritatis
                    tenetur.
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
                    At, modi officia. Voluptatum quae minima, quis enim
                    molestiae dolorem possimus illo reprehenderit veritatis
                    tenetur.
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
                    At, modi officia. Voluptatum quae minima, quis enim
                    molestiae dolorem possimus illo reprehenderit veritatis
                    tenetur.
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
                    At, modi officia. Voluptatum quae minima, quis enim
                    molestiae dolorem possimus illo reprehenderit veritatis
                    tenetur.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <footer className="flex w-full items-center justify-around py-12 px-12 bg-black">
        <div className="flex flex-col items-center gap-2">
          <img
            src={Logotipo}
            alt="Logotipo Descomplicando"
            className="w-[80px]"
          />
          <p className="text-white">© Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold">Termos e Ajuda</h2>
          <a href="#" className="text-white/65 hover:underline">
            Termos de uso
          </a>
          <a href="#" className="text-white/65 hover:underline">
            Políticas de privacidade
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold">Redes Sociais</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-white/65 flex items-center gap-2 hover:underline">
              <i className="fa-brands fa-instagram"></i>
              Instagram
            </a>

            <a href="#" className="text-white/65 flex items-center gap-2 hover:underline">
              <i className="fa-brands fa-whatsapp"></i>
              Whatsapp
            </a>

            <a href="https://reserva.ink/392896" target="_blank" className="text-white/65 flex items-center gap-2 hover:underline">
              <i className="fa-solid fa-store"></i>
              Nossa Loja
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
