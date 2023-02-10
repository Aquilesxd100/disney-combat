import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../service/request';
import { perso } from '../types/types'
export const charactersList = createAsyncThunk(
    "", async () => {
        const response: perso[] =
            await apiService.get("/characters/random?limit=8")
            .then((res : any) => {console.log(res); return res })
            .catch((err : any) => {
                console.log(err);
            });
        return response;
    }
);


