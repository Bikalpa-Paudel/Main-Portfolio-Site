import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"

export default function App(){
  return(
    <div className="app">
      <Navbar />
      <Home />
    </div>
  )
}