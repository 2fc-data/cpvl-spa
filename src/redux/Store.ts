import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/SidebarSlice';

export const store = configureStore({
  reducer: combineReducers({
    sidebar: sidebarSlice,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

