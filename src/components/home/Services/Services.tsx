import { noto_200, noto_300 } from "@/utils/fonts";
import React from "react";
import { useTranslation } from "react-i18next";

interface IServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<IServicesProps> = (props) => {
  const { t } = useTranslation();

  return (
    <section id="services" className="!py-20">
      <div className="container m-auto px-4 xl:px-0">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-8xl mb-4 ${noto_200.className}`}>
            {t("home.services.welcome_message")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] m-auto place-items-center">
          <div className="w-full relative h-[400px] bg-center bg-no-repeat bg-cover bg-[url(https://static.wixstatic.com/media/431e299cfbd0452fa6fc71573f7bcedc.jpg/v1/crop/x_901,y_0,w_4698,h_4685/fill/w_516,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Casa%20de%20observaci%C3%B3n%20familiar.jpg)]">
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-50 saturate-200 backdrop-contrast-200"></div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 grid place-items-center text-white text-6xl uppercase ${noto_200.className}`}
            >
              <h3>{t("home.services.manage_property")}</h3>
            </div>
          </div>
          <div className="w-full relative h-[400px] bg-center bg-no-repeat bg-cover bg-[url(https://static.wixstatic.com/media/828c94_52456a954e954776959d35f2f0ec7c91~mv2.jpg/v1/crop/x_991,y_0,w_3998,h_3987/fill/w_516,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Terrenas%20VillaCamaleon%20Lockward-38.jpg)]">
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-50 saturate-200 backdrop-contrast-200"></div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 grid place-items-center text-white text-6xl uppercase ${noto_200.className}`}
            >
              <h3>{t("home.services.rent_property")}</h3>
            </div>
          </div>
          <div className="w-full relative h-[400px] bg-center bg-no-repeat bg-cover bg-[url(https://static.wixstatic.com/media/828c94_99a9c32bf6124fccb24f476b9f104076~mv2.jpg/v1/crop/x_995,y_0,w_4011,h_4000/fill/w_516,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/closeup-real-estate-agent-giving-couple-keys-their-new-home.jpg)]">
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-50 saturate-200 backdrop-contrast-200"></div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 grid place-items-center text-white text-6xl uppercase ${noto_200.className}`}
            >
              <h3>{t("home.services.sell_property")}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
