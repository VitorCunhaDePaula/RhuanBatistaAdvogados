import { Gavel } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 pt-24 place-items-center">
          <div className="flex flex-col gap-8 md:gap-12 px-8 md:px-0 text-center md:text-left">
            <h1 className="text-4xl text-[#121a21] lg:text-5xl font-serif font-bold leading-tight animate-fade-in-delay">
              JUSTIÇA É MAIS QUE UM{" "}
              <span className="text-[#d4bd7b]">VEREDÍTO</span>. É A NOSSA
              PROMESSA.
            </h1>
            <p className="text-[#121a21] font-semibold md:text-2xl lora">
              Com compromisso, transparência e dedicação, estamos ao seu lado
              para garantir que seus direitos sejam sempre defendidos com
              excelência.
            </p>
            <div className="flex gap-2 flex-col md:flex-row">
              <Button className="bg-[#121a21] text-lg p-6 cursor-pointer lora">
                <a
                  href="https://api.whatsapp.com/message/KRAEZSK5EOMFG1?autoload=1&app_absent=0"
                  target="_blank"
                  className="w-full"
                >
                  Agendar Consulta
                </a>
              </Button>

              <Button className="bg-white lora border hover:bg-accent cursor-pointer border-[#121a21] text-[#121a21] text-lg p-6">
                <a href="#areas">Nossa área de atuação</a>
              </Button>
            </div>
          </div>

          <div className="relative ">
            <img
              src="hero.avif"
              alt="Themis"
              className="min-w-full mt-12 h-screen pt-0 object-cover object-center rounded-br-lg rounded-tl-lg "
            />
            <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-[#d4bd7b] rounded-tl-xl rounded-br-xl float-animation"></div>
            <div className="absolute left-20 -bottom-8 w-64 rounded-lg bg-white/90 backdrop-blur-sm p-4 shadow-lg float-animation">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-lawyer-gold/20 p-3">
                  <Gavel className="h-6 w-6 text-lawyer-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lawyer-text">
                    Excelência jurídica
                  </h4>
                  <p className="text-sm text-lawyer-accent font-semibold">
                    na área cível
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
