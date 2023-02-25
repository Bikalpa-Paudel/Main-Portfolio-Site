 import About from "./components/about/About"
 import Contact from "./components/contact/Contact"
 import Home from "./components/home/Home"
 import Navbar from "./components/navbar/Navbar"
 import Project from "./components/project/Project"

 export default function App(){
   return(
     <div className="app" id="home">
       <Navbar />
       <Home />
       <About />
       <Project />
       <Contact />
     </div>
   )
 }