import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiService } from '../service/request';
import { objAPI, perso } from '../types/types'
let randomID = Number((Math.random() * 7438).toFixed(0));
 export const charactersList = createAsyncThunk(
     "", async () => {
       let usedCharacters : any = [];
       while (usedCharacters.length !== 8) {
         const response: any =
             await apiService.get(`/characters/${randomID}`)
             .then((res : any) => { return res })
             .catch((err : any) => {
                 console.log(err);
             });
         randomID = Number((Math.random() * 7438).toFixed(0));
         if (response !== undefined && !usedCharacters.some((perso : any) => perso.name === response.data.name)) { 
           usedCharacters.push(response.data);
         }
       }
         return usedCharacters;
     }
 );

/* export const getCharactersList = createAsyncThunk(
  "characters/getList",
  async () => {
    let usedCharacters = [];
    let randomID = Number((Math.random() * 7438).toFixed(0));
    while (usedCharacters.length !== 8) {
      const response = await apiService
        .get(`/characters/${randomID}`)
        .then((res) => res)
        .catch((err) => {
          console.log(err);
        });
      randomID = Number((Math.random() * 7438).toFixed(0));
      if (
        response !== undefined &&
        !usedCharacters.some((perso) => perso.name === response.data.name)
      ) {
        usedCharacters.push(response.data);
      }
    }
    return usedCharacters;
  }
); */
interface stateType {
  characters: perso[]
}
const initialState : stateType = {
  characters: []
}
const charactersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(charactersList.fulfilled, (state, action : any) => {
      state.characters = action.payload;
    })
  },
})
export default charactersSlice.reducer; 



