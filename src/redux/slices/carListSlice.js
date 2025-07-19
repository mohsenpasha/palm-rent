import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  carList:[
    {
      title:'Audi r8 2022',
      // priceList:{},
    }
  ],
}

const carListSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
    addCarToList: (state,action) => {
      state.isReelActive = action.payload
    },
  },
})

export const { addCarToList } = carListSlice.actions
export default carListSlice.reducer