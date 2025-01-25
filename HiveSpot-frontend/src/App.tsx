import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className="min-h-screen bg-gray-100 grid grid-cols-1">
        <Header />
        <Hero />
        <MainContent />
        <Footer />
      </div>      
    </>
  )
}

export default App
