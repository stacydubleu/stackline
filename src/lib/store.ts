import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector,
  useStore,
} from 'react-redux';
import itemSlice from './itemSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      item: itemSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Adding three hooks to read state
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();
