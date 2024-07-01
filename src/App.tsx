import React, { Profiler } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Membership from './components/Membership';
import Clients from './components/Clients';
import Progress from './components/Progress';
import Popup from './components/Popup';




function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Signup />} />
        <Route path='/Dashboard/chat' element ={<Chat />} />
        <Route path="/Dashboard/profile" element={<Profile /> } />
        <Route path="/Dashboard/members" element={<Membership />} />
        <Route path="/Dashboard/clients" element={<Clients />} />
        <Route path='/dashboard/progress' element={<Progress />} />


       </Routes>
    </Router>
  );
}

export default App;
