import React from "react";
import {
  Home,
  ShoppingCart,
  Vote,
  FileText,
  Globe,
  Briefcase,
} from "lucide-react";
import { Button } from "../ui/button";

const legalServices = [
  {
    title: "Direito Imobiliário",
    icon: <Home className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Atuamos na regularização de imóveis, contratos de compra e venda, locação e questões condominiais.",
  },
  {
    title: "Direito do Consumidor",
    icon: <ShoppingCart className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Defendemos consumidores em casos de fraudes, produtos defeituosos e práticas abusivas.",
  },
  {
    title: "Direito Eleitoral",
    icon: <Vote className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Prestamos assessoria em campanhas, regularização de candidaturas e defesa em ações eleitorais.",
  },
  {
    title: "Obrigações Cíveis",
    icon: <FileText className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Acompanhamos processos de responsabilidade civil, indenizações e contratos entre particulares.",
  },
  {
    title: "Direito Digital",
    icon: <Globe className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Auxiliamos em proteção de dados, crimes cibernéticos e conformidade com a legislação digital.",
  },
  {
    title: "Direito Trabalhista",
    icon: <Briefcase className="h-8 w-8 text-[#d4bd7b]" />,
    description:
      "Representamos trabalhadores e empresas em ações trabalhistas, acordos e compliance empresarial.",
  },
];

function Areas() {
  return (
    <div className="bg-[#d4bd7b]/30 min-h-screen pt-12">
      <div className="container-custom flex flex-col gap-12">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="font-serif font-bold leading-tight animate-fade-in-delay text-4xl lg:text-5xl text-center">
            Áreas de atuação:{" "}
          </h1>
          <div className="w-20 h-1 bg-[#d4bd7b] mx-auto mb-6"></div>
          <p className="text-center p-4 text-lg w-96 leading-tight lora font-semibold text-[#121a21]">
            Oferecemos serviços jurídicos abrangentes em uma ampla variedade de
            questões cíveis, trazendo conhecimento especializado e pensamento
            estratégico para cada caso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {legalServices.map((x, i) => {
            const { description, icon, title } = x;
            return (
              <div
                key={i}
                className="rounded-xl p-8 transform transition-all bg-white duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                {icon}
                <h3 className="text-xl font-serif font-bold mb-4 mt-4 text-[#121a21]">
                  {title}
                </h3>
                <p className="text-[#d4bd7b]-accent font-medium text-[#121a21]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-lg p-8 grid grid-cols-5 gap-8 mb-12">
          <div className="flex flex-col gap-8 col-span-5 md:col-span-3 p-4">
            <h1 className="font-sans text-4xl font-bold text-[#121a21]">
              Precisa de ajuda ?
            </h1>
            <p className="text-lg lora font-semibold text-[#121a21]">
              Nossa equipe de advogados experientes está pronta para ajudá-lo
              com qualquer dúvida ou preocupação jurídica. Oferecemos consultas
              personalizadas para discutir sua situação específica e fornecer
              orientação especializada.
            </p>
            <a href="https://api.whatsapp.com/message/KRAEZSK5EOMFG1?autoload=1&app_absent=0">
              <Button className="bg-[#121a21] text-lg p-6 cursor-pointer lora w-56">
                Agende uma Consulta
              </Button>
            </a>
          </div>
          <img
            src="./adv.avif"
            className="rounded object-cover object-center md:col-span-2 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Areas;
