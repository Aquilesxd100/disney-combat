import { createSlice } from '@reduxjs/toolkit';
import { characterProfile } from '../../types/types';
export const cardSlice = createSlice({
    name: 'cardGenerator',
    initialState: {
        characters: [{}]
    },
    reducers: {
        attributes: (state, action) => {
            let points = {
                strength : 1,
                vitality : 1,
                dexterity : 1,
                intelligence : 1,
                random : 16  
            };      
            while (points.random > 0) {
              const randomAttribute = Math.floor(Math.random() * 4) + 1;
              switch (randomAttribute) {
                case 1:
                  points.strength += 1;
                  break;
                case 2:
                  points.vitality += 1;
                  break;
                case 3:
                  points.dexterity += 1;
                  break;
                case 4:
                  points.intelligence += 1;
                  break;
              }       
              points.random -= 1;
            }
            state.characters.push({
                name: action.payload.name,
                picture: action.payload.picture,
                strength: points.strength,
                dexterity: points.dexterity,
                vitality: points.vitality,
                inteligence: points.intelligence
            });
        },
    }
});
export const { attributes } = cardSlice.actions;
export default cardSlice.reducer; 