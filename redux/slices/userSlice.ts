import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { User } from '@/types';

// Define a type for the slice state
interface UserState {
  isAuth: boolean;
  currentUser: User | [];
}

// Define the initial state using that type
const initialState: UserState = {
  isAuth: false,
  currentUser: [],
};

export const userSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<User>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setCurrentUser, setIsAuth } = userSlice.actions;
export default userSlice.reducer;
