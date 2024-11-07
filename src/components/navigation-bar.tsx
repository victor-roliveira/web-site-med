/* Assets */
import Logotipo from "../../public/logo-descomplicando.png";
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
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";
import { Link } from "react-router-dom";

interface DropdownMenuItem {
  to: string;
  label: string;
}

interface SelectItem {
  value: string;
  label: string;
  imgSrc: string;
}

const NavigationBar = memo(function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "pt"
  );

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = useCallback((lng: string) => {
    setSelectedLanguage(lng);
    localStorage.setItem("language", lng);
  }, []);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 50));
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const renderDropdownMenuItems = useCallback(
    (items: DropdownMenuItem[]) =>
      items.map(({ to, label }) => (
        <DropdownMenuItem asChild key={to}>
          <Link to={to} className="text-white cursor-pointer !text-[20px]">
            {label}
          </Link>
        </DropdownMenuItem>
      )),
    []
  );

  const renderSelectItems = useCallback(
    (items: SelectItem[]) =>
      items.map(({ value, label, imgSrc }) => (
        <SelectItem
          value={value}
          key={value}
          className="cursor-pointer text-white"
        >
          <div className="flex items-center space-x-2">
            <p>{label}</p>
            <img src={imgSrc} alt={label} className="w-6" />
          </div>
        </SelectItem>
      )),
    []
  );

  const menuItems = [
    { to: "/about", label: t("aboutUs") },
    { to: "/support", label: t("support") },
    { to: "#", label: t("extraContent") },
  ];

  const coursesItems = [
    { to: "/cursos/hemogasometria", label: "Hemogasometria" },
    { to: "#", label: "Ventilação Mecânica" },
  ];

  const languageItems = [
    { value: "pt", label: t("language1"), imgSrc: BandeiraBrasil },
    { value: "en", label: t("language2"), imgSrc: BandeiraEua },
    { value: "es", label: t("language3"), imgSrc: BandeiraEspanha },
  ];

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
            {menuItems.map(({ to, label }) => (
              <NavigationMenuItem key={to}>
                <Link
                  to={to}
                  className="text-white hover:text-gray-300 transition-all"
                >
                  {label}
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <DropdownMenu onOpenChange={setIsOpen}>
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
                  {renderDropdownMenuItems(coursesItems)}
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden sm:flex space-x-4">
        <Select value={selectedLanguage} onValueChange={changeLanguage}>
          <SelectTrigger className="text-white bg-transparent border-none rounded w-36 p-3">
            <SelectValue placeholder="Selecione o Idioma" />
          </SelectTrigger>
          <SelectContent className="bg-black border-none">
            {renderSelectItems(languageItems)}
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
        <DropdownMenu onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger className="text-white cursor-pointer outline-none hover:text-gray-300 transition-all">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-none w-full flex flex-col gap-2 p-6 items-center !text-sm">
            {menuItems.map(({ to, label }) => (
              <DropdownMenuItem asChild key={to}>
                <Link to={to} className="text-white cursor-pointer">
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <DropdownMenu onOpenChange={setIsOpen}>
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
                <DropdownMenuContent className="bg-black border-none w-[260px] flex items-center flex-col gap-2 p-2">
                  {renderDropdownMenuItems(coursesItems)}
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Select value={selectedLanguage} onValueChange={changeLanguage}>
                <SelectTrigger className="text-white bg-transparent border-none w-full p-3 hover:text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-none">
                  {renderSelectItems(languageItems)}
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
