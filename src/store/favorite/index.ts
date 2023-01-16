import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

interface IFavorite {
   name: "dark" | "light";
}
const initialState = {
   name: "light",
} as IFavorite;

export const favoriteSlice = createSlice({
   name: "favorite",
   initialState,
   reducers: {
      setTheme: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
         state.name = action.payload.name;
      },
   },
});

// Selectors
export const getName = (state: any) => state.favorite.name;

// Reducers and actions
export const {setTheme} = favoriteSlice.actions;

export default favoriteSlice.reducer;
