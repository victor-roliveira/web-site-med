import { memo } from "react";
import Logotipo from "../assets/logo-footer-descomplicando.png";
import logoBC from "../assets/logo-bc.png";
import instagramIcon from "../assets/instagram-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";
import storeIcon from "../assets/store-icon.svg";

import { useTranslation } from "react-i18next";

const Footer = memo(function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black text-center py-5 sm:py-12 sm:px-12">
      <div className="sm:flex sm:items-center sm:justify-around space-y-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={Logotipo}
            alt="Logotipo Descomplicando"
            className="w-[80px]"
            loading="lazy"
          />
          <p className="text-white">© {t("rights")}</p>
        </div>
        <div className="md:w-[600px] px-5 md:p-0">
          <p className="text-white text-sm">
            POLÍTICA DE PRIVACIDADE: A Política de Privacidade foi elaborada em
            conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014
            (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de
            agosto de 2018 (Lei de Proteção de Dados Pessoais) e com o
            Regulamento UE n. 2016/679 de 27 de abril de 2016 (Regulamento Geral
            Europeu de Proteção de Dados Pessoais - RGDP)
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-white font-bold">{t("socialNetworks")}</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.instagram.com/desc0mplicand0medicina/"
              target="_blank"
              className="text-white/65 flex items-center gap-2 hover:underline"
            >
              <img src={instagramIcon} alt="Ícone Instagram" />
              Instagram
            </a>

            <a
              href="#"
              className="text-white/65 flex items-center gap-2 hover:underline"
            >
              <img src={whatsappIcon} alt="Ícone Whatsapp" />
              Whatsapp
            </a>

            <a
              href="https://reserva.ink/392896"
              target="_blank"
              className="text-white/65 flex items-center gap-2 hover:underline"
            >
              <img src={storeIcon} alt="Ícone Store" />
              {t("shop")}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        <p className="text-white">Desenvolvido por <strong>Brothers</strong> Company</p>
        <img src={logoBC} alt="logomarca Brothers Company" width={20} />
      </div>
    </footer>
  );
});

export default Footer;
