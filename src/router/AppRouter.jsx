import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { GlobalStyles } from "../styles/Global.styles";


const AppRouter = () => {

   
  return (
<BrowserRouter>
    <Navbar/>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
};

export default AppRouter;
