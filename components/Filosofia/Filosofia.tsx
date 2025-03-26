import React from "react";

function Filosofia() {
  return (
    <section className="bg-white py-12 ">
      <div className="container-custom">
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="image-reveal rounded-tr-3xl rounded-bl-3xl col-span-1 md:col-span-2 relative">
            <div className="absolute -left-4 -bottom-4 w-20 h-20 md:w-32 md:h-32 bg-[#d4bd7b] rounded-tl-xl rounded-br-xl float-animation z-10"></div>
            <img
              src="./rhuan.png"
              alt="caneta e papel"
              className="w-full  h-[300px] md:h-[400px] object-contain object-center rounded-tl-xl rounded-br-xl"
            />
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 lg:pl-8">
            <div className="relative pb-2">
              <h1 className="text-3xl md:text-4xl font-bold font-sans text-[#121a21]">
                Nossa filosofia:
              </h1>
              <div className="absolute bg-[#d4bd7b] w-16 md:w-20 h-1"></div>
            </div>

            <p className="font-semibold text-base md:text-lg lora text-[#121a21]">
              No nosso escritório, acreditamos que uma grande representação
              jurídica vai além do conhecimento da lei — é necessário um
              profundo entendimento das necessidades e objetivos de nossos
              clientes.
            </p>

            <p className="font-semibold text-base md:text-lg lora text-[#121a21]">
              Abordamos cada caso com atenção meticulosa aos detalhes,
              desenvolvendo estratégias jurídicas inovadoras que se alinham aos
              seus objetivos específicos. Nossos advogados não são apenas
              consultores jurídicos, mas parceiros de confiança em sua jornada
              rumo à solução.
            </p>

            <div className="relative">
              <div className="absolute bg-[#d4bd7b] h-16 md:h-20 w-2"></div>
              <blockquote className="pl-4 italic text-base md:text-lg text-gray-600 border-l-4 border-gray-300">
                "A relação entre advogado e cliente é sagrada. Honramos essa
                relação por meio de um compromisso inabalável, prática ética e
                defesa incansável."
              </blockquote>
            </div>

            <p
              className="text-right lora font-bold text-sm md:text-base"
              id="areas"
            >
              Rhuan Batista, fundador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filosofia;
