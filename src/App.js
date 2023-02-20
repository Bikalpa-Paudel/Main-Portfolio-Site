import About from "./components/about/About"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"

export default function App(){
  return(
    <div className="app" id="home">
      <Navbar />
      <Home />
      <About />
    </div>
  )
}