import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../pages/api/axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);

  return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);

  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');

  return data;
});

const initialState = {
  data: '',
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    // fetchAuth
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    }),
      builder.addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      }),
      builder.addCase(fetchAuth.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      }),
      // fetchAuthMe
      builder.addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      }),
      builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      }),
      builder.addCase(fetchAuthMe.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      }),
      // fetchRegister
      builder.addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      }),
      builder.addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      }),
      builder.addCase(fetchRegister.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
