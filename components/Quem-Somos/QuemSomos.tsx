import { Briefcase, Landmark, Users } from "lucide-react";
import React from "react";

function QuemSomos() {
  return (
    <section className="bg-white pt-24 min-h-screen relative " id="me">
      <div className="container-custom flex flex-col justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="font-serif font-bold leading-tight animate-fade-in-delay text-4xl lg:text-5xl text-center">
            Quem somos:{" "}
          </h1>
          <div className="w-20 h-1 bg-[#d4bd7b] mx-auto mb-4"></div>
          <p className="text-center p-4 text-lg w-96 leading-tight lora font-semibold text-[#121a21]">
            Nosso escritório é empenhado na prática do direito civil. Nossa
            abordagem combina uma análise jurídica minuciosa com um pensamento
            estratégico e uma defesa incansável dos interesses de nossos
            clientes.
          </p>
        </div>
        <div className="pt-12 grid md:grid-cols-3">
          <div className="rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
            <Landmark className="h-8 w-8 text-[#d4bd7b]" />
            <h3 className="text-xl font-serif font-bold mb-4 mt-4">
              Excelência legal
            </h3>
            <p className="text-[#d4bd7b]-accent font-medium text-[#121a21]">
              Nossos advogados se formaram nas melhores faculdades de direito e
              têm consistentemente demonstrado excelência em todas as áreas do
              contencioso civil.
            </p>
          </div>
          <div className="rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
            <Users className="h-8 w-8 text-[#d4bd7b] " />
            <h3 className="text-xl font-serif font-bold mb-4 mt-4 text-[#121a21]">
              Abordagem Focada no Cliente
            </h3>
            <p className="text-[#d4bd7b]-accent font-medium text-[#121a21]">
              Construímos relações duradouras com nossos clientes, baseadas em
              confiança, comunicação transparente e resultados excepcionais.
            </p>
          </div>
          <div className="rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
            <Briefcase className="h-8 w-8 text-[#d4bd7b]" />
            <h3 className="text-xl font-serif font-bold mb-4 mt-4 text-[#121a21]">
              Resultados Comprovados
            </h3>
            <p
              className="text-[#d4bd7b]-accent font-medium text-[#121a21]"
              id="about"
            >
              Nosso histórico fala por si só. Tratamos com sucesso dezenas de
              casos, alcançando resultados favoráveis para nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
