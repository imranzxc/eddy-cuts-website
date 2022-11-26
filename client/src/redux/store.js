import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slice/auth';
import { newsReducer } from './slice/news';
import { productsReducer } from './slice/products';

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    products: productsReducer
  },
});

export default store;
