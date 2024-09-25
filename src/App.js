import React from 'react';
import About from './Pages/About';
import Awards from './Pages/Awards';
import Bios from './Pages/Bios';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Prize from './Pages/Prize';
import Services from './Pages/Services';
import Book from './Pages/Book';
import RegistrationForm from './Pages/Register';
import ApplicationForm from './Pages/ApplicationForm';
import Juliana from './Pages/Juliana';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/bios' element={<Bios />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/team' element={<OurTeam />} /> 
        <Route path='/prize' element={<Prize />} />
        <Route path='/services' element={<Services />} />
        <Route path='/book' element={<Book />} />
        <Route path='/ApplicationForm' element={<ApplicationForm />} />

        <Route path='/Juliana' element={<Juliana/>} />
=======

        <Route path='/register' element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
