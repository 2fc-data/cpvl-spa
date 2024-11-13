import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PrivateMenuState {
  isPrivateMenuOpen: boolean;
}

const initialState: PrivateMenuState = {
  isPrivateMenuOpen: false,
};

const PrivateMenuSlice = createSlice({
  name: 'privateMenu',
  initialState,
  reducers: {
    togglePrivateMenu: (state) => {
      state.isPrivateMenuOpen = !state.isPrivateMenuOpen;
    },
    setPrivateMenuState: (state, action: PayloadAction<boolean>) => {
      state.isPrivateMenuOpen = action.payload;
    },
  },
});

export const { togglePrivateMenu, setPrivateMenuState } = PrivateMenuSlice.actions;
export default PrivateMenuSlice.reducer;
