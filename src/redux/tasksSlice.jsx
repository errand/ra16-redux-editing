import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task
      }
      state.push(newTask);
    },
    deleteAction: (state, action)=>{
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
});

export const {addAction, deleteAction} = tasksSlice.actions;

export default tasksSlice.reducer;
