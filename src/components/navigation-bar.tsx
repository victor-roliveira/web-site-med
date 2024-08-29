/* Assets */
import Logotipo from "../assets/logo-descomplicando.png";
import BandeiraBrasil from "../assets/bandeira-brasil.png";
import BandeiraEua from "../assets/bandeira-eua.png";
import BandeiraEspanha from "../assets/bandeira-espanha.png";

/* Componentes */
import {
  NavigationMenu,
  NavigationMenuItem,
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
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";
import { Link } from "react-router-dom";

const NavigationBar = memo(function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { t } = useTranslation();

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
  }, []);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <nav
      className={`fixed z-30 top-0 left-0 w-full p-2 bg-black flex items-center justify-around transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mr-40">
        <Link to="/" className="cursor-pointer">
          <img
            src={Logotipo}
            alt="Logotipo Descomplicando"
            className="w-20"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="hidden sm:flex">
        <NavigationMenu>
          <NavigationMenuList className="space-x-10">
            <NavigationMenuItem>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-all"
              >
                {t("aboutUs")}
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
                <DropdownMenuTrigger
                  className="text-white cursor-pointer outline-none hover:text-gray-300 transition-all"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center gap-1">
                    {t("courses")}
                    {isOpen ? (
                      <ChevronUp size={18} className="mt-1" />
                    ) : (
                      <ChevronDown size={18} className="mt-1" />
                    )}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-none w-[360px] flex items-center flex-col gap-2 p-6">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/cursos/hemogasometria"
                      className="text-white cursor-pointer !text-[23px]"
                    >
                      Hemogasometria
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="#"
                      className="text-white cursor-pointer !text-[23px]"
                    >
                      Ventilação Mecânica
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/support"
                className="text-white hover:text-gray-300 transition-all"
              >
                {t("support")}
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="#"
                className="text-white hover:text-gray-300 transition-all"
              >
                {t("extraContent")}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden sm:flex space-x-4">
        <Select defaultValue="pt" onValueChange={changeLanguage}>
          <SelectTrigger className="text-white bg-transparent border-none rounded w-36 p-3">
            <SelectValue placeholder="Selecione o Idioma" />
          </SelectTrigger>
          <SelectContent className="bg-black border-none">
            <SelectItem value="pt" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>{t("language1")}</p>
                <img
                  src={BandeiraBrasil}
                  alt="Bandeira do Brasil"
                  className="w-6"
                />
              </div>
            </SelectItem>
            <SelectItem value="en" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>{t("language2")}</p>
                <img
                  src={BandeiraEua}
                  alt="Bandeira do Brasil"
                  className="w-6"
                />
              </div>
            </SelectItem>
            <SelectItem value="es" className="cursor-pointer text-white">
              <div className="flex items-center space-x-2">
                <p>{t("language3")}</p>
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
          <a
            href="https://members.descomplicandomedicina.com.br/login"
            className="text-sm"
            target="_blank"
          >
            {t("studentArea")}
          </a>
        </button>
      </div>

      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white cursor-pointer outline-none hover:text-gray-300 transition-all">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-none w-full flex flex-col gap-2 p-6 items-center !text-sm">
            <DropdownMenuItem asChild>
              <Link to="/about" className="text-white cursor-pointer">
                {t("aboutUs")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
                <DropdownMenuTrigger
                  className="text-white cursor-pointer outline-none hover:text-gray-300 transition-all"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center gap-1">
                    {t("courses")}
                    {isOpen ? (
                      <ChevronUp size={18} className="mt-1" />
                    ) : (
                      <ChevronDown size={18} className="mt-1" />
                    )}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-none w-[300px] flex items-center flex-col gap-2 p-6">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/cursos/hemogasometria"
                      className="text-white cursor-pointer !text-[18px]"
                    >
                      Hemogasometria
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="#"
                      className="text-white cursor-pointer !text-[18px]"
                    >
                      Ventilação Mecânica
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/support" className="text-white cursor-pointer">
                {t("support")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/" className="text-white cursor-pointer">
                {t("extraContent")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Select defaultValue="pt" onValueChange={changeLanguage}>
                <SelectTrigger className="text-white bg-transparent border-none w-full p-3 hover:text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-none">
                  <SelectItem value="pt" className="cursor-pointer text-white">
                    <div className="flex items-center space-x-2">
                      <p>{t("language1")}</p>
                      <img
                        src={BandeiraBrasil}
                        alt="Bandeira do Brasil"
                        className="w-6"
                      />
                    </div>
                  </SelectItem>
                  <SelectItem value="en" className="cursor-pointer text-white">
                    <div className="flex items-center space-x-2">
                      <p>{t("language2")}</p>
                      <img
                        src={BandeiraEua}
                        alt="Bandeira do Brasil"
                        className="w-6"
                      />
                    </div>
                  </SelectItem>
                  <SelectItem value="es" className="cursor-pointer text-white">
                    <div className="flex items-center space-x-2">
                      <p>{t("language3")}</p>
                      <img
                        src={BandeiraEspanha}
                        alt="Bandeira do Brasil"
                        className="w-6"
                      />
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="px-2 py-2 bg-teal-950 text-white rounded hover:bg-teal-800 transition-all w-full font-bold flex justify-center">
                <a
                  href="https://members.descomplicandomedicina.com.br/login"
                  className="text-sm"
                  target="_blank"
                >
                  {t("studentArea")}
                </a>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
});

export default NavigationBar;
