import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ItemProps } from "../../../types";

// Types

type ListState = {
  list: ItemProps[];
  loading: boolean;
  error: any | null;
  total: number;
};

// Initial State
const initialState: ListState = {
  list: [],
  loading: false,
  error: null,
  total: 0,
};

// Reducers
const reducers = {
  // Add Item
  addItem: (state: ListState, action: PayloadAction<ItemProps>) => {
    state.list.push(action.payload);
  },

  // Remove Item
  removeItem: (state: ListState, action: PayloadAction<string>) => {
    state.list = state.list.filter((item) => item.id !== action.payload);
  },

  // Update Item
  updateItem: (state: ListState, action: PayloadAction<ItemProps>) => {
    const index = state.list.findIndex((item) => item.id === action.payload.id);
    state.list[index] = action.payload;
  },

  getTotal: (state: ListState) => {
    state.total = state.list.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
  },
};

// Slice
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers,
});

// Export Actions/Reducer
export const actions = { ...listSlice.actions };
export const reducer = listSlice.reducer;

export const selectList = (state: any) => state.list.list;
export const selectLoading = (state: ListState) => state.loading;
export const selectError = (state: ListState) => state.error;
export const selectTotal = (state: ListState) => state.total;
