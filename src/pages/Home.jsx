import React from 'react';
import HabitList from '../components/HabitList';

const Home = () => {
  return (
    <div className="container">
      <h1>Habit Tracker</h1>
      <HabitList />
    </div>
  );
};

export default Home;
