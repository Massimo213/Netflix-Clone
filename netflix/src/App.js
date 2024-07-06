import React from 'react';
import Navbar from './components/Navbar';
import {  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/account' element={
            <ProtectedRoute>
          <Account/>
          </ProtectedRoute>
          } />
      </Routes>
    </>
  );
}

export default App;
