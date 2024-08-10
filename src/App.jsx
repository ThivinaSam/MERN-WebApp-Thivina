// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
// import Header from "./components/Header";


export default function App() {
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
     </Routes>
     </BrowserRouter>
  )
}
