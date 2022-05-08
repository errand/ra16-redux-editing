import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price
      }
      state.push(newTask);
    },
    deleteAction: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editAction: (state, action) => {
      return state.filter((item) => item.id === action.payload.id);
    }
  }
});

export const {addAction, deleteAction, editAction} = tasksSlice.actions;

export default tasksSlice.reducer;
