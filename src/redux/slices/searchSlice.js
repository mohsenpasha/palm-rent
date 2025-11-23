import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  branch_id:null,
  search_title:null,
  priceRange:null,
  selectedPriceRange:null,
  sort:null,
  currency:'AED',
  toman:null,
  selectedCategories:[]
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeBranchId: (state,action) => {
      state.branch_id = action.payload
    },
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
    changeCarCategory: (state,action) => {
      state.carCategory = action.payload
    },
    changeToman: (state,action) => {
      state.toman = action.payload
    },
    changeSelectedCategories: (state,action) => {
      state.selectedCategories = action.payload
    },
    toggleSelectedCategory: (state,action) => {
      if(state.selectedCategories.includes(action.payload)){
        state.selectedCategories = state.selectedCategories.filter(
          item => item !== action.payload
        );
      }
      else{
        state.selectedCategories = [...state.selectedCategories,action.payload]
      }
      // state.selectedCategories = state.selectedCategories.map(()=>)
    },
    
  },
})

export const { changeBranchId, changeSearchTitle, changePriceRange, changeSelectedPriceRange, changeSearchCurrency, changeSort, changeCarCategory, changeSelectedCategories, toggleSelectedCategory, changeToman } = searchSlice.actions
export default searchSlice.reducer