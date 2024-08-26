import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function PaymentSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black/90 h-[100vh] flex items-center flex-col justify-center">
      <h2 className="text-4xl text-white pb-8">Assine já</h2>

      <div className="bg-black w-[340px] h-[400px] flex flex-col items-center gap-8 p-6 rounded-md">
        <h2 className="text-[22px] text-white font-medium">
          {t("titleHemogasometria")}
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-xl text-white">12x R$ 350,00</p>
          <p className="text-sm text-white/65">{t("paymentType")}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl text-white">6x R$ 650,00</p>
          <p className="text-sm text-white/65">{t("paymentType")}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl text-white">R$ 3000,00</p>
          <p className="text-sm text-white/65">{t("secondPaymentType")}</p>
        </div>

        <Button className="w-44 h-10 rounded-full bg-transparent border-2 border-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all">
          {t("buttonSign")}
        </Button>
      </div>
    </section>
  );
}

export default PaymentSection;
