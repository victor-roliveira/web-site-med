import { Button } from "@/components/ui/button";
import CapaCursoHemogasometria from "../assets/Captura de tela 2024-08-23 104934.png";
import { BookOpen, Brain, CirclePlay } from "lucide-react";
import Footer from "@/components/footer";

function CursoHemogasometria() {
  return (
    <>
      <section className="bg-black/90 h-[100vh] flex items-center justify-center gap-44">
        <img
          src={CapaCursoHemogasometria}
          alt="Capa do Curso Hemogasometria"
          className="w-[300px] h-[400px] rounded-md"
        />

        <div className="flex flex-col items-center gap-4 w-[400px] text-white">
          <p className="text-white/65 text-lg">
            Faça parte do grupo, venha aprender!
          </p>
          <h2 className="text-4xl font-bold pb-2">HEMOGASOMETRIA</h2>

          <p className="text-white/65 text-xl text-center">
            São disponibilizadas videoaulas, PDF’s e resoluções de questões
            diretamente de provas sobre todos os nossos módulos. Tudo isso para
            que você não fique para trás e esteja sempre à frente.
          </p>
          <Button className="w-44 h-10 rounded-full bg-transparent border-2 border-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all">
            Inscreva-se
          </Button>
        </div>
      </section>

      <section className="bg-black h-[80vh] flex items-center flex-col">
        <h2 className="text-4xl text-white pt-16 pb-8">Recursos Disponíveis</h2>

        <div className="flex items-center justify-center flex-wrap w-full gap-10 mt-[100px]">
          <div className="flex items-start flex-col w-[300px] gap-2">
            <BookOpen size={46} color="white" />
            <h2 className="text-3xl text-white font-bold">
              Conteúdo exclusivo
            </h2>
            <p className="text-base text-white/65">
              6 módulos, mais de 40 horas de conteúdos e questões sobre o
              assunto.
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <CirclePlay size={46} color="white" />
            <h2 className="text-3xl text-white font-bold">Videoaulas</h2>
            <p className="text-base text-white/65">
              Inúmeras aulas disponíveis para seu acesso, assista e revise
              quantas vezes precisar.
            </p>
          </div>

          <div className="flex items-start flex-col w-[300px] gap-2">
            <Brain size={46} color="white" />
            <h2 className="text-3xl text-white font-bold">I.A Integrada</h2>
            <p className="text-base text-white/65">
              Inteligência Artificial integrada na plataforma para retirar
              qualquer dúvida sobre qualquer assunto!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black/90 h-[100vh] flex items-center flex-col justify-center">
        <h2 className="text-4xl text-white pb-8">Assine já</h2>

        <div className="bg-black w-[340px] h-[400px] flex flex-col items-center gap-8 p-6 rounded-md">
          <h2 className="text-3xl text-white font-medium">Hemogasometria</h2>
          <div className="flex flex-col items-center">
            <p className="text-xl text-white">12x R$ 350,00</p>
            <p className="text-sm text-white/65">Cartão</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl text-white">6x R$ 650,00</p>
            <p className="text-sm text-white/65">Cartão</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl text-white">R$ 3000,00</p>
            <p className="text-sm text-white/65">Á vista</p>
          </div>

          <Button className="w-44 h-10 rounded-full bg-transparent border-2 border-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all">
            Assinar
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CursoHemogasometria;
