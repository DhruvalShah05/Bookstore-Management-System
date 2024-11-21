
import Home from "./home/Home";
import Courses from "./course/Courses";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contacts";

const App = () => {
  return (
    <>
  
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={ <Courses/>} />
      <Route path="/contact" element={ <Contact/>} />

     
    </Routes>
   
   
    </>
  )
}

export default App
