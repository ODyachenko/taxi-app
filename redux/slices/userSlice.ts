import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { User, LoginFormData, RegisterFormData } from '@/types';
import { supabase } from '@/supabase/settings';
import { RedirectType } from '@/node_modules/next/navigation';

type LoginUserType = {
  data: LoginFormData;
  redirect: RedirectType;
};

type RegisterUserType = {
  data: RegisterFormData;
  redirect: RedirectType;
};

// Log in user
export const loginUser = createAsyncThunk<
  undefined,
  LoginUserType,
  { rejectValue: string }
>('user/loginUser', async function ({ data, redirect }, { rejectWithValue }) {
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message);
    return rejectWithValue(error.message);
  }
  redirect('/home');
});

// Sign Up User
export const registerUser = createAsyncThunk<
  undefined,
  RegisterUserType,
  { rejectValue: string }
>(
  'user/registerUser',
  async function ({ data, redirect }, { rejectWithValue }) {
    const { error } = await supabase.auth.signUp(data);

    if (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
    redirect('/home');
  }
);

// Define a type for the slice state
interface UserState {
  isAuth: boolean;
  currentUser: User | [];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  isAuth: false,
  currentUser: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = {
        id: action.payload.user.id,
        email: action.payload.user.email,
        phone: action.payload.user.phone,
        fullName: action.payload.user.user_metadata.fullName,
        avatarUrl: action.payload.user.user_metadata.avatarUrl,
      };
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = true;
      })
      // .addCase(logoutUser.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(logoutUser.fulfilled, (state) => {
      //   state.loading = false;
      //   state.isAuth = false;
      // })
      // .addCase(updateUserData.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(updateUserData.fulfilled, (state) => {
      //   state.loading = false;
      //   // @TODO
      //   state.isAuth = false;
      // })
      // .addCase(uploadAvatar.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(uploadAvatar.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.avatar = `${process.env.REACT_APP_STORAGE_URI}/${action.payload.path}`;
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { setCurrentUser, setIsAuth } = userSlice.actions;
export default userSlice.reducer;
