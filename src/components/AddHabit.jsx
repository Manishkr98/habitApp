import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/actions';
import Popup from './Popup';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit(name));
      setName('');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Habit name"
        />
        <button type="submit">Add Habit</button>
      </form>
      {showPopup && <Popup message="Habit added successfully!" />}
    </div>
  );
};

export default AddHabit;
