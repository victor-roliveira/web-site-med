import { memo } from "react";
import Logotipo from "../assets/logo-footer-descomplicando.png";
import instagramIcon from "../assets/instagram-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";
import storeIcon from "../assets/store-icon.svg";

import { useTranslation } from "react-i18next";

const Footer = memo(function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="sm:flex w-full sm:items-center sm:justify-around sm:py-12 sm:px-12 text-center py-5 space-y-10 bg-black">
      <div className="flex flex-col items-center gap-2">
        <img
          src={Logotipo}
          alt="Logotipo Descomplicando"
          className="w-[80px]"
          loading="lazy"
        />
        <p className="text-white">© {t("rights")}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold">{t("termsAndHelp")}</h2>
        <a href="#" className="text-white/65 hover:underline">
          {t("termsOfUse")}
        </a>
        <a href="#" className="text-white/65 hover:underline">
          {t("privacyPolicies")}
        </a>
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
    </footer>
  );
});

export default Footer;
