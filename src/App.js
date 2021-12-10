import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Doctors from './pages/Home/Doctors/Doctors';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import DoctorDetail from './pages/Home/Doctors/DoctorDetail/DoctorDetail';
// import doctorContext from './context/DoctorContext';
import DoctorContext from './context/DoctorContext';


function App() {
  return (
    <div >
      <DoctorContext>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="services" element={<Services />} />

          <Route path="doctors" element={<Doctors />}>
            <Route path=":doctorId" element={<DoctorDetail />}></Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </DoctorContext>
    </div>
  );
}

export default App;
