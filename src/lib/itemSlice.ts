import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RouteType } from 'next/dist/lib/load-custom-routes';
import { fetchData } from '@/utils/mockApi';

export interface ItemState {
  itemData: [Object];
  isLoading: boolean;
  isError: boolean | string | null;
}

const initialState = {
  itemData: [{}],
  isLoading: false,
  isError: false,
} satisfies ItemState as ItemState;

export const fetchItemData = createAsyncThunk('fetchItemData', async () => {
  try {
    const res = await fetchData();
    return res;
  } catch (e) {
    throw Error('error fetching data');
  }
});

const itemSlice = createSlice({
  name: 'itemData',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchItemData.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchItemData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemData = action.payload;
    });
    builder.addCase(fetchItemData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || true;
    });
  },
});

export default itemSlice.reducer;
