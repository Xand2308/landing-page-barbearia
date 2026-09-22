import logoBarbearia from "../../assets/logo-barbearia.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a] backdrop-blur-sm border-b border-[#d4af37]/20 overflow-x-hidden">
      <div className="flex items-center gap-2">
        <img
          src={logoBarbearia}
          alt="Logo Barbearia Navalha"
          className="w-10 h-10 rounded object-cover"
        />
        <span className="text-white">Ney Cabeleleiro</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto">
          <li className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left md:text-center py-2 cursor-pointer">
            Inicio
          </li>
          <li className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left md:text-center py-2 cursor-pointer">
            Serviços
          </li>
          <li className="text-white hover:text-[#d4af37] transition-colors duration-300 text-left md:text-center py-2 cursor-pointer">
            Contatos
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
