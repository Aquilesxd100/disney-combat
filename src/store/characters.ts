import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../service/request';
interface perso {
    films: [],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    _id: number,
    name: string,
    imageUrl: string,
    url: string
}
export const charactersList = createAsyncThunk(
    "", async () => {
        let response: perso[] = []
        while (response.length < 8) {
            await apiService.get("/characters")
            .then((res : any) => {
                !variavel && response.push(res);
                /* return res */
            })
            .catch((err : any) => {
                console.log(err);
            });
        }
        return response;
    }
)


