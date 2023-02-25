import NavBar from './NavBar';
import Home from "./Home";
import AboutUs from "./AboutUs";
import TheDen from "./TheDen";
import News from "./News";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/AboutUs" element = {<AboutUs/>} />
          <Route path = "/TheDen" element = {<TheDen/>} />
          <Route path = "/News" element = {<News/>} />
          <Route path = "/Projects" element = {<Projects/>} />
          <Route path = "/ContactUs" element = {<ContactUs/>} />
        </Routes>
      </div>
    </>
  )
}
export default App;