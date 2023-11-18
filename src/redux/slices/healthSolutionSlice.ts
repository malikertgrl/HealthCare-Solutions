import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface PillsModel {
  name: string;
  time: string;
  completed: string;
  amount: number;
  day: number;
}

// Define a type for the slice state
interface healthSolutionSlice {
  todos: PillsModel[];
}

// Define the initial state using that type
const initialState: healthSolutionSlice = {
  todos: [],
};

export const healthSolutionSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<PillsModel>) => {
      state.todos = [...state.todos, action.payload];
    },
    // filteredTodo: (state, action: PayloadAction<Pills[]>) => {
    //   state.todos = action.payload;
    // },
  },
});

export const {addTodo} = healthSolutionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default healthSolutionSlice.reducer;
