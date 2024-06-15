import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HabitStatus from '../components/HabitStatus';

const HabitDetail = () => {
  const { id } = useParams();
  const habit = useSelector(state => state.habits.habits.find(habit => habit.id === parseInt(id)));

  if (!habit) {
    return <div>Habit not found</div>;
  }

  return (
    <div>
      <h2>{habit.name}</h2>
      <div>
        {habit.status.map((status, index) => (
          <div key={index}>
            <span>Day {index + 1}</span>
            <HabitStatus habit={habit} dayIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitDetail;
