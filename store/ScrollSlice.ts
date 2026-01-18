import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type scrollState = {
  active: string
}

const initialState : scrollState = {
  active: "about"
}



const scrollSlice = createSlice({
  name: 'scroll', 
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.active = action.payload
    }
  }
})

export const  {setActive} = scrollSlice.actions;
export default scrollSlice.reducer;

