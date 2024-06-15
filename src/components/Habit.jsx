
import React from 'react';
import { Link } from 'react-router-dom';

const Habit = ({ habit }) => {
  return (
    <div className="habit-item">
      <h3>{habit.name}</h3>
      <Link to={`/habit/${habit.id}`}>View Details</Link>
    </div>
  );
};

export default Habit;

