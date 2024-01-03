import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface NavState {
  isShow: boolean;
}

// Define the initial state using that type
const initialState: NavState = {
  isShow: false,
};

export const NavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setIsShow: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
  },
});

export const { setIsShow } = NavSlice.actions;
export default NavSlice.reducer;
