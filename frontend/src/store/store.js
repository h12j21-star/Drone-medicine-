import { configureStore } from '@reduxjs/toolkit';
import ItemSlice from './ItemSlice';

const store = configureStore({
    reducer: ItemSlice,
});

export default store;
