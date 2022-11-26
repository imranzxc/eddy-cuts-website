import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../pages/api/axios';

export const addNews = createAsyncThunk('add/news', async ({ values, image }) => {
  const { data } = await axios.post('/posts', {
    ...values, 
    ImageUrl: image
  });

  return data;
});

export const removeNews = createAsyncThunk('remove/news', async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);

  return data;
});

export const fetchNews = createAsyncThunk('fetch/news', async () => {
  const { data } = await axios.get('/posts');

  return data;
});

export const fetchNewsId = createAsyncThunk('fetch/newsId', async (id) => {
  const { data } = await axios.get(`/posts/${id}`);

  return data;
});

export const patchNews = createAsyncThunk('patch/news', async (params, id) => {
  const { data } = await axios.patch(`/posts/${id}`, params);

  return data;
});

const initialState = {
  loading: false,
  news: [],
  error: null,
  newsId: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNews.fulfilled, (state, action) => {
      state.news.push(action.payload);
    });
    builder.addCase(removeNews.fulfilled, (state, action) => {
      state.news = state.news.filter((el, index) => el._id !== action.payload);
    });
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchNewsId.fulfilled, (state, action) => {
      state.newsId = action.payload;
    });
    builder.addCase(fetchNewsId.pending, (state) => {
      state.newsId = [];
    });
  },
});

export const newsReducer = newsSlice.reducer;
