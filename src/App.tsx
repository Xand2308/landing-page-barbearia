import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import HeroPage from './components/Hero'

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#111111] text-white">
      <Header />
      <HeroPage />
      <Footer />
    </div>
  )
}


export default App
