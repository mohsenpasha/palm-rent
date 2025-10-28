import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  branch_id:null,
  search_title:null,
  priceRange:null,
  selectedPriceRange:null,
  sort:null,
  currency:'AED'
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchTitle: (state,action) => {
      state.search_title = action.payload
    },
    changePriceRange: (state,action) => {
      state.priceRange = action.payload
    },
    changeSelectedPriceRange: (state,action) => {
      state.selectedPriceRange = action.payload
    },
    changeSearchCurrency: (state,action) => {
      state.currency = action.payload
    },
    changeSort: (state,action) => {
      state.sort = action.payload
    },
  },
})

export const { changeSearchTitle, changePriceRange, changeSelectedPriceRange, changeSearchCurrency, changeSort } = searchSlice.actions
export default searchSlice.reducer