import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHabitStatus } from '../redux/actions';

const HabitStatus = ({ habit, dayIndex }) => {
  const dispatch = useDispatch();
  const statuses = ['None', 'Done', 'Not done'];

  const handleChange = (e) => {
    dispatch(updateHabitStatus({ habitId: habit.id, dayIndex, status: e.target.value }));
  };

  return (
    <select value={habit.status[dayIndex]} onChange={handleChange}>
      {statuses.map((status, index) => (
        <option key={index} value={status}>{status}</option>
      ))}
    </select>
  );
};

export default HabitStatus;
