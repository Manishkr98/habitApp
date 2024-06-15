import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import HabitDetail from './pages/HabitDetail';
import AddHabit from './components/AddHabit';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="/habit/:id" element={<HabitDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
