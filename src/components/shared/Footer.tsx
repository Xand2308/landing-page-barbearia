import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#0a0a0a] border-t border-[rgba(255,175,55,0.2)] py-8">
      <div className="max-w-[360] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#a0a0a0] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ney Cabeleleiro. Todos os direitos
            reservados.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[#d4af37] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <FaFacebook className="text-4xl" />
            </a>

            <a
              href="#"
              className="text-[#d4af37] hover:text-white transition-colors duration-30 cursor-pointer"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
