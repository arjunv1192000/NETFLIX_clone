import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/Moviedetails/Moviedetails';

import { ComedyMovies, Originals, actions,RomanceMovies,HorrorMovies,trending } from './Urls';

import {  Route,BrowserRouter as Router } from 'react-router-dom';
import {  Routes } from 'react-router-dom';







function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <Rowpost url={Originals} title='Netflix Originals'/>
            <Rowpost url={trending} title='trending' isSmall={true}/>  
            <Rowpost url={actions} title='Action' isSmall={true}/>
            <Rowpost url={ComedyMovies} title='ComedyMovies' isSmall={true}/>
            <Rowpost url={RomanceMovies} title='Romance' isSmall={true}/>
            <Rowpost url={HorrorMovies} title='HorrorMovies' isSmall={true}/>
          </>
        } />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
      </Routes>

      <Footer/>
    </div>
  </Router>
  );
}

export default App;
