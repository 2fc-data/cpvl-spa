import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './Slices/SidebarSlice';

export const Store = configureStore({
  reducer: combineReducers({
    sidebar: sidebarReducer,
  }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
