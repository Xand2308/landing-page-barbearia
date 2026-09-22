import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
