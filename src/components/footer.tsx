import Logotipo from "../assets/logotipo-descomplicando.png";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex w-full items-center justify-around py-12 px-12 bg-black">
      <div className="flex flex-col items-center gap-2">
        <img
          src={Logotipo}
          alt="Logotipo Descomplicando"
          className="w-[80px]"
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

      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold">{t("socialNetworks")}</h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.instagram.com/desc0mplicand0medicina/"
            target="_blank"
            className="text-white/65 flex items-center gap-2 hover:underline"
          >
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </a>

          <a
            href="#"
            className="text-white/65 flex items-center gap-2 hover:underline"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Whatsapp
          </a>

          <a
            href="https://reserva.ink/392896"
            target="_blank"
            className="text-white/65 flex items-center gap-2 hover:underline"
          >
            <i className="fa-solid fa-store"></i>
            {t("shop")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
