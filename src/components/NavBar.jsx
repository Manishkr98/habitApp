
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Habit</Link>
    </nav>
  );
};

export default NavBar;
