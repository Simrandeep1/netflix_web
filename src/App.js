import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import Modal from './components/Modal';
import Browse from './pages/Browse';
import SearchResults from './pages/SearchResults';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
  <>
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path="/signup" element={<SignUp/>} />
     <Route path="/signin" element={<SignIn/>} />
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/browse/:type' element={<Browse />}></Route>
        <Route path='/search' element={<SearchResults />}></Route>
      </Routes>
    </BrowserRouter>
    <Modal />
  </>
  );
}

export default App;