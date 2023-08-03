import './index.css'
// import 'swiper/css/swiper.min.css';

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'
// import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Header from './components/Header'

function App() {

  return (
    <>
      < Header />
      < Banner />
      < About />

      < Skills />
      {/* < Main /> */}
      < Projects />

      < Contact />
      < Footer />
    </>
  )
}

export default App