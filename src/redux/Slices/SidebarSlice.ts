import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isSidebarOpen: unknown;
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
  isSidebarOpen: undefined
};

const SidebarSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarState } = SidebarSlice.actions;
export default SidebarSlice.reducer;
