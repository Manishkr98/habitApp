import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({
        id: Date.now(),
        name: action.payload,
        status: Array(7).fill('None'),
      });
    },
    updateHabitStatus: (state, action) => {
      const { habitId, dayIndex, status } = action.payload;
      const habit = state.habits.find(habit => habit.id === habitId);
      if (habit) {
        habit.status[dayIndex] = status;
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitsSlice.actions;
export default habitsSlice.reducer;
