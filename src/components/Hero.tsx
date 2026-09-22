import { FaWhatsapp } from "react-icons/fa";
import HeroBarberShop from "../assets/hero-barbershop.jpg";

const HeroPage = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HeroBarberShop}
          alt="BarberShop"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full translate-x-9 max-w-[3xl]" >
        <h1 className="text-3xl font-bold -translate-y-20">
          Bem vindo à Barbearia Navalha
        </h1>
        <div className="mb-6">
          <h1 className="text-[36px] leading-[0.94] font-normal text-white">
            Corte na régua,
            <br />
            Barba alinhada, <br />e atendimento de respeito.
          </h1>
        </div>

        <div className="flex flex-col gap-6 max-w-[180]">
          <div className="max-w-[xl]">
            <p className="text-[16.3px] leading-[1.72] text-[#d4af37] max-w-xl">
              Transforme seu visual em nossa barbearia. Profissional
              especializados, ambiente premium e serviço de exelência para
              homens moderno.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex flex-row items-center gap-2 px-6 py-3 border-2 border-[#d4af37] rounded-lg translate-y-20 cursor-pointer hover:bg-amber-50 transition-colors duration-300"><FaWhatsapp className="text-xl text-[#d4af37]" />
              <span className="text-[14.1px] leading-[1.68] font-semibold text-[#d4af37]">
                Agenda no WhastApp
              </span>
            </button>
            <button className="px-6 py-3 border-2 border-[#d4af37] rounded-lg translate-y-20 cursor-pointer hover:bg-amber-50">
              <span className="text-[14.3px] leading-[1.68] font-semibold text-[#d4af37]">
                Ver Serviços
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
