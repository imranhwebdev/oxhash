import { React } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Marquee />
      <About />
      <Services />
      <Ecosystem />
      <Roadmap />
      {/* <Contact />
      <Footer /> */}
    </>
  )
}

export default App
