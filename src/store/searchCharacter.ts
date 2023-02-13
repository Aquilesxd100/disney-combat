import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiService } from '../service/request';
import { objAPI, perso } from '../types/types'
 export const searchCharacter = createAsyncThunk(
     "search", async (name : any) => {
      name = (name.substring(0, 1)).toUpperCase() + name.substring(1, name.length);
      while (name.search(" ") !== -1) {
        let index = name.search(" ");
        let upperLetter = (name.substring(index + 1, index + 2)).toUpperCase();
        name = name.substring(0, index) + "%20" + upperLetter + name.substring(index + 2, name.length);
      }
      console.log(name)
         const response: any =
             await apiService.get(`/characters/?name=${name}`)
             .then((res : any) => { return res })
             .catch((err : any) => {
                 console.log(err);
             });
         return response;
     }
 );
interface stateType {
  filteredCharacter: any
}
const initialState : stateType = {
  filteredCharacter: {}
}
const charactersSearchSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(searchCharacter.fulfilled, (state, action : any) => {
      state.filteredCharacter = action.payload;
    })
  },
})
export default charactersSearchSlice.reducer; 



