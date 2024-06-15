import React from 'react';
import { useSelector } from 'react-redux';
import Habit from './Habit';

const HabitList = () => {
  const habits = useSelector(state => state.habits.habits);

  return (
    <div >
      {habits.map(habit => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
