import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Instagram,
  Linkedin,
} from "lucide-react";
import React from "react";

function Contato() {
  return (
    <footer
      className="bg-[#121a21] text-white relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-lawyer-gold opacity-5"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-lawyer-gold opacity-5"></div>

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Contato:
            </h2>
            <div className="w-20 h-1 bg-lawyer-gold mx-auto mb-8"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12 lora">
              Estamos aqui para ajudar com suas dúvidas e preocupações
              jurídicas. Entre em contato conosco por meio de nossos canais nas
              redes sociais.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mb-16">
            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://x.com/RhuanBAdvogado"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                aria-label="X"
              >
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-3 transition-all group-hover:bg-[#d4bd7b] group-hover:text-lawyer-dark">
                  <img
                    className="h-8 w-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                  ></img>
                </div>
              </a>

              <a
                href="https://www.instagram.com/rhuannascimento.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                aria-label="Instagram"
              >
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-3 transition-all group-hover:bg-[#d4bd7b] group-hover:text-lawyer-dark">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-1946323-1646407.png?f=webp"
                    className="h-16 w-16 object-cover"
                  />
                </div>
              </a>

              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                aria-label="wpp"
              >
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-3 transition-all group-hover:bg-[#d4bd7b] group-hover:text-lawyer-dark">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                    className="h-12 w-12"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="h-8 w-8 text-[#d4bd7b]" />
                <span className="text-xl font-serif font-semibold">
                  <span className="text-[#d4bd7b] font-sans">
                    Rhuan Batista
                  </span>
                  <span className="text-[#d4bd7b] font-sans">
                    {" "}
                    Advogados Associados
                  </span>
                </span>
              </div>

              <p className="text-white/70 max-w-md mb-6 lora">
                Rhuan Batista Advogados Associados é um renomado escritório de
                advocacia civil dedicado a oferecer uma representação jurídica
                excepcional, com integridade, expertise e atenção personalizada.
              </p>

              <div className="flex items-center space-x-5">
                <a
                  href="https://www.instagram.com/rhuannascimento.adv"
                  className="text-white/70 hover:text-[#d4bd7b]transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-1946323-1646407.png?f=webp"
                    className="h-12 w-12 object-cover"
                  />
                </a>
                <a
                  href="https://x.com/RhuanBAdvogado"
                  className="text-white/70 hover:text-[#d4bd7b] transition-colors"
                  aria-label="X"
                  target="_blank"
                >
                  <img
                    className="h-8 w-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/2048px-X_icon.svg.png"
                  ></img>
                </a>
                <a
                  href="https://api.whatsapp.com/message/KRAEZSK5EOMFG1?autoload=1&app_absent=0"
                  className="text-white/70 hover:text-[#d4bd7b] transition-colors"
                  aria-label="WhatsApp"
                  target="_blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                    className="h-8 w-8"
                  />
                </a>
              </div>
            </div>
            <div className=" text-center md:text-left">
              <h4 className="text-white font-medium mb-4 lora">
                Links rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#d4bd7b] transition-colors lora"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white/70 hover:text-[#d4bd7b] transition-colors lora"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#areas"
                    className="text-white/70 hover:text-[#d4bd7b] transition-colors lora"
                  >
                    Áreas de atuação
                  </a>
                </li>
                <li>
                  <a
                    href="#me"
                    className="text-white/70 hover:text-[#d4bd7b] transition-colors lora"
                  >
                    Quem somos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/60 text-sm lora">
            <p>
              © {new Date().getFullYear()} Rhuan Batista Advogados Associados.
              Todos os direitos reservados.
            </p>
            <p className="mt-4">
              Desenvolvido e criado por{" "}
              <a
                href="https://wa.me/5551980703636?text=Oi,%20tenho%20interesse%20em%20contratar%20você%20para%20fazer%20um%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500  font-semibold hover:text-blue-700 hover:underline transition duration-300 lora"
              >
                Vítor Cunha
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contato;
