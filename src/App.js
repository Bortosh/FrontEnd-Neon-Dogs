import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';
import NavBar from './pages/navBar/NavBar';
import Details from './pages/details/Details';
import CreateDogs from './components/createDogs/CreateDogs';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path = '/'  element={<LandingPage />} />
          <Route exact path = '/home' element={<Home />} />
          <Route exact path = '/details/:id' element={<Details />} />
          <Route exact path = '/createdogs' element={<CreateDogs />} />
          <Route exact path = '*' element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
