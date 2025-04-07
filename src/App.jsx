import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project'


function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
