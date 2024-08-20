/* Assets */
import Logotipo from "../assets/logotipo-navbar-descomplicando.png";
import BandeiraBrasil from "../assets/bandeira-brasil.png";
import BandeiraEua from "../assets/bandeira-eua.png";
import BandeiraEspanha from "../assets/bandeira-espanha.png";

/* Componentes */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Esconder a navbar ao rolar para baixo
    } else {
      setShowNavbar(true); // Mostrar a navbar ao rolar para cima
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-30 top-0 left-0 w-full p-2 bg-black flex items-center justify-around transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center mr-40">
        <a href="/" className="cursor-pointer">
          <img src={Logotipo} alt="Logotipo Descomplicando" className="w-20" />
        </a>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-10">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="text-white hover:text-gray-300 transition-all"
            >
              Sobre Nós
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
              <DropdownMenuTrigger
                className="text-white cursor-pointer outline-none hover:text-gray-300 transition-all"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center gap-1">
                  Cursos
                  {isOpen ? (
                    <ChevronUp size={18} className="mt-1" />
                  ) : (
                    <ChevronDown size={18} className="mt-1" />
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-none w-[360px] flex items-center flex-col p-6">
                <DropdownMenuItem asChild>
                  <a className="text-white cursor-pointer text-2xl">
                    Hemogasometria
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a className="text-white cursor-pointer text-2xl">Curso 2</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a className="text-white cursor-pointer text-2xl">Curso 3</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/support"
              className="text-white hover:text-gray-300 transition-all"
            >
              Suporte
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="text-white hover:text-gray-300 transition-all"
            >
              Conteúdo Extra
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <Select defaultValue="pt">
          <SelectTrigger className="text-white bg-transparent border-none rounded w-36 p-3">
            <SelectValue placeholder="Selecione o Idioma" />
          </SelectTrigger>
          <SelectContent className="bg-black border-none">
            <SelectItem value="pt" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>Português</p>
                <img
                  src={BandeiraBrasil}
                  alt="Bandeira do Brasil"
                  className="w-6"
                />
              </div>
            </SelectItem>
            <SelectItem value="en" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>Inglês</p>
                <img
                  src={BandeiraEua}
                  alt="Bandeira do Brasil"
                  className="w-6"
                />
              </div>
            </SelectItem>
            <SelectItem value="es" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>Espanhol</p>
                <img
                  src={BandeiraEspanha}
                  alt="Bandeira do Brasil"
                  className="w-6"
                />
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <button className="px-2 py-2 bg-teal-950 text-white rounded hover:bg-teal-800 transition-all w-36 font-bold">
          <p className="text-sm">Área do Aluno</p>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
