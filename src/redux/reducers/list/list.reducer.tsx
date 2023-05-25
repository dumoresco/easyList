import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ItemProps } from "../../../types";

// Types

export const filterOptions = [
  {
    id: 1,
    name: "Preço crescente",
    icon: "sort-numeric-ascending",
  },
  {
    id: 2,
    name: "Preço decrescente",
    icon: "sort-numeric-descending",
  },

  {
    id: 5,
    name: "Nome crescente",
    icon: "sort-alphabetical-ascending",
  },
  {
    id: 6,
    name: "Nome decrescente",
    icon: "sort-alphabetical-descending",
  },
  {
    id: 3,
    name: "Quantidade crescente",
    icon: "sort-numeric-ascending",
  },
  {
    id: 4,
    name: "Quantidade decrescente",
    icon: "sort-numeric-descending",
  },
];

type ListState = {
  list: ItemProps[];
  loading: boolean;
  error: any | null;
  total: number;
  filter: number;
  filteredList: ItemProps[];
};

// Initial State
const initialState: ListState = {
  list: [],
  loading: false,
  error: null,
  total: 0,
  filter: 1,
  filteredList: [],
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
  setFilter: (state: ListState, action: PayloadAction<number>) => {
    state.filter = action.payload;
  },
  applyFilter: (state: ListState, action: PayloadAction<number>) => {
    state.filter = action.payload;
    switch (action.payload) {
      case 1:
        state.list.sort((a, b) => {
          return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
        });
        break;
      case 2:
        state.list.sort((a, b) => {
          return parseFloat(a.price) < parseFloat(b.price) ? 1 : -1;
        });
        break;
      case 3:
        state.list.sort((a, b) => {
          return a.quantity > b.quantity ? 1 : -1;
        });
        break;
      case 4:
        state.list.sort((a, b) => {
          return a.quantity < b.quantity ? 1 : -1;
        });
        break;
      case 5:
        state.list.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        break;
      case 6:
        state.list.sort((a, b) => {
          return a.name < b.name ? 1 : -1;
        });
        break;
      default:
        break;
    }
  },

  filterList: (state: ListState, action: PayloadAction<number>) => {
    state.filter = action.payload;
    reducers.applyFilter(state, action);
    state.filteredList = state.list;
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
export const selectFilter = (state: ListState) => state.filter;
export const selectFilteredList = (state: ListState) => state.filteredList;
