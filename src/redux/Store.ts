import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './Slices/SidebarSlice';
import privateMenuSlice from './Slices/PrivateMenuSlice';

const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  privateMenu: privateMenuSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

