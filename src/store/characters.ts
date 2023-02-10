import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../service/request';
import { perso } from '../types/types'
export const charactersList = createAsyncThunk(
    "", async () => {
        let response: perso[] = []
        while (response.length < 8) {
            await apiService.get("/characters")
            .then((res : any) => {
                /* !variavel && response.push(res); */
                /* return res */
            })
            .catch((err : any) => {
                console.log(err);
            });
        }
        return response;
    }
);


