import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import cardSlice from '../store/slices/slices';
import charactersSlice from "../store/characters";
const store = configureStore({
    reducer: {
        setAttributes: cardSlice,
        setCharacters: charactersSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export const useStoreDispatch: () => StoreDispatch = useDispatch;
export default store;