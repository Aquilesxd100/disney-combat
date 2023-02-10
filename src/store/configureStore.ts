import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../store/slices/slices';
export default configureStore({
    reducer: {
        setAttributes: cardSlice,
    }
});