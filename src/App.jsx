import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route , Routes , Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar";
const App=()=>{
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/service" Component={Service}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/redirect" element={ <Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;